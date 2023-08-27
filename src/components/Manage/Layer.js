import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';

const Layer = () => {
  const stData = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="manageLayer">
      <div className="manageLayer_content ">
        <Link className="homeIcon" to={stData.manageauth.isAuthenticated? "/manage/login": "/manage"} 
              onClick={() =>
              {stData.manageauth.isAuthenticated? dispatch({
                  type: "managefront",
                }): dispatch({
                  type: "manage",
                })}
              }>
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
          <span>{stData.manageauth.Title}</span>
        </h2>
      </div>
    </div>
  );
}

export default Layer;