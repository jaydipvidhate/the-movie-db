import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const index = ({ props }) => {
  return (
    <HideOnScroll {...props}>
      <div
        style={{
          backgroundColor: "rgb(3,37,65)",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: 1300,
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
          }}
        >
          <div>
            <Link
              to="/"
              className="navLink"
              style={{ fontWeight: "bolder", letterSpacing: 4, fontSize: 22 }}
            >
              TMDB
            </Link>
            <Link to="/" className="navLink">
              Movies
            </Link>
            <Link to="/" className="navLink">
              TV Shows
            </Link>
            <Link to="/" className="navLink">
              People
            </Link>
            <Link to="/" className="navLink">
              More
            </Link>
          </div>
          <div>
            <Fab size="small" sx={{ pr: 6, pl: 6 }} variant="extended">
              Login
            </Fab>
          </div>
        </div>
      </div>
    </HideOnScroll>
  );
};

export default index;
