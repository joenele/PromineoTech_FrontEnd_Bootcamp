import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ShowMovies from "./components/ShowMovies";
import AddMovies from "./components/AddMovies";
import Genre from "./components/Genre";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Set up state to manage the list of movies
  const [movies, setMovies] = useState([]);

  return (
    // Set up the router
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ShowMovies />}  />
            <Route path="/movies/*" element={<ShowMovies />} />
            <Route
              path="/favorites/*"
              element={<AddMovies movies={movies} setMovies={setMovies} />}
            />
            <Route path="/genres/:genre" element={<Genre />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
