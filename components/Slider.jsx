import React from "react";

const Slider = (props) => {
  const CollectionText = () => {
    return (
      <h1 className="text-custom-white text-5xl whitespace-nowrap">
        {props.text}
      </h1>
    );
  };
  return (
    <div className=" w-full bg-black border py-3 select-none">
      <div className=" flex gap-10 animate-slide ">
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
        <CollectionText />
      </div>
    </div>
  );
};

export default Slider;
