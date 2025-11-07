import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const toggleFavorite = (movie) => {
    const updated = favorites.filter((m) => m.imdbID !== movie.imdbID);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet!.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
