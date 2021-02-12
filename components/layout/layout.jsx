import Footer from './footer'
import Head from './head'
import Covid from './covid'
import Nav from '../nav/nav'
import Navigation from '../nav/navigation'

const Layout = ({ children, title, type }) => {
  return (
    <>
      <Head title={title} />
      <Covid />
      {type === 'navigation' ? <Navigation /> : <Nav />}

      <div id="page" className="p-2">
        {children}
      </div>

      <Footer />
    </>
  )
}

export default Layout
