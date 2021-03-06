import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import { fetcher } from '../../utils'
import { Error } from '../../components'

/**
 * Renders a view for modifying and/or deleting notes
 */
const Note = () => {
  const router = useRouter()
  const { data, error } = useSwr(`/api/note/${router.query.id}`, fetcher)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState(false)

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  useEffect(() => {
    if (error) {
      setErr(error)
    }
    else if (data) {
      setTitle(data.title)
      setContent(data.content)
    }
  }, [data, error])

  const handleSubmit = async e => {
    e.preventDefault()

    if (busy) return false

    setBusy(true)
    setErr(false)

    try {
      await fetch(`/api/note/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      })

      router.push('/')
    } catch (error) {
      setErr(error)
    }
  }

  const handleDelete = async e => {
    e.preventDefault()

    if (busy) return false

    setBusy(true)
    setErr(false)

    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await fetch(`/api/note/${data.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
  
        router.push('/')
      } catch (error) {
        setErr(error)
      }
    } else {
      setBusy(false)
    }
  }

  if (error) return (
    <Error message="Failed to load notes" />
  )

  if (!data) return (
    <Error message="Loading..." />
  )

  return (
    <>
      <Head>
        <title>{data?.title || "loading"}</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/789a1337f8.js" crossOrigin="anonymous"></script>
      </Head>
      <div id="body">
        <div className="content-wrapper--sm">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="note-title">
                <h3>Note Title</h3>
                <input id="note-title" type="text" value={title} onChange={handleTitleChange} disabled={!data || busy} />
              </label>
            </div>
            <div className="input-wrapper">
              <label htmlFor="note-content">
                <h3>Note Content</h3>
                <textarea id="note-content" rows={10} value={content} onChange={handleContentChange} disabled={!data || busy} />
              </label>
            </div>
            <div className="input-wrapper">
              <input type="submit" value="Update Note" disabled={!data || busy} />
            </div>
            <div className="input-wrapper">
              <button className="delete-btn" onClick={handleDelete}>
                <b>DELETE NOTE</b>
              </button>
            </div>
          </form>
          {err && (
            <div>
              <h3>There was an error saving your note:</h3>
              <p>{err}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Note
