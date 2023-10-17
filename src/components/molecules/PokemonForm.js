import { useEffect, useState } from "react";

export default function PokemonForm({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || "",
  onSubmit,
}) {
  const [pokemonName, setPokemonName] = useState(initialPokemonName);

  useEffect(() => {
    if (typeof externalPokemonName === "string") {
      setPokemonName(externalPokemonName);
    }
  }, [externalPokemonName]);

  function handleChange(e) {
    setPokemonName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(pokemonName);
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
    onSubmit(newPokemonName);
  }

  return (
    <form onSubmit={handleSubmit} className="pokemon-form">
      <label htmlFor="pokemonName-input">Pokemon Name</label>
      <small>
        Try{" "}
        <button
          className="invisible-button"
          type="button"
          onClick={() => handleSelect("pikachu")}
        >
          "pikachu"
        </button>
      </small>
      <div>
        <input
          className="pokemonName-input"
          id="pokemonName-input"
          name="pokemonName"
          placeholder="Pokemon Name..."
          value={pokemonName}
          onChange={handleChange}
        />
        <button type="submit" disabled={!pokemonName.length}>
          Submit
        </button>
        <button
          className="resetBtn"
          disabled={!pokemonName.length}
          onClick={() => handleSelect("")}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
