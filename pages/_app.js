import '../styles/styles.css'
import { Header, Footer } from "../components"

/**
 * Renders the app
 */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
