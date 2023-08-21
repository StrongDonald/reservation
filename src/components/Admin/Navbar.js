import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import logo from "../../img/Adminlogo.jpg";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GroupIcon from "@mui/icons-material/Group";
import MailIcon from "@mui/icons-material/Mail";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BuildIcon from "@mui/icons-material/Build";

const style = {
  position: "absolute",
  top: "400px",
  left: "350px",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "600px",
  bgcolor: "background.paper",
};

const secondstyle = {
  position: "absolute",
  top: "330px",
  left: "550px",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "450px",
  bgcolor: "background.paper",
};

function Navbar() {
  const [firstopen, setfirstOpen] = React.useState(false);
  const firsthandleClose = () => setfirstOpen(false);

  const [secondopen, setsecondOpen] = React.useState(false);
  const secondhandleClose = () => setsecondOpen(false);
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

        <div
          className="admin_logoutnav_firstDiv_part"
          onClick={() => setfirstOpen(true)}
        >
          <p>各種設定メニュー</p>
          <Box
            className="box"
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <ExpandMoreIcon sx={{ color: "white", fontSize: 25 }} />
          </Box>
        </div>

        <div
          className="admin_logoutnav_firstDiv_part"
          onClick={() => setsecondOpen(true)}
        >
          <p>運用メニュー</p>
          <Box
            className="box"
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <ExpandMoreIcon sx={{ color: "white", fontSize: 25 }} />
          </Box>
        </div>
      </div>

      <div className="admin_logoutnav_firstDiv">
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
  return (
    <>
      {stData.adminauth.isAuthenticated ? logout_nav : login_nav}
      <Modal
        keepMounted
        open={firstopen}
        onClose={firsthandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="Menu-Modal-header">
            <Box
              className="box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <HomeIcon sx={{ color: "#727272", fontSize: 25 }} />
            </Box>
            <p>各種設定メニューTOP</p>
            <Box
              className="box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ color: "#727272", fontSize: 25 }} />
            </Box>
          </div>

          <div className="Menu-Modal-body">
            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <AssignmentTurnedInIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
              <p>予約設定</p>
            </div>

            <Link
              to="/admin/reservationframeset"
              onClick={() =>
                dispatch({
                  type: "rsvframeset",
                })
              }
            >
              <div
                className="Menu-Modal-body-firstdiv-settings"
                onClick={() => {
                  setfirstOpen(false);
                }}
              >
                <p>予約枠設定</p>
                <Box
                  className="box"
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                  />
                </Box>
              </div>
            </Link>

            <Link
              to="/admin/restset"
              onClick={() =>
                dispatch({
                  type: "restset",
                })
              }
            >
              <div
                className="Menu-Modal-body-firstdiv-settings"
                onClick={() => {
                  setfirstOpen(false);
                }}
              >
                <p>休業設定</p>
                <Box
                  className="box"
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                  />
                </Box>
              </div>
            </Link>

            <Link
              to="/admin/rsvitemset"
              onClick={() =>
                dispatch({
                  type: "rsvitemset",
                })
              }
            >
              <div
                className="Menu-Modal-body-firstdiv-settings"
                onClick={() => {
                  setfirstOpen(false);
                }}
              >
                <p>予約内容の項目設定</p>
                <Box
                  className="box"
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                  />
                </Box>
              </div>
            </Link>

            <div className="line"></div>

            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <GroupIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
              <p>顧客設定</p>
            </div>

            <Link
              to="/admin/customerset"
              onClick={() =>
                dispatch({
                  type: "customerset",
                })
              }
            >
              <div
                className="Menu-Modal-body-firstdiv-settings"
                onClick={() => {
                  setfirstOpen(false);
                }}
              >
                <p>顧客情報の項目設定</p>
                <Box
                  className="box"
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                  />
                </Box>
              </div>
            </Link>

            <div className="line"></div>

            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <MailIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
              <p>メール設定</p>
            </div>


            <Link
            to="/admin/automailsend"
            onClick={() =>
              dispatch({
                type: "automailsend",
              })
            }
            >  
              <div
                className="Menu-Modal-body-firstdiv-settings"
                onClick={() => {
                  setfirstOpen(false);
                }}
              >
                <p>自動返信メール設定</p>
                <Box
                  className="box"
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                  />
                </Box>
              </div>
            </Link>


            <div className="line"></div>

            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <EventAvailableIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
              <p>予約サイト設定</p>
            </div>

            <Link
            to="/admin/mainsetting"
            onClick={() =>
              dispatch({
                type: "mainsetting",
              })
            }
            >  
            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setfirstOpen(false);
              }}
            >
              <p>基本設定</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div></Link>

            <Link
            to="/admin/tagsetting"
            onClick={() =>
              dispatch({
                type: "tagsetting",
              })
            }
            > 
            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setfirstOpen(false);
              }}
            >
              <p>計測タグ設定</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div></Link>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setfirstOpen(false);
              }}
            >
              <p>予約枠のカラー設定</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>


            <Link
            to="/admin/detailset"
            onClick={() =>
              dispatch({
                type: "detailset",
              })
            }
            >
            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setfirstOpen(false);
              }}
            >
              <p>利用規約・個人情報取り扱い・特商法 設定</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>
            </Link>
          </div>
        </Box>
      </Modal>

      <Modal
        keepMounted
        open={secondopen}
        onClose={secondhandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={secondstyle}>
          <div className="Menu-Modal-header">
            <Box
              className="box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <HomeIcon sx={{ color: "#727272", fontSize: 25 }} />
            </Box>
            <p>予約台帳</p>
            <Box
              className="box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ color: "#727272", fontSize: 25 }} />
            </Box>
          </div>

          <div className="Menu-Modal-body">
            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <AssignmentTurnedInIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
              <p>予約管理</p>
            </div>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setsecondOpen(false);
              }}
            >
              <p>予約一覧</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>
            <div className="line"></div>
            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <GroupIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
              <p>顧客管理</p>
            </div>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setsecondOpen(false);
              }}
            >
              <p>顧客一覧</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setsecondOpen(false);
              }}
            >
              <p>会員登録</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>

            <div className="line"></div>
            <div className="Menu-Modal-body-firstdiv-settings fontbold">
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <BuildIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
              <p>CMS管理</p>
            </div>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setsecondOpen(false);
              }}
            >
              <p>お知らせ</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setsecondOpen(false);
              }}
            >
              <p>操作ログ</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>

            <div
              className="Menu-Modal-body-firstdiv-settings"
              onClick={() => {
                setsecondOpen(false);
              }}
            >
              <p>ファイル管理</p>
              <Box
                className="box"
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#727272", fontSize: 20 }}
                />
              </Box>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Navbar;
