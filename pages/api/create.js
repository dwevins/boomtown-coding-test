// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

/**
 * Adds a note to the DB
 */
export default (req, res) => {
  const { body } = req

  const adapter = new FileSync('db.json')
  const db = low(adapter)
  
  try {
    const id = shortid.generate();
    
    db.get('notes')
      .push({ ...body, id })
      .write()

    res.status('200').end(id);
  } catch (error) {
    res.status('500').end(`error adding note: ${error}`)
  }
}
