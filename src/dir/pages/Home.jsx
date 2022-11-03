import React, { Fragment, useState, useEffect } from 'react'
import user from '../assets/user.png'
import Footer from '../components/Footer'
import Hero from '../components/section/Hero'
import Section from '../components/section/Section'

function Home() {
  const [loader, setLoader] = useState(true)

  return (
    <Fragment>
      <Hero />
      <Section />
      <Footer />
    </Fragment>
  )
}

export default Home
