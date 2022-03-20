import PageContainer from "../component/PageContainer";
import HomeWelcome from "../component/homeComponents/HomeWelcome";
import PopularMovies from "../component/homeComponents/PopularMovies";
import FreeToWatch from "../component/homeComponents/FreeToWatch";

export const Home = () => {
  return (
    <>
      <PageContainer>
        <HomeWelcome
          welcomeImg={require("../db/tenet.png")}
          title="Welcome"
          subTitle=" Millions of movies, TV shows and people to discover. Explore now."
        />
        <PopularMovies />
        <FreeToWatch />
      </PageContainer>
    </>
  );
};
