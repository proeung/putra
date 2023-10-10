import Header from './header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
        <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
