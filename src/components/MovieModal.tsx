import React from "react";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    Plot?: string;
    imdbRating?: string;
  } | null;
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-lg p-6 w-[90%] max-w-lg relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✖
        </button>

        {/* Movie Poster */}
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
          className="w-full h-72 object-cover rounded-lg mb-4"
        />

        {/* Movie Info */}
        <h2 className="text-2xl font-bold text-purple-400">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
        {movie.Plot && <p className="mt-3 text-gray-300">{movie.Plot}</p>}
        {movie.imdbRating && (
          <p className="mt-2 text-yellow-400 font-semibold">
            ⭐ IMDb: {movie.imdbRating}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
