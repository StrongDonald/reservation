import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';

const Layer = () => {
  const stData = useSelector(state => state);

  return (
    <div className="ULayer">
      <div className="ULayer_content ">
        <Link className="homeIcon" to="/">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "#0045FF", fontSize: 20 }} />
          </Box>
        </Link>
        <h2 className="pageTitle">
          <span>{stData.auth.Title}</span>
        </h2>
      </div>
    </div>
  );
}

export default Layer;