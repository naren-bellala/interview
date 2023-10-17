import { useState } from "react";
import { PokemonErrorBoundary } from "../molecules/PokemonErrorBoundary";
import PokemonForm from "../molecules/PokemonForm";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonGrid } from "../molecules/PokemonGrid";

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
