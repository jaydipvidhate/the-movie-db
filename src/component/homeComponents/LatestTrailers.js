import React, { useRef, useState } from "react";
import { POSTER_URL } from "../../utilities";

const LatestTrailers = ({
  loading,
  setTrailersType,
  trailersType,
  trailers,
}) => {
  const [bGImage, setBGImage] = useState(
    trailers[0] ? trailers[0].poster_path : null
  );
  const posterCard = useRef();

  const onHover = (poster_path) => {
    posterCard.current.style.transform = "scale(1.2)";
    setBGImage(poster_path);
  };
  const onHoverOut = () => {
    posterCard.current.style.transform = "scale(1)";
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 20px",
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6),  rgba(0,0,0,0.6)),url(${POSTER_URL}${bGImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        height: 280,
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 600,
          marginRight: 30,
        }}
      >
        Upcoming Movies
      </h2>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
      >
        {trailers &&
          trailers.map((data) => {
            const { id, original_title, poster_path } = data;
            return (
              <div key={id} style={{ width: "100%", cursor: "pointer" }}>
                <div
                  onMouseOver={() => onHover(poster_path)}
                  onMouseOut={() => onHoverOut()}
                  ref={posterCard}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2),  rgba(0,0,0,0.2)),url(${POSTER_URL}${
                      poster_path ? poster_path : null
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    padding: 100,
                    margin: "20px 10px",
                    width: 200,
                    borderRadius: 10,
                    transform: "scale(1)",
                  }}
                ></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default LatestTrailers;
