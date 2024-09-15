// src/App.jsx

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVshows";
import Sports from "./pages/Sports";
import Live from "./pages/Live";

const App = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "English";
  });

  const onLanguageChange = (lang) => {
    console.log(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <Router>
      <div>
        <Navbar onLanguageChange={onLanguageChange} language={language} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
