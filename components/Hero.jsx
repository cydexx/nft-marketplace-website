import React from "react";
import Image from "next/image";

import heroimg from "../assets/hero.png";
import Slider from "./Slider";
const Hero = () => {
  return (
    <div className="h-screen ">
      <div className=" bg-custom-dark pt-[186px] px-16">
        <div className="flex justify-center items-center max-h-screen min-h-[75%] ">
          <div className="flex-auto justify-center items-center w-[%50]">
            <h1 className="text-custom-white text-9xl ">Virtual World</h1>
            <p className="text-custom-gray text-3xl">
              WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT.
            </p>
            <p className="text-custom-gray text-3xl">
              SUPPORT AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
            </p>
          </div>
          <div className="flex-auto ">
            <Image src={heroimg} alt="Hero" width={500} height={700} relative />
          </div>
        </div>
      </div>

      <Slider text="New Collection" />
    </div>
  );
};

export default Hero;
