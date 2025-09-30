import { Api } from "../utils/Api";

/**
 * Fetch a movie by IMDb ID, title, or search query
 * @param options - An object with either i, t, or s
 */
export const fetchMovie = async (options: { i?: string; t?: string; s?: string }) => {
  try {
    const response = await Api.get("/", {
      params: {
        apikey: import.meta.env.VITE_MOVIE_API_KEY,
        ...options, // spreads i, t, or s depending on what you pass
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
  );
  return response.json();
};

