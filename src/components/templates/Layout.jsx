import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title }) {
  return (
    <>
      <Header title={title} />
      <main className="mt-10 mb-10"> {children} </main>
      <Footer />
    </>
  )
}
