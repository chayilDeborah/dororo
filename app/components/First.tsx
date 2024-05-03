import Image from 'next/image'
import React from 'react';
import firstimg from '../assets/firstimg.svg'
import Link from 'next/link';

const First = () => {
  return (
    <main className='flex overflow-hidden justify-center'>
        <section className='lg:flex justify-between w-[95%]  mx-auto text-[#FFFFFF] '>
            <div className='mt-[50px] lg:mt-[137px] lg:w-[595px] text-center lg:text-left  '>
                <h2 className='text-[17px] lg:text-[20px] leading-[35px] lg:leading-[30px] font-bold text-[#18C9C1] '>BUILT ON BOB, POWERED BY YOU.</h2>
                <h1  className='text-[42px] lg:text-[70px] leading-[57px] lg:leading-[105px] font-semibold  my-[10px] ' data-aos="fade-up">First trading bot on Bob chain</h1>
                <p className='text-[17px] lg:text-[26px] leading-[34px] lg:leading-[42px] w-[85%] lg:w-full lg:mx-[0px] mx-auto  font-semibold mb-[50px] ' data-aos-offset="10" data-aos="fade-up">Dororo Bot is the first trading bot on the Bobchain network, enabling users to automate cryptocurrency trading with enhanced security and liquidity. With real-time market data, customizable strategies, and advanced risk management, Dororo Bot offers an intuitive solution for traders of all levels to optimize their performance on Bobchain.</p>
                <Link href='https://t.me/dororo_sniper_bot?start=418317460'>
                <button className='launch w-[280px] lg:w-[437px] h-[86px] hover:bg-[#A27BD3] rounded-[21px] text-[20px] lg:text-[28px] leading-[34px] lg:leading-[42px] font-semibold '>Launch Telegram Bot</button>
                </Link></div>
            <Image src={firstimg} alt='wave' className='lg:w-[608px] '  data-aos="fade-up"/>

        </section>
    </main>
  )
}

export default First