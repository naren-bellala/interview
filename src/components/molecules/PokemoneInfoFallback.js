import { useRef } from "react";
import { PokemonCard } from "../atoms";

export function PokemonInfoFallback({ name }) {
  const initialName = useRef(name).current;
  const fallbackPokemonData = {
    name: initialName,
    number: "XXX",
    image: "/img/pokemon/fallback-pokemon.jpg",
    attacks: {
      special: [
        { name: "Loading Attack 1", type: "Type", damage: "XX" },
        { name: "Loading Attack 2", type: "Type", damage: "XX" },
      ],
    },
  };
  return <PokemonCard pokemon={fallbackPokemonData} />;
}
