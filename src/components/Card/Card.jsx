import React from "react";
import Choice_Button from "./Choice_Button/Choice_Button";
import Attribute from "./Attribute/Attribute";
import { useData } from "../../context/LikeContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Card = ({ info, nextPokemon }) => {
  const { name, abilities, types, image } = info;

  const { __, addLikedPokemon } = useData();
  const { theme, _ } = useTheme();

  const handleLikedPokemon = (name, image) => {
    const pokemon = { name, image };
    addLikedPokemon(pokemon);
    nextPokemon();
  };
  const handleDislikedPokemon = () => {
    nextPokemon();
  };

  return (
    <div className="flex flex-col justify-center gap-3 ">
      {theme ? (
        <Link to="/favorites">
          <FaHeart size={50} />
        </Link>
      ) : (
        <Link to="/favorites">
          <FaRegHeart size={50} />
        </Link>
      )}

      <div className="max-w-[300px] mx-auto">
        <img className="w-full" src={image} alt={`${name}_image`} />
      </div>

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
