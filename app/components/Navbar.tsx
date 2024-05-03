"use client";
import Image from 'next/image'
import React, { useState } from "react";
import logo from '../assets/logo.png'
import Link from "next/link";
import menuh from "../assets/menuh.svg";
import close from "../assets/close.svg";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};


  return (
   <nav className="flex justify-center mx-auto w-[95%] justify-between my-[37px] text-white">
			<Link href="/">
      <section className='flex '>
	<Image src={logo} alt='logo' className='lg:mr-[13px] mr-[5px] lg:w-[60px] w-[30px] ' />
	<h1 className='text-[21px] lg:text-[36px] leading-[29px] font-bold lg:leading-[54px] my-auto '>Dororo</h1>
</section>
			</Link>
			<div className="lg:hidden w-[6%] ">
				<button
					onClick={toggleMenu}
					className="lg:mt-[0px] mt-[20px] lg:mr-[0px] mt-[15px] "
				>
					<div className="-ml-[18px] ">
						{isMenuOpen ? (
							<Image
								src={close}
								alt="close"
								className="w-[24px] -mr-[35px] fixed z-500 close"
							/>
						) : (
							<Image
								src={menuh}
								alt="close"
								className=" w-[45px] -mt-[20px] "
							/>
						)}
					</div>
				</button>
			</div>
			<section
				className={`${
					isMenuOpen
						? "block fixed  z-50 p-[50px] lg:p-[0px] lg:text-left  text-center bg-[#050505] bg-opacity-500 w-[100%] mx-auto"
						: "hidden"
				} lg:flex font-dm-sans justify-between lg:w-[597px] my-auto `}
			>
				<Link href="/">
					<h1 className=" lg:my-auto hover:text-[#04D6BD]">
						Home
					</h1>
				</Link>
				<Link href="/#about">
					<h1 className="my-[20px] lg:my-auto hover:text-[#04D6BD] ">
						About
					</h1>
				</Link>
				<Link href="/#features">
					<h1 className="lg:my-auto hover:text-[#04D6BD]">
          Features
					</h1>
				</Link>
				<Link href="/#services">
					<h1 className="my-[20px] lg:my-auto hover:text-[#04D6BD]">
          Services
					</h1>
				</Link>
        <Link href="/#contact">
					<h1 className="lg:my-auto hover:text-[#04D6BD]">
          Contact
					</h1>
				</Link>
			</section>
		</nav>
  )
}

export default Navbar