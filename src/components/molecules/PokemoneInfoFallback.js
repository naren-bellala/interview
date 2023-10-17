import { useRef } from "react";
import PokemonDataView from "../atoms/PokemonDataView";

export default function PokemonInfoFallback({ name }) {
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
  return <PokemonDataView pokemon={fallbackPokemonData} />;
}
