import Head from 'next/head'
import Link from 'next/link'
import useSwr from 'swr'
import { fetcher } from '../utils'
import { Error } from '../components'

const renderItem = (item, index) => {
  return (
    <Link href={ `/notes/${item.id}` } key={index}>
      <a className="flex-grid__item preview">
        <h2 className="ta--center">{item.title || '(No Title)'}</h2>
      </a>
    </Link>
  )
}

const Home = () => {
  const { data, error } = useSwr('/api/notes', fetcher)

  if (error) return (
    <Error message="Failed to load notes" />
  )

  if (!data) return (
    <Error message="Loading..." />
  )

  return (
    <>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/789a1337f8.js" crossOrigin="anonymous"></script>
      </Head>
      <div id="body">
        <div className="content-wrapper">
          <div className="flex-grid">
            <Link href="/new">
              <a className="flex-grid__item preview flex--center">
                <i className="fas fa-plus"></i>
              </a>
            </Link>
            {data.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
