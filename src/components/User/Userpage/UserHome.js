import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import "./index.css";
import background from "../../../img/main_2.jpg";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function UserHome() {
  const dispatch = useDispatch();
  const [flg, setflg] = useState(0);
  const [cssfirst, setcssfirst] = useState("UserHome_content_box_secondline");
  const [csssecond, setcsssecond] = useState("UserHome_content_box_thirdline");
  const [fullcss, setfullcss] = useState("UserHome_content");

  function myfunc() {
    if(!flg) {
      setcssfirst("UserHome_content_box_secondline undisplay");
      setcsssecond("UserHome_content_box_thirdline undisplay");
      setfullcss("UserHome_content gap");
    }
    else {
      setcssfirst("UserHome_content_box_secondline");
      setcsssecond("UserHome_content_box_thirdline");
      setfullcss("UserHome_content");
    }
    setflg(flg^1);
  }

  return (
    <div className="UserHome">
      <div className={fullcss}>
        <div className="UserHome_background">
          <img src={background} alt="background"></img>
        </div>

        <div className="UserHome_content_box">
          <div className="UserHome_content_box_firstline">
            <div className="UserHome_content_box_firstline_title">
              <div></div>
              <p>条件を絞る</p>
            </div>

            <div className="UserHome_content_box_firstline_uparrow">
              <Link className="navIcons" to="/user/login" onClick={myfunc}>
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  {flg?<KeyboardArrowDownIcon sx={{ color: "#0045FF", fontSize: 40 }} />:<KeyboardArrowUpIcon sx={{ color: "#0045FF", fontSize: 40 }} />}
                </Box>
              </Link>
            </div>
          </div>

          <div className={cssfirst}>
            <p className="UserHome_content_box_secondline_p">カテゴリー上位</p>

            <div className="UserHome_content_box_secondline_content">
              <p>酪農ヘルパー</p>
              <span>
                <Link className="navIcons" to="/user/login">
                    <Box
                    sx={{
                        "& > :not(style)": {
                        m: 0,
                        },
                    }}
                    >
                    <KeyboardArrowUpIcon sx={{ color: "#0045FF", fontSize: 20 }} />
                    </Box>
                </Link>
              </span>
            </div>
          </div>

          <div className={csssecond}>
            <button className="UserHome_content_box_thirdline_reset">
              リセット
            </button>
            <Link to='/user/rsvStatus' 
              onClick={() =>
                  dispatch({
                    type: "rsvStatus",
                  })
                }>
              <button className="UserHome_content_box_thirdline_view">
                予約状況を見る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
