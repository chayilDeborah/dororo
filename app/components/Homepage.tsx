import React from 'react'
import Navbar from './Navbar'
import First from './First'
import Ca from './Ca'
import About from './About'

const Homepage = () => {
  return (
    <main className='w-full  mx-auto '>
      <Navbar />
      <First />
      <Ca />
      <About />
    </main>
  )
}

export default Homepage