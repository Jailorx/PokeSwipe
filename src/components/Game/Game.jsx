import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useTheme } from "../../context/ThemeContext";
import Instructions from "./Instructions/Instructions";
import PuffLoader from "react-spinners/PuffLoader";

const Game = () => {
  const { theme, _ } = useTheme();
  const [pokemonId, setPokemonId] = useState(null);
  const [pokemon, setPokemon] = useState({
    image: "",
    name: "",
    types: [],
    abilities: [],
  });

  const [loading, setLoading] = useState(false);

  const [openInstructions, setOpenInstructions] = useState(true);
  const handleInstructions = () => {
    setOpenInstructions((prevState) => !prevState);
  };

  const randomIdGenerator = () => {
    const total = 1025;
    return Math.floor(Math.random() * total) + 1;
  };

  const handleNextPokemon = () => {
    setLoading(true);
    const random = randomIdGenerator();
    setPokemonId(random);
    fetchData(random);
  };

  const fetchData = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const abilities = data.abilities.map((ability) => ability.ability.name);

    setPokemon((prevState) => ({
      ...prevState,
      name: data.name,
      image: data.sprites.other.dream_world.front_default
        ? data.sprites.other.dream_world.front_default
        : data.sprites.other.home.front_default,
      types: data.types.map((type) => type.type.name),
      abilities: abilities,
    }));

    setLoading(false);
  };

  useEffect(() => {
    if (pokemonId === null) {
      handleNextPokemon();
    }
  }, [pokemonId]);

  return (
    <>
      {openInstructions ? (
        <Instructions onClick={handleInstructions} />
      ) : (
        <main className={`flex-1 flex items-center justify-center ${theme}`}>
          <div className="flex flex-col items-center space-y-4">
            {loading ? (
              <PuffLoader
                color="black"
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <Card info={pokemon} nextPokemon={handleNextPokemon} />
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default Game;
