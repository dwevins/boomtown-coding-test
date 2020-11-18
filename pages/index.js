import Head from 'next/head'
import useSwr from 'swr'
import { Body, Header, Footer } from "../components"
import { fetcher } from '../utils';

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
      <Header />
      <Body notes={ data } />
      <Footer />
    </>
  )
}

export default Home
