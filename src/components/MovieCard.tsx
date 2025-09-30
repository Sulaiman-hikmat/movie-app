import React from "react";

interface MovieCardProps {
  title: string;
  year: string;
  poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, poster }) => {
  return (
    <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
      {/* Poster */}
      <img
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={title}
        className="w-full h-80 object-cover"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-40 transition duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
