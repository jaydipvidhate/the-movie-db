import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, baseURL } from "../../utilities/index";

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPopularMoviesFromDB();
  }, [page]);

  const getPopularMoviesFromDB = async () => {
    let movieData = await axios
      .get(`${baseURL}/movie/popular?api_key=${API_KEY}&page=${page}`)
      .then((movies) => setPopularMovies(movies.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "100%", margin: "20px 0" }}>
      <div
        style={{ display: "flex", justifyContent: "space-between", margin: 18 }}
      >
        <button onClick={() => setPage(page == 0 ? page - 1 : null)}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>next</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {popularMovies
          ? popularMovies.map((data) => {
              const {
                id,
                adult,
                backdrop_path,
                original_language,
                original_title,
                overview,
                popularity,
                poster_path,
                release_date,
                title,
              } = data;
              return (
                <div
                  key={id}
                  style={{
                    padding: "0 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    style={{ width: 160, height: 240, borderRadius: 10 }}
                    alt=""
                  />
                  <h2>{title}</h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
