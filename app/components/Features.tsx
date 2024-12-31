import Image from "next/image";
import React from "react";
import util from "../assets/util.svg";
import risk from "../assets/risk.svg";
import cheap from "../assets/cheap.png";
import leverage from "../assets/lever.png";
import comp from "../assets/comp.svg";
import trading from "../assets/trading.svg";

const Features = () => {
	return (
		<main
			className="flex justify-center mt-[160px] lg:mt-[250px]  "
			data-aos="fade-up"
			id="features"
		>
			<section className="lg:w-full w-[95%] lg:mx-[0px] mx-auto text-[#FFFFFF] ">
				<h1 className="text-[30px] lg:text-[45px] leading-[45px] lg:leading-[67.5px] font-semibold lg:mb-[15px]  text-center">
					Our Features
				</h1>
				<p
					className="text-[17px] lg:text-[28px] leading-[35px]  text-center lg:leading-[42px] font-semibold lg:w-[70%] w-[95%] mx-auto mb-[49px] "
					data-aos="fade-up"
				>
					{" "}
					Astra Extension ensures transparency, security, and autonomy
					in cryptocurrency trading, aligning with the principles of
					decentralization and empowering users to take control of
					their financial future.
				</p>
				<section className="grid lg:grid-cols-2 mt-[112px] lg:w-[97%] w-[90%] mx-auto pb-[15px] lg:mt-[140px] grid-cols-1 ">
					<div
						className="relative"
						data-aos="fade-up"
						data-duration="1400"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							01
						</div>
						<div className="bigcard h-[342px] lg:h-[300px] ">
							<h1 className="subtitle font-bold leading-[40px]">
								🔗 Seamless Integration with Dexscreener
							</h1>
							<p className="text-[16.9px] lg:text-[22px] leading-[180%]  ">
								Research and execute trades all in one place
								without disrupting your workflow.
							</p>
							{/* <Image
								src={dance}
								alt="quietpepe"
								className="w-[159px] mt-[20px] mx-auto rounded-[50%] "
							/> */}
						</div>
					</div>
					<div
						className="relative lg:ml-[50px] mt-[120px] md:mt-[150px] lg:mt-[0px] "
						data-aos="fade-up"
						data-duration="1500"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							02
						</div>
						<div className="bigcard lg:h-[300px] h-[330px]">
							<h1 className="subtitle font-bold">
								⚡ Instant Token Trading
							</h1>
							<div className="text-[16.9px] lg:text-[22px] leading-[180%]  ">
								Buy tokens as you analyze them. ASTRA EXTENSION
								removes delays and missed opportunities.
							</div>
						</div>
					</div>
					<div
						className="relative mt-[120px] md:mt-[150px] lg:mt-[110px] "
						data-aos="fade-up"
						data-duration="1600"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							03
						</div>
						<div className="bigcard h-[300px] lg:h-[300px] ">
							<h1 className="subtitle mb-[15px] font-bold">
								🛠️ Customizable Trade Settings
							</h1>
							<div className="text-[16.9px] lg:text-[22px] leading-[160%]  ">
								{" "}
								Set your slippage, fees, and parameters to match
								your unique trading strategy.
							</div>
						</div>
					</div>
					<div
						className="relative mt-[120px] md:mt-[150px] lg:mt-[110px] md:ml-[50px] "
						data-aos="fade-up"
						data-duration="1600"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							04
						</div>
						<div className="bigcard h-[335px] lg:h-[300px] ">
							<h1 className="subtitle mb-[15px] font-bold">
								🌐 Ethereum Network Compatibility
							</h1>
							<div className="text-[16.9px] lg:text-[22px] leading-[160%]  ">
								{" "}
								Currently built for Ethereum with plans to
								expand to more networks based on demand.
							</div>
						</div>
					</div>
					<div
						className="relative mt-[120px] md:mt-[150px] lg:my-[110px] "
						data-aos="fade-up"
						data-duration="1600"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							05
						</div>
						<div className="bigcard h-[265px] lg:h-[300px] ">
							<h1 className="subtitle mb-[15px] font-bold">
								🔒 Robust Security
							</h1>
							<div className="text-[16.9px] lg:text-[22px] leading-[160%]  ">
								{" "}
								Advanced security protocols and regular audits
								ensure a safe trading experience.
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Features;
