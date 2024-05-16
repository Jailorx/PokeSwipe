import React from "react";
import { useData } from "../../context/LikeContext";
import Card from "./Card/Card";

const Favorites = () => {
  const { likedPokemons } = useData();

  return (
    <div className="flex-1 flex items-center justify-center">
      {likedPokemons.length > 0 ? (
        <div className="flex flex-wrap  justify-center items-center mt-4 min-mx-20">
          {likedPokemons.map(({ name, image }) => (
            <Card key={name} name={name} image={image} />
          ))}
        </div>
      ) : (
        "Please add Pokemon first. Gotta Catch em All"
      )}
    </div>
  );
};

export default Favorites;
