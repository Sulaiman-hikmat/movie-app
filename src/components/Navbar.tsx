import React, { useState } from "react";
import { Search } from "lucide-react";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search);
    }
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo / App Name */}
      <div className="text-2xl font-bold text-red-500 tracking-wide">
        🎬 MovieHub
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="mt-3 sm:mt-0 flex items-center w-full sm:w-1/2 bg-gray-900 rounded-full overflow-hidden shadow-lg"
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 bg-transparent text-white outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* Navigation Links */}
      <div className="hidden sm:flex gap-6 text-gray-300 text-sm font-medium">
        <a href="/" className="hover:text-white transition">Home</a>
        <a href="#" className="hover:text-white transition">Trending</a>
        <a href="#" className="hover:text-white transition">Favorites</a>
      </div>
    </nav>
  );
};

export default Navbar;
