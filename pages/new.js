import { useState } from 'react'
import { useRouter } from 'next/router'

const New = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const titlePH = "What do you want to name this note?"
  const notePH = "What do you want this note to say?"

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (busy) return false

    setBusy(true)
    setError(false)

    try {
      const res = await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })

      router.push('/')
    } catch (error) {
      setError(error)
    }

    setBusy(false)
  }

  return (
    <>
      <div id="body">
        <div className="content-wrapper--sm">
          <form onSubmit={ handleSubmit }>
            <label>
              <div className="input-wrapper">
                <label htmlFor="note-title">
                  <h3>Note Title</h3>
                  <input id="note-title" type="text" value={title} onChange={handleTitleChange} placeholder={titlePH} disabled={error || busy}/>
                </label>
              </div>
              <div className="input-wrapper">
                <label htmlFor="note-content">
                  <h3>Note Content</h3>
                  <textarea id="note-content" rows={10} value={content} onChange={handleContentChange} placeholder={notePH} disabled={error || busy}/>
                </label>
              </div>
              <div className="input-wrapper">
                <input type="submit" value="Add Note" />
              </div>
            </label>
          </form>
          { error && (
            <div>
              <h3>There was an error saving your note:</h3>
              <p>{ error }</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default New
