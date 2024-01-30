import { Link } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";
import Spinner from "./Spinner";

// const apiKey = import.meta.env.VITE_API_TOKEN;
const apiKey = "8930572ca461d9b58d8f05f72d6f419a";
const imgUrl = "https://image.tmdb.org/t/p/original";

const MovieDetails = ({ movieId }) => {
  const endPointSearch = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-es`;
  const { data, loading, error } = useDataApi(endPointSearch);
  const generos = data?.genres.map((genre) => genre.name);
  const generosJoin = generos?.join(", ");
  return (
    <div className="bg-gray-800 p-4">
      {loading && <Spinner />}
      {error && <p className="text-3xl font-bold uppercase"> Error {error} </p>}
      {data && (
        <>
          <div className="flex flex-col w-3/6 items-center mx-auto">
            <img
              src={`${imgUrl}${data.poster_path}`}
              alt={data.title}
              className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
            />
            <img
              src={`${imgUrl}${data.backdrop_path}`}
              alt={data.title}
              className="mx-auto my-10 shadow-gray-700 shadow-xl rounded-xl hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="bg-gray-800 p-10 text-white max-w-md mx-auto rounded-xl shadow overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out ">
            <div className="flex flex-col">
              <div className="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                {data.title}
              </div>
              <p className="block mt-5 text-lg leading-tight font-medium text-white">
                {data.tagline}
              </p>
              <p className="block mt-5 text-lg leading-tight font-medium text-white">
                {data.release_date}
              </p>
              <p className="block mt-5 text-lg leading-tight font-medium text-white">
                {generosJoin}
              </p>
              <p className="mt-20 text-gray-300">{data.overview}</p>
            </div>
            <div className="flex items-center justify-between mt-4 space-x-4">
              <Link
                to=".."
                className="mt-2 text-xl text-red-500 hover:text-white"
              >
                Volver
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
