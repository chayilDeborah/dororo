import React from 'react'
import Navbar from './Navbar'
import First from './First'
import Ca from './Ca'
import About from './About'
import Features from './Features'
import Services from './Services'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Homepage = () => {
  return (
    <main className='w-full  overflow-hidden mx-auto '>
      <Navbar />
      <First />
      <Ca />
      <About />
      <Features />
      <Services />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default Homepage