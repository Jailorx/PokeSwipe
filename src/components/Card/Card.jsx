import React from "react";
import Choice_Button from "../Choice_Button/Choice_Button";
import Attribute from "../Attribute/Attribute";

const Card = ({ info }) => {
  const { name, abilities, types, image } = info;

  return (
    <div className="flex flex-col justify-center  gap-3">
      <img src={image} alt={`${name}_image`} width="300px" />
      <h1 className="text-4xl text-center mb-5">{name.toUpperCase()}</h1>

      <div className="flex justify-center items-center gap-2">
        {/* traversing types array */}
        {types.map((type) => (
          <Attribute value={type} />
        ))}
        {/* traversing abilities array */}
        {abilities.map((ability) => (
          <Attribute type="ability" value={ability} />
        ))}
      </div>

      <div className="flex justify-between ">
        <Choice_Button choice="Dislike" />
        <Choice_Button choice="Like" />
      </div>
    </div>
  );
};

export default Card;
