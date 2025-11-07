import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "your_api_key_here";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
          setError("");
        } else {
          setError(data.Error);
        }
      } catch {
        setError("Failed to load movie details.");
      }
    };
    fetchDetails();
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="details">
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default Details;
