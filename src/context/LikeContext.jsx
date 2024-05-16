import React, { createContext, useState, useContext } from "react";

const LikeContext = createContext();

export const LikeContextProvider = ({ children }) => {
  const [likedPokemons, setLikedPokemons] = useState([]);

  const addLikedPokemon = (pokemon) => {
    setLikedPokemons([...likedPokemons, pokemon]);
  };

  return (
    <LikeContext.Provider value={{ likedPokemons, addLikedPokemon }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useData = () => useContext(LikeContext);
