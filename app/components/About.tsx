import Image from 'next/image'
import React from 'react'
import about from '../assets/about.svg';
import webkit from '../assets/webkit.svg'
import search from '../assets/search.svg'
import custod from '../assets/custod.svg'
import bitcoin from '../assets/bitcoin.svg'

const About = () => {
   return (
   <main className='flex justify-center mt-[98px] lg:mt-[118px] text-white '>
<section className='flex justify-between lg:flex-row flex-col-reverse w-[95%] lg:mx-[0px] mx-auto  lg:w-full text-[#FFFFFF] text-center lg:text-left  '>
    <Image src={about} alt='about-us img' className='lg:w-[600px]  w-[95%] lg:mx-[0px] mx-auto' />
    <div>
        <h1 className='text-[30px] lg:text-[55px] leading-[45px] lg:leading-[102px] font-semibold '>Fully decentralized of Completely secure</h1>
        <p className='text-[16px] lg:text-[21px] leading-[28px] lg:leading-[39px] mt-[10px] mb-[30px] w-[96%] lg:mx-[0px] mx-auto  lg:w-full '>Lorem ipsum dolor sit amet consectetur. Nisl vulputate faucibus mauris elementum quam lacus mauris vulputate risus. Integer lobortis amet quam elementum. Dictumst aliquet integer eu et nibh lorem. Vel ac adipiscing penatibus rhoncus aenean.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-[#968E8E] w-[95%] lg:mx-[0px] mx-auto  lg:w-full text-left'>
            <section className='flex  '>
                <Image src={webkit} alt='webkit-img' className='' />
                <p className='text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] ml-[21px] ' >Constant reviews and testing of our platform</p>
            </section>
            <section className='flex my-[30px] lg:my-[0px] '>
                <Image src={search} alt='search-img' className='' />
                <p className='text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] ml-[21px] ' >Your funds are as secure as possible</p>
            </section>
            <section className='flex lg:mt-[44px] '>
                <Image src={custod} alt='custod-img' className='' />
                <p className='text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] ml-[21px] ' >Fully decentralized and non-custodial</p>
            </section>
            <section className='flex lg:mt-[44px] mt-[30px] mb-[50px] '>
                <Image src={webkit} alt='webkit-img' className='' />
                <p className='text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] ml-[21px] ' >Constant reviews and testing of our platform</p>
            </section>

        </div>
    </div>
</section>
   </main>
  )
}

export default About