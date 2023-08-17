import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

const Layer = () => {
  const dispatch = useDispatch();
  const stData = useSelector((state) => state);

  const rsvlist = (
    <div className="adminLayer_rsvlist">
      <Link to="/admin/login" 
      onClick={() =>
        dispatch({
          type: "adminlogin",
        })
      }>
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>運用メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 予約台帳</div>
    </div>
  );

  return <div className="adminLayer">
    {stData.adminauth.Title === 1 ? rsvlist: ""}
      
  </div>;
};

export default Layer;
