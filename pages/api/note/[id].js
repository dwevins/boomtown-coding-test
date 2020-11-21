// adapted from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/pages/api/user/%5Bid%5D.js
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

export default function noteHandler(req, res) {
  const adapter = new FileSync('db.json')
  const db = low(adapter)

  const {
    body,
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get a specific note from the DB
      try {
        res.status(200).json(db.get('notes').find({ id: id }))        
      } catch (error) {
        res.status(404).json({error: 'Note not found'})
      }
      break
    case 'PUT':
      // Update a specific note
      try {
        db.get('notes')
          .find({ id: id })
          .assign({ ...body })
          .write() 

        res.status('200').end('success')
      } catch (error) {
        res.status('500').end(`error saving changes: ${error}`)
      }
      break
    case 'DELETE':
      // Delete a specific note
      try {
        db.get('notes')
          .remove({ id: id })
          .write()

        res.status('200').end('success')
      } catch (error) {
        res.status('500').end(`error deleting note: ${error}`)
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
