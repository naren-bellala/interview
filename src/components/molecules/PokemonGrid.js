import { useAsync } from "../../hooks/useAsync";
import { fetchPokemon } from "../../services/Pokemon";
import { PokemonCard } from "../atoms";
import { useLocalStorageState } from "../../hooks/useLocalStorage";

export function PokemonGrid({ favouritesOnly }) {
  const [favourites, setFavourites] = useLocalStorageState("favourites", []);

  const state = useAsync(
    () => {
      return fetchPokemon();
    },
    { status: "pending" },
    []
  );

  const { data: pokemons, status, error } = state;

  switch (status) {
    case "idle":
      return <span>Submit a pokemon</span>;
    case "pending":
      return <div>Loading ... </div>;
    case "rejected":
      throw error;
    case "resolved":
      return (
        <div className="grid">
          {pokemons.map((pokemon) =>
            favouritesOnly ? (
              favourites.includes(pokemon.number) && (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              )
            ) : (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                favourites={favourites}
                setFavourites={setFavourites}
              />
            )
          )}
        </div>
      );
    default:
      throw new Error("This should be impossible");
  }
}
