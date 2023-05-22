import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title }) {
  return (
    <>
      <Header title={title} />
      <main> {children} </main>
      <Footer />
    </>
  )
}
