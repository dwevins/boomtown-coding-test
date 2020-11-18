import { useState } from 'react'
import { useRouter } from 'next/router'

const New = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

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
        <div className="content-wrapper--sm ta--center">
          <form onSubmit={ handleSubmit }>
            <label>
              <div>
                <input type="text" value={ title } onChange={ handleTitleChange } />
              </div>
              <div>
                <textarea value={ content } onChange={ handleContentChange }/>
              </div>
              <div>
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

export default New;
