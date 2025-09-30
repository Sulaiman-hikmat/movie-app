import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">❤️ My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorites yet. Add some!</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {favorites.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
