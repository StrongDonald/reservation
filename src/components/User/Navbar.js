import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";
import logo from "../../img/Logo.png";

import Box from "@mui/material/Box";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Navbar() {
  const dispatch = useDispatch();

  return (
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
        <Link className="ruleCss" to="/">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <DescriptionOutlinedIcon sx={{ color: "#0045FF", fontSize: 30 }} />
          </Box>
        </Link>
        <div className="line"></div>
        <Link className="nav_login" to="/" onClick={() =>
              dispatch({
                type: "login",
              })
            }>
          <div>ログイン</div>
        </Link>
        <div className="nav_letter">もしくは</div>
        <Link className="nav_btn" to="/user/register" onClick={() =>
              dispatch({
                type: "register",
              })
            }>
          <div>新規会員登録</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
