import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import logo from "../../img/Logo.png";

import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EmailIcon from "@mui/icons-material/Email";
import HistoryIcon from "@mui/icons-material/History";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";


function Navbar() {
  const dispatch = useDispatch();

  const logout_nav = (
    <div className="user_logoutnav">
      <div className="user_logoutnav_content">
        <div className="user_logoutnav_content_logo">
          <Link
            to="/user/login"
            onClick={() =>
              dispatch({
                type: "login-front",
              })
            }
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="user_logoutnav_content_icons">
            <Tooltip
                title={<h1 style={{ fontSize: "15px" }}>マイページ</h1>}
                placement="bottom"
                className="tooltip"
              >
              <Link className="navIcons" to="/user/infor"
                onClick={() =>
                  dispatch({
                    type: "user-infor",
                  })
                }>
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <PermIdentityIcon sx={{ color: "#0045FF", fontSize: 30 }} />
                </Box>
              </Link>
          </Tooltip>

            <Tooltip
              title={<h1 style={{ fontSize: "15px" }}>予約履歴</h1>}
              placement="bottom"
              className="tooltip"
            >
            <Link className="navIcons" to="/user/reservationHistory"
              onClick={() =>
                dispatch({
                  type: "reservationhistory",
                })
              }>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <HistoryIcon sx={{ color: "#0045FF", fontSize: 30 }} />
              </Box>
            </Link>
          </Tooltip>

            <Tooltip
                title={<h1 style={{ fontSize: "15px" }}>お問い合わせ</h1>}
                placement="bottom"
                className="tooltip"
              >
            <Link className="navIcons" to="/user/message"
              onClick={() =>
                dispatch({
                  type: "user-sendemail",
                })
              }>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <EmailIcon sx={{ color: "#0045FF", fontSize: 30 }} />
              </Box>
            </Link>
          </Tooltip>

            <Tooltip
              title={<h1 style={{ fontSize: "15px" }}>利用規約</h1>}
              placement="bottom"
              className="tooltip"
            >
              <Link className="navIcons" to="/user/rule"
                onClick={() =>
                  dispatch({
                    type: "userRule",
                  })
                }>
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <DescriptionOutlinedIcon
                    sx={{ color: "#0045FF", fontSize: 30 }}
                  />
                </Box>
              </Link>
          </Tooltip>

            <Tooltip
                title={<h1 style={{ fontSize: "15px" }}>ログアウト</h1>}
                placement="bottom"
                className="tooltip"
              >
            <Link
              className="navIcons"
              to="/"
              onClick={() =>
                dispatch({
                  type: "logout",
                })
              }
            >
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <ExitToAppIcon sx={{ color: "#0045FF", fontSize: 30 }} />
              </Box>
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );

  const login_nav = (
    <div className="UNavbar">
      <div className="UNavbar_content">
        <div className="UNavbar_content_logo">
          <Link
            to="/"
            onClick={() =>
              dispatch({
                type: "front",
              })
            }
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="UNavbar_content_icons">
          <Link className="ruleCss" to="/">
            <Box
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <DescriptionOutlinedIcon
                sx={{ color: "#0045FF", fontSize: 30 }}
              />
            </Box>
          </Link>
          <div className="line"></div>
          <Link
            className="nav_login"
            to="/"
            onClick={() =>
              dispatch({
                type: "front",
              })
            }
          >
            <div>ログイン</div>
          </Link>
          <div className="nav_letter">もしくは</div>
          <Link
            className="nav_btn"
            to="/user/register"
            onClick={() =>
              dispatch({
                type: "register",
              })
            }
          >
            <div>新規会員登録</div>
          </Link>
        </div>
      </div>
    </div>
  );
  const stData = useSelector((state) => state);
  return <>{stData.auth.isAuthenticated ? logout_nav : login_nav}</>;
}

export default Navbar;
