import React from "react";
import Image from "next/image";
import HeroSvg from "./HeroSvg";
import heroimg from "../assets/hero.png";
import Slider from "./Slider";
const Hero = () => {
  return (
    <div className="h-screen bg-custom-dark pt-32">
      <div className="flex border-b px-16 max-h-screen min-h-[75%]">
        <div className="items-start justify-center text-center flex-row w-1/2">
          <h1 className="text-custom-white text-9xl ">Virtual World</h1>
          <p className="text-custom-white text-2xl">
            WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT
            AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
          </p>
        </div>
        <div className="">
          {/* <HeroSvg /> */}
          <Image src={heroimg} alt="Hero" width={500} height={700} relative />
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Hero;
