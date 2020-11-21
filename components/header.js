import Link from 'next/link'

/**
 * Renders the global header
 */
const Header = () => (
  <header>
    <div className="content-wrapper">
      <Link href="/">
        <a>
          <h1>Notes</h1>
        </a>
      </Link>
    </div>
  </header>
)

export default Header
