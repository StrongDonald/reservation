import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import logo from "../../img/Adminlogo.jpg";

import Box from "@mui/material/Box";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Navbar() {
  const dispatch = useDispatch();

  const logout_nav = (
    <div className="manage_logoutnav">
      <div className="manage_logoutnav_firstDiv">
        <div className="manage_logoutnav_firstDiv_part">
          <Link
            to="/manage/login"
            onClick={() =>
              dispatch({
                type: "manage-login-front",
              })
            }
          >
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="manage_logoutnav_firstDiv_part">
          <Box
            style={{ marginLeft: "10px" }}
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <AssignmentTurnedInIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <Link
            className="navIcons"
            to="/manage/rsvList"
            onClick={() =>
              dispatch({
                type: "managersvList",
              })
            }
          >
            組織ID管理
          </Link>
        </div>

        <div className="manage_logoutnav_firstDiv_part">
          <Box
            style={{ marginLeft: "10px" }}
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <AssignmentTurnedInIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <Link
            className="navIcons"
            to="/manage/rsvList"
            onClick={() =>
              dispatch({
                type: "managersvList",
              })
            }
          >
            会員情報閲覧
          </Link>
        </div>

        <div className="manage_logoutnav_firstDiv_part">
          <Box
            style={{ marginLeft: "10px" }}
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <AssignmentTurnedInIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <Link
            className="navIcons"
            to="/manage/rsvList"
            onClick={() =>
              dispatch({
                type: "managersvList",
              })
            }
          >
            予約状況閲覧
          </Link>
        </div>

        <div className="manage_logoutnav_firstDiv_part">
          <Box
            style={{ marginLeft: "10px" }}
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <AssignmentTurnedInIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <Link
            className="navIcons"
            to="/manage/rsvList"
            onClick={() =>
              dispatch({
                type: "managersvList",
              })
            }
          >
            広告出稿管理
          </Link>
        </div>

        <div className="manage_logoutnav_firstDiv_part">
          <Box
            style={{ marginLeft: "10px" }}
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <AssignmentTurnedInIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <Link
            className="navIcons"
            to="/manage/rsvList"
            onClick={() =>
              dispatch({
                type: "managersvList",
              })
            }
          >
            広告掲載レポート作成
          </Link>
        </div>
      </div>

      <div className="manage_logoutnav_firstDiv">
          <div className="manage_logoutnav_firstDiv_part rightMg">
            <Link
              className="navIcons"
              to="/manage"
              onClick={() =>
                dispatch({
                  type: "managelogout",
                })
              }
            >
              <Box
                className="box"
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
    <div className="manageNavbar">
      <div className="manageNavbar_logo">
        <Link
          to="/manage"
          onClick={() =>
            dispatch({
              type: "frontmanage",
            })
          }
        >
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
  const stData = useSelector((state) => state);
  return <>{stData.manageauth.isAuthenticated ? logout_nav : login_nav}</>;
}

export default Navbar;
