import { FaStar } from "react-icons/fa";

export function PokemonCard({ pokemon, favourites = [], setFavourites }) {
  function toggleFavourites() {
    const index = favourites.indexOf(pokemon.number.toString());
    if (index < 0) {
      setFavourites([...favourites, pokemon.number.toString()]);
    } else {
      setFavourites([...favourites].filter((i, _index) => _index !== index));
    }
  }
  return (
    <div className="pokemon-info">
      <FaStar
        className={
          favourites.includes(pokemon.number.toString()) ? "fav" : "notFav"
        }
        onClick={toggleFavourites}
      />
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <section>
        <h2>
          {pokemon.name}
          <sup>{pokemon.number}</sup>
        </h2>
      </section>
      <section>
        <ul>
          {pokemon.attacks.special.map((attack) => (
            <li key={attack.name}>
              <label>{attack.name}</label>:{" "}
              <span>
                {attack.damage} <small>({attack.type})</small>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
