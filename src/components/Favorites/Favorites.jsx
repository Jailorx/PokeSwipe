import React from "react";
import { useData } from "../../context/LikeContext";
import Card from "./Card/Card";
import { useTheme } from "../../context/ThemeContext";
import { TfiFaceSad } from "react-icons/tfi";

/**
 * Favorites component to display list of liked/favorite Pokemon.
 *
 */

const Favorites = () => {
  //Accessing data from ThemeContext
  const { theme } = useTheme();
  //Accessing data from LikeContext
  const { likedPokemons } = useData();

  return (
    <div className={`flex-1 flex items-center justify-center ${theme}`}>
      {likedPokemons.length > 0 ? (
        <div className="flex flex-wrap  justify-center items-center mt-4 min-mx-20">
          {likedPokemons.map(({ name, image }) => (
            <Card key={name} name={name} image={image} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3">
          <TfiFaceSad size={150} />
          <p className="text-xl font-bold">Wow! So empty</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
