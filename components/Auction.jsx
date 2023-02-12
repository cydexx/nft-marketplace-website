import Image from "next/image";
import React from "react";
import nft from "../assets/nft.png";
import people from "../assets/people.png";
import Slider from "./Slider";
const Auction = () => {
  return (
    <div className="justify-between bg-custom-yellow h-[200] w-full">
      <div className="flex px-16 py-28">
        <div className=" w-1/2 p-16 rounded outline   bg-yellow-200 ">
          <div className=" pb-4 px-10 flex justify-between items-center">
            <Image src={people} alt="people" className="h-16 w-52" />
            <div className="flex-col">
              <p className="text-custom-dark text-5xl">Remaining Time</p>
              <p className="text-custom-purple text-5xl">09H : 11M : 07s</p>
            </div>
          </div>
          <div className="flex justify-center p-4 items-center bg-custom-dark rounded-3xl">
            <Image src={nft} alt="Hero" className="h-[550px] w-auto p-16" />
          </div>
        </div>
        <div className="py-28 w-1/2  flex-row">
          <div className="pl-16">
            <p className="text-custom-dark text-3xl">December 14, 2022</p>
            <h1 className="text-custom-purple text-7xl pt-5 pb-4">
              Rare Virtual World
            </h1>
            <h2 className="text-custom-dark text-4xl underline underline-offset-2 decoration-2">
              Owned By OXOJ
            </h2>
            <h2 className=" text-custom-dark text-xl pt-10">
              A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE ETHEREUM
              BLOCKCHAIN. A SET OF 3.333 UNIQUE COLLECTABLES, THE ADDITION TO
              YOUR NFT COLLECTION YOU’VE BEEN WAITING FOR.
            </h2>
          </div>
          <div className="h-[1px]">
            <h1 className=" tracking-tighter text-[#ebde45] font-bold  text-[500px] whitespace-nowrap ">
              N F T
            </h1>
          </div>
        </div>
      </div>
      <Slider text="Top Collection" />
    </div>
  );
};

export default Auction;
