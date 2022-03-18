import React from "react";

export default function HomeWelcome() {
  return (
    <div
      style={{
        width: "100%",
        padding: "80px 40px",
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8),  rgba(0,0,0,0.0)),url(${require("../../db/tenet.png")})`,
        height: 180,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: 60,
          fontWeight: "bold",
          color: "#ffffff",
          marginBottom: 10,
        }}
      >
        Welcome.
      </h2>
      <h6 style={{ fontSize: 26, color: "#ffffff" }}>
        Millions of movies, TV shows and people to discover. Explore now.
      </h6>
      <input
        type="text"
        style={{
          width: "70%",
          padding: "12px 20px",
          borderRadius: 100,
          marginTop: 30,
          fontSize: 18,
        }}
        placeholder="Search for a movie, tv show, person....."
      />
    </div>
  );
}
