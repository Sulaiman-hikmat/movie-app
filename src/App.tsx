import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Trending from "./pages/Trending";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* Later you can add a movie detail page */}
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
