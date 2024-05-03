import Image from 'next/image'
import React from 'react'
import about from '../assets/about.svg';
import webkit from '../assets/webkit.svg'
import search from '../assets/search.svg'
import custod from '../assets/custod.svg'
import bitcoin from '../assets/bitcoin.svg'

const About = () => {
   return (
   <main className='flex justify-center mt-[98px] lg:mt-[118px] text-white ' id='about'>
<section className='flex justify-between lg:flex-row flex-col-reverse w-[95%] mx-auto text-[#FFFFFF] text-center lg:text-left  '>
    <Image src={about} alt='about-us img' className='lg:w-[600px]  w-[95%] lg:mx-[0px] mx-auto'data-aos="fade-right" />
    <div className='lg:ml-[100px] ' data-aos="fade-left">
        <h1 className='text-[30px] lg:text-[45px] leading-[45px] lg:leading-[67.5px] font-semibold '>Fully decentralized of Completely secure</h1>
        <p className='text-[16px] lg:text-[17px] leading-[28px] lg:leading-[31.5px] mt-[10px] mb-[30px] w-[96%] lg:mx-[0px] mx-auto  lg:w-[95%] '>With real-time market data, customizable strategies, and advanced risk management, Dororo Bot offers an intuitive solution for traders of all levels to optimize their performance on Bobchain.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-[#968E8E] w-[85%] lg:mx-[0px] mx-auto  lg:w-full text-left'>
            <section className='flex  '>
                <Image src={webkit} alt='webkit-img' className='' />
                <p className='text-[16px]  leading-[24px] w-[60%] ml-[21px] ' >Constant reviews and testing of our platform</p>
            </section>
            <section className='flex my-[30px] lg:my-[0px] '>
                <Image src={search} alt='search-img' className='' />
                <p className='text-[16px]  leading-[24px] w-[60%] ml-[21px] ' >Your funds are as secure as possible</p>
            </section>
            <section className='flex lg:mt-[44px] '>
                <Image src={custod} alt='custod-img' className='' />
                <p className='text-[16px]  leading-[24px] w-[60%] ml-[21px] ' >Fully decentralized and non-custodial</p>
            </section>
            <section className='flex lg:mt-[44px] mt-[30px] mb-[50px] lg:mb-[0px] '>
                <Image src={bitcoin} alt='bitcoin-img' className=' w-fit' />
                <p className='text-[16px]  leading-[24px] w-[60%] ml-[21px] ' >Constant reviews and testing of our platform</p>
            </section>


        </div>
    </div>
</section>
   </main>
  )
}

export default About