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

  const removeLikedPokemon = (deletePokemon) => {
    const allPokemons = new Set(likedPokemons);
    for (let pokemon of allPokemons) {
      if (pokemon.name === deletePokemon) {
        allPokemons.delete(pokemon);
        break;
      }
    }
    setLikedPokemons(allPokemons);
  };

  return (
    <LikeContext.Provider
      value={{
        likedPokemons: Array.from(likedPokemons),
        addLikedPokemon,
        removeLikedPokemon,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
};

export const useData = () => useContext(LikeContext);
