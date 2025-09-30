import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { fetchMovie } from "../services/Movie";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("Interstellar");

  useEffect(() => {
    if (!query) return;

    const loadMovies = async () => {
      setLoading(true);
      setError("");

      try {
        let data;
        if (query.startsWith("tt")) {
          data = await fetchMovie({ i: query });
        } else {
          data = await fetchMovie({ s: query });
        }

        if (data.Response === "True") {
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([data]);
          }
        } else {
          setMovies([]);
          setError(data.Error || "No movies found.");
        }
      } catch (err) {
        setError("Something went wrong while fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [query]);

  // Search handler
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery.trim());
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSearch={handleSearch} />

      <main className="px-6 py-8">
        {/* Loading Spinner */}
        {loading && (
  <div className="flex flex-col justify-center items-center h-[60vh] space-y-4">
    {/* Reel-style loader */}
    <div className="flex space-x-2">
      <div className="w-5 h-5 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="w-5 h-5 bg-red-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
    <p className="text-gray-400 text-lg animate-pulse">Loading movies...</p>
  </div>
)}

        {/* Error Message */}
        {error && !loading && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {/* Empty State */}
        {!loading && !error && movies.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <p className="text-gray-400 text-lg">
              🔍 Search for movies above to get started
            </p>
          </div>
        )}

        {/* Movie Results */}
        {!loading && !error && movies.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {movies.map((movie, index) => (
                <MovieCard
                  key={index}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
