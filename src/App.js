import React, { useState, useEffect } from "react";

import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import { baseURL, API_KEY } from "./utilities";
import axios from "axios";
import MoviesByGenres from "./component/homeComponents/MoviesByGenres";
import MovieDetails from "./component/homeComponents/MovieDetails";
import Footer from "./component/Footer";

function App() {
  const [genresOpen, setGenresOpen] = useState(false);
  const [genres, setGenre] = useState([]);
  const [genresId, setGenresId] = useState(1);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "TMDB";
  }, []);

  useEffect(() => {
    getGenresData();
  }, []);

  useEffect(() => {
    getMoviesByGenresId();
  }, [genresId]);

  const getGenresData = async () => {
    let genre = await axios
      .get(`${baseURL}/genre/movie/list?api_key=${API_KEY}`)
      .then((genre) => setGenre(genre.data.genres))
      .catch((err) => console.log(err));
  };

  const getMoviesByGenresId = async () => {
    let movies = await axios
      .get(
        `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=${genresId}&page=${page}&sort_by=popularity.desc`
      )
      .then((movies) => setMoviesByGenre(movies.data))
      .catch((err) => console.log(err));

    // console.log(moviesByGenre);
  };

  const handleOnPress = (id) => {
    setGenresId(id);
  };

  return (
    <BrowserRouter>
      <Header handleOnPress={handleOnPress} genres={genres} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieDetails />}>
          <Route path=":id" element={<MovieDetails />} />
        </Route>
        <Route path="/tvShows" element={<Home />} />
        <Route path="/people" element={<Home />} />
        <Route
          path="/genres/:name"
          element={<MoviesByGenres movies={moviesByGenre && moviesByGenre} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
