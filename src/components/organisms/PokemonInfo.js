import { useAsync } from "../../hooks/useAsync";
import { fetchPokemon } from "../../services/Pokemon";
import PokemonDataView from "../atoms/PokemonDataView";
import PokemonInfoFallback from "../molecules/PokemoneInfoFallback";

export function PokemonInfo({ pokemonName }) {
  const state = useAsync(
    () => {
      if (!pokemonName) {
        return;
      }
      return fetchPokemon(pokemonName);
    },
    { status: pokemonName ? "pending" : "idle" },
    [pokemonName]
  );

  const { data: pokemon, status, error } = state;

  switch (status) {
    case "idle":
      return <span>Submit a pokemon</span>;
    case "pending":
      return <PokemonInfoFallback name={pokemonName} />;
    case "rejected":
      throw error;
    case "resolved":
      return <PokemonDataView pokemon={pokemon} />;
    default:
      throw new Error("invalid action");
  }
}
