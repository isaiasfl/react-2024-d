import { useNavigate } from "react-router-dom";

// https://image.tmdb.org/t/p/original/  +  poster_path
const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const navigate = useNavigate();
  function handleClickDetails() {
    // tiene que ir a la url /peliculas/el_id_de_la_pelicula
    navigate(`peliculas/${id}`);
  }
  return (
    <div className="w-60 h-100 bg-gray-800 p-3 flex flex-col gap-4 rounded-br-3xl justify-between hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
      <img
        src={imgUrl}
        alt={title}
        className="w-48 h-48 object-cover mb-4 rounded-md mx-auto"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl text-gray-50 font-bold mx-1">{title}</span>
            <p className="text-xs text-gray-400">ID: {id}</p>
          </div>
          <span className="font-bold text-red-600">{vote_average}</span>
        </div>
        <button
          onClick={handleClickDetails}
          className="text-gray-50 bg-sky-800 hover:bg-sky-700 py-2 rounded-br-xl"
        >
          Detalles
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
