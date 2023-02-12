import React from "react";
const CollectionText = () => {
  return <h1 className="text-custom-white text-5xl">New Collection</h1>;
};

const Slider = () => {
  return (
    <div>
      <div className=" ">
        <div className=" flex gap-44 ">
          <CollectionText />
          <CollectionText />
          <CollectionText />
          <CollectionText />
        </div>
      </div>
    </div>
  );
};

export default Slider;
