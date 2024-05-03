import Image from 'next/image'
import React from 'react';
import bob from '../assets/bob.svg';
import chart from '../assets/chart.png';
import eye from '../assets/eye.png';
import pie from '../assets/pie.png';
import fly from '../assets/fly.png'
import full from '../assets/full.svg'
import mobileful from '../assets/mobileful.svg'

const Services = () => {
  return (
    <main className='flex justify-center mt-[110px] lg:mt-[196px] overflow-hidden ' data-aos="fade-right">
          <section className=' w-[95%] mx-auto text-[#FFFFFF] text-center lg:mb-[220px] '>
          <h1 className='text-[25px] lg:text-[45px] leading-[45px] lg:leading-[67.5px] font-semibold ' >Built on Bob Owned by you</h1>
          <p className='text-[16px] lg:text-[21px] leading-[28px] lg:leading-[39px] mt-[12px] mb-[123px] w-[96%] mx-auto  lg:w-[70%] '>Dororo Bot, built on Bobchain and owned by our team, revolutionizes cryptocurrency trading with its innovative features. Leveraging Bobchain&apos;s hybrid Layer 2 infrastructure, Dororo Bot ensures enhanced security and liquidity. Users benefit from real-time market data, customizable trading strategies, and advanced risk management tools. With Dororo Bot, traders can optimize their performance confidently on our platform, powered by Bobchain&apos;s cutting-edge technology</p>
          <Image src={bob} alt='bob' className='' />
          <div className='lg:flex justify-between lg:-mt-[300px] '>
            <div>
                <h1 className='-mt-[55px] lg:mt-[0px] text-[22px] lg:text-[45px] leading-[45px] lg:leading-[67.5px] lg:text-left lg:w-[80%] font-semibold '>Take full advantage of everything Bob chain and Dororo Sniper bot have to offer.</h1>
                <section className='mt-[24px] lg:mt-[46px] '>
                    <div className='flex lg:w-full w-[93%] lg:mx-[0px] mx-auto'>
                        <Image src={chart} alt='chart' className='w-[28px] lg:w-[30px] ' />
                        <p className='text-[15px] lg:text-[20px] leading-[28px] lg:leading-[30px] my-auto ml-[10px] lg:ml-[18px] '>Say goodbye to eye-watering gas fees</p>
                    </div>
                    <div className='flex lg:w-full w-[93%] lg:mx-[0px] mx-auto my-[18px] '>
                        <Image src={eye} alt='chart' className='w-[28px] lg:w-[30px] ' />
                        <p className='text-[15px] lg:text-[20px] leading-[28px] lg:leading-[30px] my-auto ml-[10px] lg:ml-[18px] '>Execute your trades instantly</p>
                    </div>
                    <div className='flex lg:w-full w-[93%] lg:mx-[0px] mx-auto'>
                        <Image src={fly} alt='chart' className='w-[28px] lg:w-[30px] ' />
                        <p className='text-[15px] lg:text-[20px] leading-[28px] lg:leading-[30px] my-auto ml-[10px] lg:ml-[18px] '>Trade from any device</p>
                    </div>
                    <div className='flex lg:w-full w-[93%] lg:mx-[0px] mx-auto mt-[18px] '>
                        <Image src={pie} alt='chart' className='w-[28px] lg:w-[30px] h-[28px] lg:h-[30px] my-auto' />
                        <p className='text-[15px] lg:text-[20px] leading-[24px] text-left lg:leading-[30px] my-auto ml-[10px] lg:ml-[18px] '>Gain leveraged exposure on unique token pairs</p>
                    </div>

                </section>
            </div>
            {/* <Image src={full} alt='ad' className='' /> */}
            <Image src={mobileful} alt='ad' className='lg:mt-[0px] mt-[110px] lg:h-[553px] h-[400px] ' />
          </div>
          </section>

    </main>
  )
}

export default Services