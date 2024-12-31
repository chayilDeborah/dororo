import Image from "next/image";
import React from "react";
import ing from "../assets/ing.png";
import Link from "next/link";

const First = () => {
	return (
		<main className="flex overflow-hidden justify-center">
			<section className="lg:flex justify-between w-[95%]  mx-auto text-[#FFFFFF] ">
				<div className="mt-[50px] lg:mt-[137px] lg:w-[595px] text-center lg:text-left  ">
					<h2 className="text-[17px] lg:text-[20px] leading-[35px] lg:leading-[30px] font-bold text-[#18C9C1] ">
						WELCOME TO ASTRA EXTENSION
					</h2>
					<h1
						className="text-[42px] lg:text-[50px] leading-[57px] lg:leading-45px] font-semibold  my-[10px] "
						data-aos="fade-up"
					>
						Your ultimate Trading Partner!
						{/* seamlessly integrated
						with Dexscreener! */}
					</h1>
					<p
						className="text-[17px] lg:text-[24px] leading-[34px] lg:leading-[42px] w-[85%] lg:w-full lg:mx-[0px] mx-auto  font-semibold mb-[50px] "
						data-aos-offset="10"
						data-aos="fade-up"
					>
						In the fast-paced world of decentralized finance (DeFi),
						speed, convenience, and accuracy are everything. ASTRA
						EXTENSION revolutionizes the trading experience by
						embedding trading functionality directly into
						Dexscreener, eliminating the need to switch between
						platforms. Whether you&apos;re a seasoned trader or new
						to DeFi, ASTRA EXTENSION makes your journey faster,
						simpler, and more efficient..
					</p>
					<Link href="">
						<button className="launch w-[280px] lg:w-[437px] h-[86px] hover:bg-[#A27BD3] rounded-[21px] text-[20px] lg:text-[28px] leading-[34px] lg:leading-[42px] font-semibold ">
							Launch Telegram Bot
						</button>
					</Link>
				</div>
				<Image
					src={ing}
					alt="wave"
					className="lg:w-[515px] w-[90%] h-[340px] mx-auto md:mx-0 mt-[50px] md:mt-0 md:h-[440px] rounded-[20px] my-auto "
					data-aos="fade-up"
				/>
			</section>
		</main>
	);
};

export default First;
