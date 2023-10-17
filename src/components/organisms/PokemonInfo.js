import { useAsync } from "../../hooks/useAsync";
import { useLocalStorageState } from "../../hooks/useLocalStorage";
import { fetchPokemon } from "../../services/Pokemon";
import { PokemonCard } from "../atoms";
import { PokemonInfoFallback } from "../molecules";

export function PokemonInfo({ pokemonName }) {
  const [favourites, setFavourites] = useLocalStorageState("favourites", []);
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
      return (
        <PokemonCard
          pokemon={pokemon}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      );
    default:
      throw new Error("invalid action");
  }
}
