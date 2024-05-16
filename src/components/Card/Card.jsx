import React from "react";
import Choice_Button from "../Choice_Button/Choice_Button";

const Card = ({ info }) => {
  const { name, abilities, types, image } = info;

  return (
    <div>
      <img src={image} alt={`${name}_image`} />
      <h1 className="text-xl font-bold">{name.toUpperCase()}</h1>

      <div className="flex justify-between">
        <Choice_Button choice="Dislike" />
        <Choice_Button choice="Like" />
      </div>
    </div>
  );
};

export default Card;
