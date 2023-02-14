import React, { useEffect, useState } from "react";

import TextEffect from "./TextEffect";

const Header = () => {
  // const [scroll, setScroll] = useState(false);
  // const [color, setColor] = useState(null);
  // const changeColor = () => {
  //   if (window.scrollY >= 400) {
  //     setScroll(true);
  //   } else setScroll(false);
  // };
  // useEffect(() => {
  //   if (window.scrollY >= 400) {
  //     setScroll(true);
  //   } else setScroll(false);
  //   return () => {
  //     setScroll;
  //   };
  // }, []);
  //  window.addEventListener("scroll", setScroll);

  return (
    <>
      <div
        aria-label="Site Header"
        className={`px-16  bg-custom-dark fixed z-50 w-screen  shadow-custom-white ease-in  drop-shadow-xl border `}
      >
        <navbar className="  p-4">
          <div className="flex items-center  gap-4 lg:gap-10 ">
            <div className="flex lg:w-0 lg:flex-1">
              <a
                href="#"
                className="ease-in duration-75 delay-75 text-custom-white text-3xl drop-shadow-[2px_2px_0px_#7843E8] hover:drop-shadow-[2px_2px_0px_#7843E8] "
              >
                <TextEffect text="cydex" />
              </a>
            </div>

            <div
              aria-label="Site Nav"
              className="hidden gap-20 text-custom-white text-2xl  md:flex "
            >
              <a
                className="ease-in duration-75 delay-75 hover:drop-shadow-[2px_2px_0px_#7843E8] hover:scale-x-125"
                href=""
              >
                HOME
              </a>
              <a
                className="ease-in duration-75 delay-75 hover:drop-shadow-[2px_2px_0px_#7843E8] hover:scale-x-125"
                href=""
              >
                GALLERY
              </a>
              <a
                className="ease-in duration-75 delay-75 hover:drop-shadow-[2px_2px_0px_#7843E8] hover:scale-x-125"
                href=""
              >
                DISCORD
              </a>
            </div>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
              <div class="hidden rounded-3xl px-16 py-3 ease-in duration-75 delay-75 bg-custom-white shadow-[4px_4px_0px_#7843E8] items-center justify-end hover:bg-custom-purple hover:shadow-[4px_4px_0px_#ffffff] hover:scale-110 sm:flex">
                <a
                  href="/"
                  className="text-2xl font-medium text-custom-dark drop-shadow-[1px_1px_0px_#7843E8] relative inline-block "
                >
                  BUY NFT
                </a>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </navbar>
      </div>
    </>
  );
};

export default Header;
