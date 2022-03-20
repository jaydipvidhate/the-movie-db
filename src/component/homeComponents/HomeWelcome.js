import React from "react";
import PageContainer from "../PageContainer";

export default function HomeWelcome({ welcomeImg, title, subTitle }) {
  return (
    <PageContainer>
      <div
        style={{
          width: "100%",
          padding: "80px 0px",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8),  rgba(0,0,0,0.0)),url(${
            welcomeImg ? welcomeImg : require("../../db/tenet.png")
          })`,
          height: 180,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <h2
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: 10,
            marginLeft: 40,
          }}
        >
          {title}
        </h2>
        <h6 style={{ fontSize: 26, color: "#ffffff", marginLeft: 40 }}>
          {subTitle}
        </h6>
        <input
          type="text"
          style={{
            width: "70%",
            padding: "12px 30px",
            borderRadius: 100,
            marginTop: 30,
            fontSize: 18,
            marginLeft: 40,
          }}
          placeholder="Search for a movie, tv show, person....."
        />
      </div>
    </PageContainer>
  );
}
