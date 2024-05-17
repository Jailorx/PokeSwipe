import React, { createContext, useState, useContext } from "react";

const LikeContext = createContext();

export const LikeContextProvider = ({ children }) => {
  const [likedPokemons, setLikedPokemons] = useState(new Set());

  const addLikedPokemon = (pokemon) => {
    setLikedPokemons((prevLikedPokemons) => {
      const newLikedPokemons = new Set(prevLikedPokemons);
      newLikedPokemons.add(pokemon);
      return newLikedPokemons;
    });
  };

  return (
    <LikeContext.Provider
      value={{
        likedPokemons: Array.from(likedPokemons),
        addLikedPokemon,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
};

export const useData = () => useContext(LikeContext);
