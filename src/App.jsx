// src/App.jsx

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVshows";
import Sports from "./pages/Sports";
import Live from "./pages/Live";
import Settings from "./components/Settings";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <Router>
      <div>
      <Navbar language={language} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/movies" element={<Movies language={language} />} />
          <Route path="/tv-shows" element={<TVShows language={language} />} />
          <Route path="/sports" element={<Sports language={language} />} />
          <Route path="/live" element={<Live language={language} />} />
          <Route
            path="/settings"
            element={<Settings onLanguageChange={setLanguage} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
