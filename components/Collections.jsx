import Image from "next/image";
import React from "react";
import nft from "../assets/nft.png";
import Slider from "./Slider";
const Collections = () => {
  return (
    <div className="w-full h-full bg-custom-purple">
      <div className="px-16 flex py-10">
        <div className="flex w-1/2 rounded-3xl mx-4 pb-[6px] duration-150 hover:outline hover:outline-custom-white hover:scale-105">
          <div className=" border-[3px] bg-custom-dark rounded-3xl px-16 py-3 ease-in duration-75 delay-75 shadow-[6px_6px_0px_#FFF253] items-center  hover:bg-custom-yellow hover:shadow-[4px_4px_0px_#ffffff] hover:scale-110">
            <Image
              src={nft}
              alt="Hero"
              className="justify-center items-center"
              width={1000}
              height={1000}
              relative
            />
          </div>
          <div className="pl-5">
            <h1 className="pt-10 text-white text-9xl">KABE</h1>
            <h2 className=" text-white text-4xl">Lead Artist</h2>
            <p className="py-4 text-white text-2xl">
              Award-winning illustrator with an international portfolio
              including clients in film, publishing & the gaming industry. When
              he's not creating awesome artwork, Kabe is wreaking havoc in the
              world of table-top RPGs.
            </p>
          </div>
        </div>

        <div className="flex w-1/2 rounded-3xl mx-4 pb-[6px] duration-150 hover:outline hover:outline-custom-white hover:scale-105">
          <div className=" border-[3px] bg-custom-dark rounded-3xl px-16 py-3 ease-in duration-75 delay-75 shadow-[6px_6px_0px_#FFF253] items-center  hover:bg-custom-yellow hover:shadow-[4px_4px_0px_#ffffff] hover:scale-110">
            <Image src={nft} alt="Hero" width={1000} height={1000} relative />
          </div>
          <div className="pl-5">
            <h1 className="pt-10 text-white text-9xl">WEDGE</h1>
            <h2 className=" text-white text-4xl">CCO</h2>
            <p className="py-4 text-white text-2xl">
              Wedge lives for the network. From selling gaming platforms to
              Mercedes F1, Guinness and UEFA, to ML software for some of the
              biggest Telecomms companies like Verizon, Vodafone, and T-mobile.
              This guy knows how to build profile and enjoys nothing more.
            </p>
          </div>
        </div>
      </div>
      <Slider text="Our Marketplace" />
    </div>
  );
};

export default Collections;
