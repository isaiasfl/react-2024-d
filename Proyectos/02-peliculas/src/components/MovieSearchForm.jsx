import useDataApi from "../hooks/useDataApi";

import { useState } from "react";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const apiKey = import.meta.env.VITE_API_TOKEN;
const MovieSearchForm = () => {
  const apiEndPoint = `https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=8930572ca461d9b58d8f05f72d6f419a`;
  const { data, loading, error } = useDataApi(apiEndPoint);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm);

    if (searchTerm.trim() === "") {
      // entonces guardo en el filtrado de películas el estado inicial. [];
      setFilteredMovies([]); //
    } else {
      const filteredResults = data?.results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
      setFilteredMovies(filteredResults || []);
    }
  }

  function handleClearSearch() {
    setSearchQuery("");
    setFilteredMovies([]);
  }
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <form
        className="w-1/2 bg-gray-800 p-4 rounded-lg flex items-center"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Buscar película"
          className="w-full py-2 px-4 bg-gray-700 text-white rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 bg-sky-800 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none"
        >
          Buscar
        </button>

        {searchQuery && (
          <button
            className="ml-2 bg-red-800 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none"
            onClick={handleClearSearch}
          >
            Borrar
          </button>
        )}
      </form>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6">
        {loading && <Spinner />}
        {error && <h1>Esto es un error</h1>}
        {(searchQuery ? filteredMovies : data?.results || []).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchForm;
