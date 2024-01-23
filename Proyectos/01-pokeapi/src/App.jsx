import { useEffect, useState } from "react";
import Card from "./components/Card";
import Spinner from "./components/Spinner";
const URL = import.meta.env.VITE_URL_POKEAPI;
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleDelete(id) {
    // debo borrar la tarjeta pokemon cuyo id sea ...
    const updatePokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatePokemons);
  }

  useEffect(() => {
    //Acceso a la api de pokeapi.co
    // creo la función o la importo de un helper
    const fechData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Error fetching");
        }
        const data = await response.json();
        const results = data.results;
        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const resp = await fetch(pokemon.url);
            const pokemonDetails = await resp.json();
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              image:
                pokemonDetails?.sprites.other.dream_world.front_default ||
                pokemonDetails.sprites.front_default ||
                "",
              peso: pokemonDetails.weight,
            };
          })
        );

        // setear pokemonData en un esto que guarde los pokemons
        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data pokemons ", error);
      }
    };

    // ejecuto la función
    fechData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <Spinner />
        ) : (
          pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
