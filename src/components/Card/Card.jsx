import React from "react";
import Choice_Button from "./Choice_Button/Choice_Button";
import Attribute from "./Attribute/Attribute";
import { useData } from "../../context/LikeContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

/**
 * Card component to display information about a Pokemon.
 *
 * @param {object} props - Component props
 * @param {object} props.info - Information about the Pokemon (name, abilities, types, image)
 * @param {Function} props.nextPokemon - Function to display the next Pokemon
 *
 */

const Card = ({ info, nextPokemon }) => {
  //Destructuring info object
  const { name, abilities, types, image } = info;

  //Accessing data from LikeContext
  const { addLikedPokemon } = useData();
  //Accessing data from ThemeContext
  const { theme } = useTheme();

  //Handles liking a pokemon
  const handleLikedPokemon = (name, image) => {
    const pokemon = { name, image };
    addLikedPokemon(pokemon);
    nextPokemon();
  };
  //Handles disliking a pokemon
  const handleDislikedPokemon = () => {
    nextPokemon();
  };

  return (
    <div className="flex flex-col justify-center gap-3 min-w-[250px] mx-auto p-3 ">
      <Link to="/favorites">
        <MdCatchingPokemon
          size={50}
          color="#DE3163"
          className="transform transition-transform duration-250 hover:scale-110"
        />
      </Link>

      <div className="max-w-[250px] mx-auto">
        <img className="w-full" src={image} alt={`${name}_image`} />
      </div>

      <h1 className="text-4xl text-center mb-5">{name.toUpperCase()}</h1>

      <div className="flex flex-wrap justify-center items-center gap-2">
        {/* traversing types array */}
        {types.map((type) => (
          <Attribute key={type} value={type} />
        ))}
        {/* traversing abilities array */}
        {abilities.map((ability) => (
          <Attribute key={ability} type="ability" value={ability} />
        ))}
      </div>

      <div className="flex justify-between ">
        <Choice_Button choice="Dislike" onClick={handleDislikedPokemon} />
        <Choice_Button
          choice="Like"
          onClick={() => handleLikedPokemon(name, image)}
        />
      </div>
    </div>
  );
};

export default Card;
