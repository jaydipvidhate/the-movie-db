import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY, baseURL } from "../../utilities";
import PageContainer from "../PageContainer";
import MovieCard from "./MovieCard";
export default function MovieDetails() {
  const id = useParams().id;
  const [movieDetails, setMovieDetails] = useState({});
  const [credits, setCredits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = "jhi";
  }, []);
  useEffect(() => {
    getMovieDetailsFromDB();
    getMovieCreditsFromDB();
    getRecommendationsFromDB();
  }, []);

  const getMovieDetailsFromDB = async () => {
    const movie = await axios
      .get(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
      .then((movie) => setMovieDetails(movie.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const getMovieCreditsFromDB = async () => {
    const credit = await axios
      .get(`${baseURL}/movie/${id}/credits?api_key=${API_KEY}`)
      .then((credit) => setCredits(credit.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const getRecommendationsFromDB = async () => {
    const recommendation = await axios
      .get(
        `${baseURL}/movie/${id}/recommendations?api_key=${API_KEY}&page=${page}`
      )
      .then((recommendation) => setRecommendations(recommendation.data.results))
      .catch((err) => {
        console.log(err);
      });
  };

  const {
    adult,
    backdrop_path,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    runtime,
    spoken_languages,
    vote_count,
  } = movieDetails;

  const {} = credits;

  return (
    <PageContainer>
      <div>
        {/* <div><img src={} alt="" /></div> */}
        <div></div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {recommendations &&
          recommendations.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
      </div>
    </PageContainer>
  );
}
