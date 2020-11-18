// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

export default (req, res) => {
  const adapter = new FileSync('db.json')
  const db = low(adapter)

  db.defaults({
    notes: [
      {
        title: "Sample Note",
        content: "Have fun adding notes!",
        id: shortid.generate()
      }
    ]
  })
    .write()

  res.statusCode = 200
  res.json(db.get('notes'))
}
