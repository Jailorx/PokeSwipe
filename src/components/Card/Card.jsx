import React from "react";

const Card = ({ info }) => {
  const { name, abilities, types, image } = info;
  console.log("image:", image);
  return (
    <div>
      <img src={image} alt={`${name}_image`} />
      <h1 className="text-xl font-bold">{name.toUpperCase()}</h1>
    </div>
  );
};

export default Card;
