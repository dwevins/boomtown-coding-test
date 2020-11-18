import Head from 'next/head'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import { fetcher } from '../../utils'

const Note = () => {
  const router = useRouter()
  const { data, error } = useSwr(`/api/note/${router.query.id}`, fetcher)

  if (error) return <div>Failed to load note</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{ data.title || "loading" }</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/789a1337f8.js" crossOrigin="anonymous"></script>
      </Head>
      <div id="body">
        <div className="content-wrapper--sm">
          <h2 className="ta--center">{ data.title }</h2>
          <p className="ta--center">{ data.content }</p>
        </div>
      </div>
    </>
  )
}

export default Note;
