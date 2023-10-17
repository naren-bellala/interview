import { useState } from "react";
import { PokemonForm, PokemonGrid, PokemonErrorBoundary } from "../molecules";
import { PokemonInfo } from "./PokemonInfo";
// import { useLocalStorageState } from "../../hooks/useLocalStorage";

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  function handleReset() {
    setPokemonName("");
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <PokemonErrorBoundary
        onReset={handleReset}
        resetKeys={[pokemonName || "pokemon"]}
      >
        {pokemonName ? (
          <PokemonInfo pokemonName={pokemonName} />
        ) : (
          <PokemonGrid />
        )}
      </PokemonErrorBoundary>
    </div>
  );
}
