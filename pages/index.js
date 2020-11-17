import Head from 'next/head'
import { Body, Header, Footer } from "../components"

const Home = () => (
  <>
    <Head>
      <title>Notes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Body />
    <Footer />
  </>
)

export default Home
