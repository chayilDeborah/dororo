import Image from 'next/image'
import React from 'react'
import peabig from '../assets/peabig.png'

const Subscribe = () => {
  return (
    <main className='flex justify-center overflow-hidden  '>
        <section>
        <section className="hidden lg:block relative lg:mt-[38px] mt-[10px] text-center text-white ">
        <div className='lg:w-[1077px] w-[350px] h-[484px] bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1714734936/subb_eoqb03.png")] lg:pb-[200px] bg-cover bg-center  '>
        <div className='absolute w-full lg:mx-[0px] mx-auto flex flex-col justify-center '>
            <h1 className='pt-[140px] text-[24px] lg:text-[45px] leading-[35px] lg:leading-[67.5px] font-medium  ' data-aos="fade-up" data-duration="1400">Subscribe to our server</h1>
            <p className='text-[16px] lg:text-[20px] leading-[25px] lg:leading-[30px] mt-[19px] mb-[55px] w-[90%] mx-auto  lg:w-[65%] ' data-aos="fade-up" data-duration="1600">Ready to elevate your cryptocurrency trading game? Subscribe to our server today and unlock a world of opportunities in the ever-evolving landscape of digital assets.</p>
            <form className='flex flex-col lg:flex-row justify-center ' data-aos="fade-up" data-duration="1800">
                <input className='border-b-[#968E8E8F] text-[#968E8E8F] w-[200px] text-[16px] leading-[24px] lg:w-[400px] border-b-[1px] bg-[#0D0729] outline outline-none ' placeholder='Your email here'/>
                <button className='bg-[#04D6BD] lg:ml-[30px] w-[147px] h-[38px] text-[13px] lg:text-[17px] leading-[15px] lg:leading-[25px] text-[#16063B] font-semibold  '>Subscribe</button>
            </form>
            </div>
        </div>
        </section>

        <section className='lg:hidden block bg-[#0D0729] rounded-[34px] lg:rounded-[68px] w-[357px] text-white mx-auto mt-[150px] '>
            <div className='relative'>
            <div className=' w-[350px] h-[400px] bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1714746499/peabig_umyg7z.png")] bg-cover bg-center w-full '>
                <section className='absolute w-[95%] mx-auto '>
                <h1 className='pt-[60px] text-[24px] lg:text-[45px] leading-[35px] lg:leading-[67.5px] font-medium text-center  '>Subscribe to our server</h1>
                <p className='text-[15px] lg:text-[20px] leading-[25px] text-center lg:leading-[30px] mt-[19px] mb-[55px] w-[94%] mx-auto  '>Ready to elevate your cryptocurrency trading game? Subscribe to our server today and unlock a world of opportunities in the ever-evolving landscape of digital assets.</p>
                <form className='flex justify-center mx-auto ml-[10px] '>
                <input className='border-b-[#968E8E8F] text-[#968E8E8F] w-[200px] text-[13px] leading-[24px] lg:w-[400px] border-b-[1px] bg-[#0D0729] outline outline-none ' placeholder='Your email here'/>
                <button className='bg-[#04D6BD] ml-[8px] w-[147px] h-[38px] text-[13px] lg:text-[17px] leading-[15px] lg:leading-[25px] text-[#16063B] font-semibold  '>Subscribe</button>
            </form>
                </section>
            </div>

            </div>
        </section>
        </section>
    </main>
  )
}

export default Subscribe 