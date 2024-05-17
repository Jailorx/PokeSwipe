import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const Card = ({ name, image }) => {
  const { theme, _ } = useTheme();
  return (
    <div className="my-4 mx-3">
      <div
        className={`h-80 w-80 flex flex-col justify-center items-center border-2 border-black rounded-3xl p-2 ${
          theme ? "bg-gray-400" : "bg-gray-500"
        }`}
      >
        <div className="max-w-[150px] mx-auto">
          <img className="w-full" src={image} alt={`${name}_image`} />
        </div>
        <h1 className="text-lg text-center mb-5">{name.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default Card;
