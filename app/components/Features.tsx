import Image from 'next/image'
import React from 'react';
import util from '../assets/util.svg';
import risk from '../assets/risk.svg';
import cheap from '../assets/cheap.png';
import leverage from '../assets/lever.png';
import comp from '../assets/comp.svg';
import trading from '../assets/trading.svg'

const Features = () => {
  return (
    <main className='flex justify-center mt-[160px] lg:mt-[250px]  ' data-aos="fade-up" id='features'>
        <section className='lg:w-full w-[95%] lg:mx-[0px] mx-auto text-[#FFFFFF] text-center '>
            <h1 className='text-[30px] lg:text-[45px] leading-[45px] lg:leading-[67.5px] font-semibold '>Our Features</h1>
            <p className='text-[17px] lg:text-[28px] leading-[35px] lg:leading-[42px] font-semibold lg:w-[70%] w-[95%] mx-auto mb-[49px] '  data-aos="fade-up" >Dororo Bot ensures transparency, security, and autonomy in cryptocurrency trading, aligning with the principles of decentralization and empowering users to take control of their financial future.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-[#968E8E] w-[95%] lg:mx-[0px] mx-auto  lg:w-full text-left'>
                <div className='text-center w-fit mx-auto lg:mx-[0px] mb-[80px] lg:mb-[115px] '  data-aos="fade-up" data-duration="1400">
                    <Image src={util} alt='leverage' className='w-[300px] ' />
                    <h2 className='text-[17px] -mt-[80px] lg:text-[18px] leading-[45px] lg:leading-[27px] font-semibold'>Utilizes the most liquid AMMs</h2>
                </div>
                <div className='text-center w-fit mx-auto lg:mx-[0px] mb-[80px] lg:mb-[115px] ' data-aos="fade-up" data-duration="1500">
                    <Image src={risk} alt='risk' className='w-[300px] ' />
                    <h2 className='text-[17px] -mt-[80px] lg:text-[18px] leading-[45px] lg:leading-[27px] font-semibold'>Low-risk liquidity pools</h2>
                </div>
                <div className='text-center w-fit mx-auto lg:mx-[0px] mb-[80px] lg:mb-[115px] '  data-aos="fade-up" data-duration="1600">
                    <Image src={cheap} alt='cheap' className='w-[300px] ' />
                    <h2 className='text-[17px] -mt-[80px] lg:text-[18px] leading-[45px] lg:leading-[27px] font-semibold'>Super cheap transactions</h2>
                </div>
                <div className='text-center w-fit mx-auto lg:mx-[0px] mb-[80px] '  data-aos="fade-up" data-duration="1700">
                    <Image src={leverage} alt='leverage' className='w-[300px] ' />
                    <h2 className='text-[17px] -mt-[80px] lg:text-[18px] leading-[45px] lg:leading-[27px] font-semibold'>Leverage up to 55x</h2>
                </div>
                <div className='text-center w-fit mx-auto lg:mx-[0px] mb-[80px] ' data-aos="fade-up" data-duration="1800">
                    <Image src={trading} alt='leverage' className='w-[300px] ' />
                    <h2 className='text-[17px] -mt-[80px] lg:text-[18px] leading-[45px] lg:leading-[27px] font-semibold'>Permissionless trading</h2>
                </div>
                <div className='text-center w-fit mx-auto lg:mx-[0px] mb-[80px] '  data-aos="fade-up" data-duration="1900">
                    <Image src={comp} alt='leverage' className='w-[300px] ' />
                    <h2 className='text-[17px] -mt-[80px] lg:text-[18px] leading-[45px] lg:leading-[27px] font-semibold'>Fully composable</h2>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Features