import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, baseURL } from "../../utilities/index";
import { CircularProgress } from "@mui/material";
import List from "./List";

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPopularMoviesFromDB();
  }, [page]);

  const getPopularMoviesFromDB = async () => {
    setLoading(true);
    let movieData = await axios
      .get(`${baseURL}/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then((movies) => {
        setPopularMovies(movies.data.results);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  };

  return (
    <List
      list={popularMovies && popularMovies}
      setPage={setPage}
      loading={loading}
      page={page}
    />
  );
}
