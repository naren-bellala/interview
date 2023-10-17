import { useState } from "react";
import { PokemonForm, PokemonGrid, PokemonErrorBoundary } from "../molecules";
import { PokemonInfo } from "./PokemonInfo";
import { FavouritesCheckbox } from "../atoms";

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState("");
  const [showFavourites, setShowFavourites] = useState(false);

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  function handleReset() {
    setPokemonName("");
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      {!pokemonName && (
        <FavouritesCheckbox
          checked={showFavourites}
          setChecked={setShowFavourites}
        />
      )}
      <hr />
      <PokemonErrorBoundary
        onReset={handleReset}
        resetKeys={[pokemonName || "pokemon"]}
      >
        {pokemonName ? (
          <PokemonInfo pokemonName={pokemonName} />
        ) : (
          <PokemonGrid favouritesOnly={showFavourites} />
        )}
      </PokemonErrorBoundary>
    </div>
  );
}
