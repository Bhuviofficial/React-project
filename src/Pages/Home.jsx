import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";

const API_KEY = "f34ac4cf";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState("movie");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}&page=${page}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(data.totalResults);
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch {
      setError("Failed to fetch data.");
    }
  };

  const toggleFavorite = (movie) => {
    const isFav = favorites.find((m) => m.imdbID === movie.imdbID);
    const updated = isFav
      ? favorites.filter((m) => m.imdbID !== movie.imdbID)
      : [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const isFavorite = (id) => favorites.some((m) => m.imdbID === id);

  useEffect(() => {
    if (search) fetchMovies();
  }, [page, type]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchMovies();
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite(movie.imdbID)}
          />
        ))}
      </div>

      {totalResults > 10 && (
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={movies.length < 10}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
