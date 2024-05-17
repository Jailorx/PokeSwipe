import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useData } from "../../../context/LikeContext";

const Card = ({ name, image }) => {
  const { theme } = useTheme();
  const { removeLikedPokemon } = useData();
  return (
    <div className="my-4 mx-4">
      <div>
        <button
          onClick={() => removeLikedPokemon(name)}
          className="font-bold text-l border-2 border-black rounded-full px-2 relative left-64 top-10 hover:bg-red-500"
        >
          X
        </button>
        <div
          className={`h-80 w-80  flex flex-col justify-center items-center border-2 border-black rounded-3xl p-2 ${
            theme ? "bg-gray-400" : "bg-gray-500"
          }`}
        >
          <div className="max-w-[150px] mx-auto">
            <img className="w-full" src={image} alt={`${name}_image`} />
          </div>
          <h1 className="text-lg text-center mb-5">{name.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
