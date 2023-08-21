import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Adminfilemanage = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminfilemanage">
      <div className="Adminfilemanage_btnGroup">
        <span>2件</span>
        <button className="Adminfilemanage_btnGroup_create">
          + グループ新規登録
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <td>操作</td>
            <td>
              <div className="Adminfilemanage_filter">
                <p>グループID </p>
                <div>
                  <button className="Adminfilemanage_upbtn">▲</button>
                  <br />
                  <button className="Adminfilemanage_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Adminfilemanage_filter">
                <p>グループ名</p>
                <div>
                  <button className="Adminfilemanage_upbtn">▲</button>
                  <br />
                  <button className="Adminfilemanage_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminfilemanage_filter">
                <p>ファイル名</p>
              </div>
            </td>
            <td>
              <div className="Adminfilemanage_filter">
                <p>パス</p>
              </div>
            </td>
            <td>
              <div className="Adminfilemanage_filter">
                <p>説明文</p>
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
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td> 1 </td>
            <td>画像</td>
            <td>Coming-Sonn</td>
            <td><Link>/file/gazou/Coming-Sonn.jpg/</Link></td>
            <td>カミングスーん</td>
          </tr>

          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td> 2 </td>
            <td>logo</td>
            <td>logo</td>
            <td><Link>/file/logo/logo.jpg</Link></td>
            <td></td>
          </tr>

          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td> 2 </td>
            <td>logo</td>
            <td>original</td>
            <td><Link>/file/logo/original.jpg</Link></td>
            <td>キービジュアル</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adminfilemanage;
