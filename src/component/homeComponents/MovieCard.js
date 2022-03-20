import React from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { POSTER_URL } from "../../utilities";

export default function MovieCard({ movie }) {
  const {
    id,
    original_title,
    original_language,
    vote_average,
    release_date,
    poster_path,
  } = movie;
  return (
    <Link
      key={id}
      to={`/movies/${id}`}
      style={{
        padding: "0 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        position: "relative",
        cursor: "pointer",
        margin: "18px 0",
        textDecoration: "none",
        color: "#000000",
      }}
    >
      <div style={{ position: "relative", marginBottom: 20 }}>
        <img
          src={`${POSTER_URL}${poster_path}`}
          style={{
            width: 160,
            height: 240,
            borderRadius: 10,
            boxShadow: "0 0 10px -2px #00000080",
          }}
          alt=""
        />

        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: -10,
            left: 10,
          }}
        >
          <CircularProgress
            sx={{
              backgroundColor: "black",
              borderRadius: "50%",
              color: "yellow",
              padding: 0.4,
            }}
            size={36}
            thickness={4}
            variant="determinate"
            value={vote_average * 10}
          />
          <p
            style={{
              position: "absolute",
              fontSize: 10,
              color: "white",
              fontWeight: "bolder",
            }}
          >
            {vote_average * 10}
            <span
              style={{
                fontSize: 6,
              }}
            >
              %
            </span>
          </p>
        </div>
      </div>
      <h2
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 6,
          maxWidth: 140,
          maxHeight: 40,
        }}
      >
        {original_title}
      </h2>
      <p
        style={{
          fontSize: 14,
          opacity: 0.5,
        }}
      >
        {release_date}
      </p>
    </Link>
  );
}
