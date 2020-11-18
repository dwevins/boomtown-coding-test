import Head from 'next/head'
import Link from 'next/link'
import useSwr from 'swr'
import { fetcher } from '../utils';

const handleAddNewClick = () => {
  console.log('adding new note!');
}

const renderItem = (item, index) => (
  <Link href={ `/notes/${item.id}` } key={index}>
    <a className="flex-grid__item preview">
      <h2 className="ta--center">{item.title}</h2>
    </a>
  </Link>
)

const Home = () => {
  const { data, error } = useSwr('/api/notes', fetcher)

  if (error) return <div>Failed to load notes</div>
  if (!data) return <div>Loading...</div>

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
            <div className="flex-grid__item preview flex--center" onClick={handleAddNewClick}>
              <i className="fas fa-plus"></i>
            </div>
            {data.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
