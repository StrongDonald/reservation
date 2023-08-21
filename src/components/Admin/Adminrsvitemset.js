import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

const Adminrsvitemset = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminrsvitemset">
      <table>
        <thead>
          <tr>
            <td className="Adminrsvitemset_td1"><p>編集</p></td>

            <td className="Adminrsvitemset_td2">
                <p>項目名</p>
            </td>

            <td className="Adminrsvitemset_td4">
              <p>必須</p>
            </td>

            <td className="Adminrsvitemset_td2">
              <p>入力タイプ</p>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>分類</td>
            <td>任意</td>
            <td>【予約枠】カテゴリー</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>1人あたり料金</td>
            <td>任意</td>
            <td>【予約枠】料金</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>備考欄</td>
            <td>任意</td>
            <td>予約枠備考</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>日程</td>
            <td>必須</td>
            <td>利用日</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>時間</td>
            <td>必須</td>
            <td>利用時間</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>希望ヘルパー人数</td>
            <td>必須</td>
            <td>予約数</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>備考</td>
            <td>任意</td>
            <td>テキストエリア</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>引継希望日</td>
            <td>必須</td>
            <td>年月日</td>
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
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>引継希望時刻</td>
            <td>必須</td>
            <td>セレクトボックス</td>
          </tr>
        </tbody>
      </table>

      <div className="Adminrsvitemset_addbtn"><button> + 項目追加</button></div>
      <div className="Adminrsvitemset_editbtn"><Link to="/admin/login" onClick={() =>
                dispatch({
                  type: "adminlogin",
                })
              }><button>編集</button></Link></div>
    </div>
  );
};

export default Adminrsvitemset;
