import React, { createContext, useState, useContext } from "react";

// Creating a context for managing liked Pokemons
const LikeContext = createContext();

// Provider component for managing liked Pokemons state and actions
export const LikeContextProvider = ({ children }) => {
  const [likedPokemons, setLikedPokemons] = useState(new Set());

  //Handles insertion of liked pokemon
  const addLikedPokemon = (pokemon) => {
    setLikedPokemons((prevLikedPokemons) => {
      const newLikedPokemons = new Set(prevLikedPokemons);
      newLikedPokemons.add(pokemon);
      return newLikedPokemons;
    });
  };

  //Handles removal of liked pokemon
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

// Custom hook to consume the LikeContext
export const useData = () => useContext(LikeContext);
