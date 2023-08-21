import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";

const Adminrestset = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminrestset">
      <div className="Adminrestset_btnGroup">
        <span>1件</span>
        <Link
          to={"/admin/restsetpage"}
          onClick={() =>
            dispatch({
              type: "restsetpage",
            })
          }
        >
          <button
            className="Adminrestset_btnGroup_create"
            onClick={() =>
              dispatch({
                type: "AdminrestsetAdd",
              })
            }
          >
            + 共通の休業設定追加
          </button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <td>操作</td>

            <td>
              <div className="Adminrestset_filter">
                <p>予約枠名</p>
              </div>
            </td>

            <td>
              <div className="Adminrestset_filter">
                <p>利用期間</p>
                <div>
                  <button className="Adminrestset_upbtn">▲</button>
                  <br />
                  <button className="Adminrestset_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminrestset_filter">
                <p>適用除外日</p>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/restsetpage"}
                    onClick={() =>
                      dispatch({
                        type: "restsetpage",
                      })
                    }
                  >
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>共通</td>
            <td>2022/12/31(土)～2023/01/03(火)</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adminrestset;
