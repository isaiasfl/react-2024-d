import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import MovieDetails from "../components/MovieDetails";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return (
    <div>
      <BackButton />
      <MovieDetails movieId={movieId} />
    </div>
  );
};

export default MovieDetailsPage;
