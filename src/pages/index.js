import * as React from "react"
import Footer from '../../components/Footer'
import Hero from "../../components/Hero"
import Navbar from '../../components/Navbar'
import Walps from '../../components/Walps'
import Meta from '../../components/Meta'
import '../styles/master.css'

const IndexPage = () => {
  return (
    <main>
      <Meta />
      <Navbar />
      <Hero />
      <Walps />
      <Footer />
    </main>
  )
}

export default IndexPage
