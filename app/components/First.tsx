import Image from 'next/image'
import React from 'react';
import firstimg from '../assets/firstimg.svg'

const First = () => {
  return (
    <main className='flex justify-center'>
        <section className='lg:flex w-[95%] lg:mx-[0px] mx-auto  lg:w-full text-[#FFFFFF] '>
            <div className='mt-[50px] lg:mt-[137px] lg:w-[800px] text-center lg:text-left lg:ml-[30px] '>
                <h2 className='text-[17px] lg:text-[28px] leading-[35px] lg:leading-[42px] font-bold text-[#18C9C1] '>BUILT ON BOB, POWERED BY YOU.</h2>
                <h1  className='text-[42px] lg:text-[96px] leading-[57px] lg:leading-[144px] font-semibold  my-[10px] '>First trading bot on Bob chain</h1>
                <p className='text-[17px] lg:text-[28px] leading-[34px] lg:leading-[42px] w-[85%] lg:w-full lg:mx-[0px] mx-auto  font-semibold mb-[50px] '>Lorem ipsum dolor sit amet consectetur. Et sed feugiat sapien hac quisque ultrices urna mauris. Odio cras elit sit commodo.</p>
                <button className='launch w-[280px] lg:w-[437px] h-[86px] rounded-[21px] text-[20px] lg:text-[28px] leading-[34px] lg:leading-[42px] font-semibold '>Launch Telegram Bot</button>
            </div>
            <Image src={firstimg} alt='wave' className='' />

        </section>
    </main>
  )
}

export default First