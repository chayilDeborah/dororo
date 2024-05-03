"use client"
import React, { useEffect } from "react"
import Image from 'next/image'
import Homepage from './components/Homepage';
import Do from '../app/assets/Do.png'
import Aos from "aos"
import "aos/dist/aos.css"; 


export default function Home() {

  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])
  return (
    <main className='flex justify-center lg:pb-[150px]  '>
      <section className='lg:max-w-[1305px] w-full lg:mx-[0px] mx-auto lg:w-full' >
        <div className='relative'>
          {/* <div className='lg:w-full h-[5600px] lg:h-[6000px] bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1714742410/snp_unda4j.svg")] lg:pb-[200px] bg-cover bg-center w-full '> */}
            <div className='absolute w-full lg:mx-[0px] mx-auto flex justify-center '>
              <Homepage />
            </div>
          {/* </div> */}
        </div>
        
        {/* <Homepage /> */}
      </section>
    </main>
  )
}
