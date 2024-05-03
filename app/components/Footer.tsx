import Image from 'next/image'
import React from 'react'
import doro from '../assets/doro.svg'
import Link from 'next/link';
import linkedin from '../assets/linkedin.svg'
import ring from '../assets/ring.svg';
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.svg';
import fire from '../assets/fire.svg';
import discord from '../assets/discord.svg'


const Footer = () => {
    return (
        <main className='flex justify-center overflow-hidden mt-[70px] lg:mt-[150px] pb-[200px] ' data-aos="fade-up">
            <section className='w-full'>
                <Image src={doro} alt='logo' className='w-fit mx-auto ' />
                <div className='border-y-[#968E8E] border-y-[1px] w-[90%] mx-auto lg:w-[1000px] mt-[72px] pt-[44px] pb-[56px] '>
                    <section className='grid grid-cols-3 justify-between lg:grid-cols-6 '>
                        <Link href='#'>
                            <Image src={discord} alt='discord' className='mx-auto lg:mb-[0px] mb-[40px] ' />
                        </Link>
                        <Link href='#'>
                            <Image src={ring} alt='ring' className='mx-auto lg:mb-[0px] mb-[40px] ' />
                        </Link>
                        <Link href='#'>
                            <Image src={fire} alt='fire' className='mx-auto lg:mb-[0px] mb-[40px] ' />
                        </Link>
                        <Link href='#'>
                            <Image src={linkedin} alt='linkedin' className='mx-auto' />
                        </Link>
                        <Link href='https://x.com/DororoTradeBot?t=CPkAuxmqC630DxwqNXdMaQ&s=09'>
                            <Image src={twitter} alt='twitter' className='mx-auto' />
                        </Link>
                        <Link href='#'>
                            <Image src={youtube} alt='youtube' className='mx-auto' />
                        </Link>

                    </section>

                </div>
                <section className='mx-auto lg:w-[946px]  w-[95%]  mx-auto text-[18px] leading-[27px] text-[#968E8E] justify-between lg:flex mt-[68px] lg:mt-[88px] '>
                    <Link href='https://t.me/dororo_sniper_bot?start=418317460'>
                    <h1 className='text-center hover:text-[#04D6BD] text-[20px] lg:mb-[0px] mb-[25px] lg:text-left '>Launch Telegram Bot</h1></Link>
                    <div className='grid grid-cols-2 justify-between text-center lg:text-left lg:grid-cols-4  lg:w-[684px] justify-between'>

                        <Link href="/#about">
                            <h1 className="mb-[35px] lg:my-auto hover:text-[#04D6BD] ">
                                About
                            </h1>
                        </Link>
                        <Link href="/#features">
                            <h1 className="lg:my-auto hover:text-[#04D6BD]">
                            Features
                            </h1>
                        </Link>
                        <Link href="/#services">
                            <h1 className=" lg:my-auto hover:text-[#04D6BD]">
                                Services
                            </h1>
                        </Link>
                        <Link href="/#contact">
                            <h1 className="lg:my-auto hover:text-[#04D6BD]">
                                Contact
                            </h1>
                        </Link>
                    </div>

                </section>
            </section>

        </main>
    )
}

export default Footer