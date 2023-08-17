import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import logo from "../../img/Adminlogo.jpg";

import Box from "@mui/material/Box";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
  const dispatch = useDispatch();

  const logout_nav = (
    <div className="admin_logoutnav">
      <div className="admin_logoutnav_firstDiv">
        <div className="admin_logoutnav_firstDiv_part">
          <Link
            to="/admin/login"
            onClick={() =>
              dispatch({
                type: "admin-login-front",
              })
            }
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="admin_logoutnav_firstDiv_part">
          <Link
            className="navIcons"
            to="/admin/rsvList"
            onClick={() =>
              dispatch({
                type: "adminrsvList",
              })
            }
          >
            予約台帳
          </Link>
        </div>

        <div className="admin_logoutnav_firstDiv_part">
          <Link
            className="navIcons"
            to="/admin/infor"
            onClick={() =>
              dispatch({
                type: "admin-infor",
              })
            }
          >
            <p>各種設定メニュー</p>
            <Box
                className = "box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <ExpandMoreIcon sx={{ color: "white", fontSize: 25}} />
            </Box>
          </Link>
        </div>

        <div className="admin_logoutnav_firstDiv_part">
          <Link
            className="navIcons"
            to="/admin/infor"
            onClick={() =>
              dispatch({
                type: "admin-infor",
              })
            }
          >
            <p>運用メニュー</p>
            <Box
                className = "box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <ExpandMoreIcon sx={{ color: "white", fontSize: 25}} />
            </Box>
          </Link>
        </div>
      </div>

      <div className="admin_logoutnav_firstDiv">
        <div className="admin_logoutnav_firstDiv_part rightMg">
          <Link
            className="navIcons"
            to="/admin/rule"
            onClick={() =>
              dispatch({
                type: "adminRule",
              })
            }
          >
            <Box
                className = "box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <PersonIcon sx={{ color: "white", fontSize: 20 }} />
            </Box>
            <p>管理者情報</p>
          </Link>
        </div>

        <div className="admin_logoutnav_firstDiv_part rightMg">
          <Link
            className="navIcons"
            to="/admin"
            onClick={() =>
              dispatch({
                type: "adminlogout",
              })
            }
          >
            <Box
            className = "box"
                sx={{
                    "& > :not(style)": {
                    m: 0,
                    },
                }}
                >
                <ExitToAppIcon sx={{ color: "white", fontSize: 20 }} />
            </Box>
            <p>ログアウト</p>
          </Link>
        </div>
      </div>
    </div>
  );

  const login_nav = (
    <div className="adminNavbar">
      <div className="adminNavbar_logo">
        <Link
          to="/admin"
          onClick={() =>
            dispatch({
              type: "frontAdmin",
            })
          }
        >
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
  const stData = useSelector((state) => state);
  return <>{stData.adminauth.isAuthenticated ? logout_nav : login_nav}</>;
}

export default Navbar;
