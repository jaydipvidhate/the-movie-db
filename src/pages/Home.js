import React from "react";
import PageContainer from "../component/PageContainer";
import Header from "../component/Header";
import HomeWelcome from "../component/homeComponents/HomeWelcome";
import PopularMovies from "../component/homeComponents/PopularMovies";

export const Home = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <HomeWelcome />
        <PopularMovies />
      </PageContainer>
    </>
  );
};
