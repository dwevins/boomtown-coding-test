import Head from 'next/head'
import { Body, Header, Footer } from "../components"

const notes = [
  {
    content: '<h1>hahalol</h1>',
    title: 'One'
  },
  {
    content: 'what',
    title: 'Two'
  },
  {
    content: 'what',
    title: 'Three'
  },
  {
    content: 'what',
    title: 'Four'
  },
  {
    content: '<script>console.log("dont let this code run!")</script>',
    title: 'Five'
  },
  {
    content: 'what',
    title: 'Six'
  },
  {
    content: 'what',
    title: 'Seven'
  },
  {
    content: 'what',
    title: 'Eight'
  },
  {
    content: 'what',
    title: 'Nine'
  },
  {
    content: 'what',
    title: 'Ten'
  },
]

const Home = () => (
  <>
    <Head>
      <title>Notes</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://kit.fontawesome.com/789a1337f8.js" crossorigin="anonymous"></script>
    </Head>
    <Header />
    <Body notes={notes} />
    <Footer />
  </>
)

export default Home
