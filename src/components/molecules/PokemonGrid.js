import { useAsync } from "../../hooks/useAsync";
import { fetchPokemon } from "../../services/Pokemon";
import PokemonDataView from "../atoms/PokemonDataView";

export function PokemonGrid() {
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
          {pokemons.map((pokemon) => (
            <PokemonDataView key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      );
    default:
      throw new Error("This should be impossible");
  }
}
