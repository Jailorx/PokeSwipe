import React, { useEffect, useState } from "react";

const Game = () => {
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemon, setPokemon] = useState({
    image: "",
    name: "",
    types: [],
    abilities: [],
  });

  const randomIdGenerator = () => {
    const total = 1025;
    return Math.floor(Math.random() * total) + 1;
  };

  const fetchData = async () => {
    const random = randomIdGenerator();
    setPokemonId(random);

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();

    const abilities = data.abilities.map((ability) => ability.ability.name);

    setPokemon((prevState) => ({
      ...prevState,
      name: data.name,
      image: data.sprites.other.dream_world,
      types: data.types.map((type) => type.type.name),
      abilities: abilities,
    }));

    console.log("pokemon:", pokemon);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <h1>Welcome to the game</h1>
      </div>
    </main>
  );
};

export default Game;
