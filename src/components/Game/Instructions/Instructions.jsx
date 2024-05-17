import React from "react";
import { useTheme } from "../../../context/ThemeContext";
/**
 *
 * @param {object} props - Component props
 * @param {object} props.onClick -Function to close Instruction
 *
 */
const Instruction = ({ onClick }) => {
  //Accessing data from ThemeContext
  const { theme } = useTheme();

  return (
    <div
      className={`flex-1 flex items-center justify-center ${theme} bg-gray-800 bg-opacity-20`}
    >
      <div className="flex flex-col items-center space-y-4 gap-3 border-2 border-black p-20 rounded-2xl bg-gray-300 m-3">
        <div>
          <h1 className="text-2xl font-bold mb-3 text-center">
            How to Play PokeSwipe
          </h1>
          <div className="text-xl text-center">
            <p>Pokemon Appear One at a Time </p>
            <p>Choose "Like" or "Dislike"</p>
            <p>Build Your Favorite Team</p>
          </div>
        </div>
        <button
          className="bg-yellow-500 py-2 px-5 border-2 border-black rounded-2xl"
          onClick={onClick}
        >
          Let's Catch em All !
        </button>
      </div>
    </div>
  );
};

export default Instruction;
