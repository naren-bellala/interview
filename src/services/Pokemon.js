export function fetchPokemon(name = "") {
  const fetchAllQuery = `
    query {
        pokemons(first: 151) {
            id
            number
            name
            image
            attacks {
                special {
                    name
                    type
                    damage
                }
            }
        } 
}`;

  const pokemonQuery = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `;

  return window
    .fetch("https://graphql-pokemon2.vercel.app/", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        query: name ? pokemonQuery : fetchAllQuery,
        variables: { name: name.toLowerCase() },
      }),
    })
    .then(async (response) => {
      const { data } = await response.json();
      if (response.ok) {
        if (data?.pokemon) {
          return data?.pokemon;
        } else if (data?.pokemons) {
          return data?.pokemons;
        } else {
          return Promise.reject(
            new Error(`No pokemon with the name "${name}"`)
          );
        }
      } else {
        // handle the graphql errors
        const error = {
          message: data?.errors?.map((e) => e.message).join("\n"),
        };
        return Promise.reject(error);
      }
    });
}
