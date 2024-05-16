import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="my-4 mx-3">
      <div className=" h-80 w-80 flex flex-col  justify-center items-center border-2 border-black rounded-3xl p-2   bg-gray-500">
        <div className="max-w-[150px] mx-auto">
          <img className="w-full" src={image} alt={`${name}_image`} />
        </div>
        <h1 className="text-lg text-center mb-5">{name.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default Card;
