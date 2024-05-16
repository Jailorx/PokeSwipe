import React from "react";
import Choice_Button from "./Choice_Button/Choice_Button";
import Attribute from "./Attribute/Attribute";
import { useData } from "../../context/LikeContext";

const Card = ({ info, nextPokemon }) => {
  const { name, abilities, types, image } = info;

  const { likedPokemons, addLikedPokemon } = useData();

  const handleLikedPokemon = (name, image) => {
    const pokemon = { name, image };
    addLikedPokemon(pokemon);
    nextPokemon();
    // console.log("liked clicked");
  };
  const handleDislikedPokemon = () => {
    // console.log("disliked clicked");
    nextPokemon();
  };

  return (
    <div className="flex flex-col justify-center  gap-3">
      <div className="max-w-[400px] mx-auto">
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
