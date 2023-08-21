import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ErrorIcon from "@mui/icons-material/Error";

const AdminrsvView = () => {
  const dispatch = useDispatch();

  return (
    <div className="AdminrsvView">
      <div className="AdminrsvView_btnGroup">
        <span>4件</span>
      </div>

      <table>
        <thead>
          <tr>
            <td>操作</td>
            <td>
              <div className="AdminrsvView_filter">
                  <input type="checkbox" />
              </div>
            </td>
            <td>
              <div className="AdminrsvView_filter">
                <p>会社名・牧場名</p>
              </div>
            </td>

            <td>
              <div className="AdminrsvView_filter">
                <p>ステータス</p>
                <div>
                  <button className="AdminrsvView_upbtn">▲</button>
                  <br />
                  <button className="AdminrsvView_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="AdminrsvView_filter">
                <p>利用日時</p>
                <div>
                  <button className="AdminrsvView_upbtn">▲</button>
                  <br />
                  <button className="AdminrsvView_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="AdminrsvView_filter">
                <p>希望ヘルパー人数</p>
                <div>
                  <button className="AdminrsvView_upbtn">▲</button>
                  <br />
                  <button className="AdminrsvView_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="AdminrsvView_filter">
                <p>備考</p>
              </div>
            </td>

            <td>
              <div className="AdminrsvView_filter">
                <p>総飼養頭数</p>
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
                <ErrorIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EventAvailableIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td>
              <div>
                <input type="checkbox" />
              </div>
            </td>
            <td>株式会社ファームノート</td>
            <td>
              <div className="AdminrsvView_status">仮申込</div>
            </td>
            <td>2023/08/24(木) 05:00～ 2023/08/24(木) 19:00</td>
            <td>2</td>
            <td>qqqqqq</td>
            <td>100</td>
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
                <ErrorIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EventAvailableIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td>
              <div>
                <input type="checkbox" />
              </div>
            </td>
            <td>株式会社ファームノート</td>
            <td>
              <div className="AdminrsvView_status">仮申込</div>
            </td>
            <td>2023/08/24(木) 05:00～ 2023/08/24(木) 19:00</td>
            <td>2</td>
            <td>qqqqqq</td>
            <td>100</td>
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
                <ErrorIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EventAvailableIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td>
              <div>
                <input type="checkbox" />
              </div>
            </td>
            <td>株式会社ファームノート</td>
            <td>
              <div className="AdminrsvView_status">仮申込</div>
            </td>
            <td>2023/08/24(木) 05:00～ 2023/08/24(木) 19:00</td>
            <td>2</td>
            <td>qqqqqq</td>
            <td>100</td>
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
                <ErrorIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EventAvailableIcon sx={{ color: "#727272", fontSize: 20 }} />
                <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
              </Box>
            </td>
            <td>
              <div>
                <input type="checkbox" />
              </div>
            </td>
            <td>株式会社ファームノート</td>
            <td>
              <div className="AdminrsvView_status">仮申込</div>
            </td>
            <td>2023/08/24(木) 05:00～ 2023/08/24(木) 19:00</td>
            <td>2</td>
            <td>qqqqqq</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <div className="AdminrsvView_btn"><button>一括削除</button></div>
    </div>
  );
};

export default AdminrsvView;
