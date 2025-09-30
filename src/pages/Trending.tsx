import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/Movie";
import MovieCard from "../components/MovieCard";

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const loadTrending = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data.results || []);
    };
    loadTrending();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔥 Trending Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date?.split("-")[0]}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
