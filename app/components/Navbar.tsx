"use client";
import Image from "next/image";
import React, { useState } from "react";
import Alogo from "../assets/Alogo.png";
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
				<section className="flex ">
					<Image
						src={Alogo}
						alt="logo"
						className="lg:w-[198px] w-[146px] md:mt-0 -mt-[28px] "
					/>
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
						? "block inset-0 fixed z-50 pb-[50px] pt-[100px] px-[50px] lg:p-[0px] lg:text-left  text-center bg-[#0C072B] bg-opacity-500 w-[100%] mx-auto"
						: "hidden"
				} lg:flex font-dm-sans justify-between lg:w-[597px] my-auto `}
			>
				<Link href="/">
					<h1 className=" lg:my-auto hover:text-[#04D6BD]">Home</h1>
				</Link>
				{/* <Link href="/#about">
					<h1 className="my-[20px] lg:my-auto hover:text-[#04D6BD] ">
						About
					</h1>
				</Link> */}
				<Link href="/#features">
					<h1 className="lg:my-auto hover:text-[#04D6BD]">
						Our Features
					</h1>
				</Link>
				<Link href="/#services">
					<h1 className="my-[20px] lg:my-auto hover:text-[#04D6BD]">
						Services
					</h1>
				</Link>
				<Link href="/#contact">
					<h1 className="lg:my-auto hover:text-[#04D6BD]">Contact</h1>
				</Link>
			</section>
		</nav>
	);
};

export default Navbar;
