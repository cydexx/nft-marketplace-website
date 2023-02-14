import React from "react";
const Button = (props) => {
  return (
    <div class="group rounded-3xl px-16 py-3  bg-custom-dark border border-custom-white items-center justify-end hover:bg-custom-purple hover:shadow-[4px_4px_0px_#ffffff] hover:animate-pulse ease-in duration-75 ">
      <a
        href="/"
        className="text-2xl font-medium text-custom-white group-hover:drop-shadow-[2px_2px_0px_#000000] relative inline-block "
      >
        {props.text}
      </a>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="justify-between bg-custom-dark z-40 h-full w-full">
      <div className="flex-row px-16 pt-20 pb-10">
        <div className=" w-full p-4 rounded  ">
          <div className=" flex justify-evenly">
            <Button text="all" />
            <Button text="artwork" />

            <Button text="physical artwork" />
            <Button text="girrafe artwork" />
            <Button text="virtual art" />
          </div>
        </div>
        <div className="justify-center items-center text-center pt-20">
          <p className="text-custom-white text-2xl">
            created by{" "}
            <span className="animate-pulse text-custom-purple">cydex</span>
          </p>
          <p className="text-custom-white text-md">© all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
