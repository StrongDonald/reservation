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

const Admincustomerlist = () => {
  const dispatch = useDispatch();

  return (
    <div className="Admincustomerlist">
      <div className="Admincustomerlist_btnGroup">
        <span>4件</span>
      </div>

      <table>
        <thead>
          <tr>
            <td>操作</td>
            <td>
              <div className="Admincustomerlist_filter">
                <input type="checkbox" />
              </div>
            </td>
            <td>
              <div className="Admincustomerlist_filter">
                <p>顧客ID</p>
                <div>
                  <button className="Admincustomerlist_upbtn">▲</button>
                  <br />
                  <button className="Admincustomerlist_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Admincustomerlist_filter">
                <p>顧客区分</p>
                <div>
                  <button className="Admincustomerlist_upbtn">▲</button>
                  <br />
                  <button className="Admincustomerlist_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Admincustomerlist_filter">
                <p>役職名</p>
              </div>
            </td>

            <td>
              <div className="Admincustomerlist_filter">
                <p>氏名</p>
              </div>
            </td>

            <td>
              <div className="Admincustomerlist_filter">
                <p>携帯番号</p>
              </div>
            </td>
            <td>
              <div className="Admincustomerlist_filter">
                <p>住所</p>
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
            <td>4</td>
            <td>会員</td>
            <td>代表取締役</td>
            <td>鈴木　大樹</td>
            <td>000-0000-0000</td>
            <td>1070061 東京都 港区 北青山3-6-7</td>
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
            <td>3</td>
            <td>会員</td>
            <td>代表</td>
            <td>臼井　貴之</td>
            <td>090-6219-6724</td>
            <td>0860345 北海道 野付郡別海町 中西別176-3	</td>
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
            <td>2</td>
            <td>会員</td>
            <td>代表取締役</td>
            <td>テスト　テスト</td>
            <td>080-4130-0036</td>
            <td>1070061 東京都 港区 北青山</td>
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
            <td>1</td>
            <td>会員</td>
            <td>牧場長</td>
            <td>鈴木　大樹</td>
            <td>080-4130-0036</td>
            <td>1080071 東京都 港区 白金台</td>
          </tr>

        </tbody>
      </table>

      <div className="Admincustomerlist_btn">
        <button>一括削除</button>
      </div>
    </div>
  );
};

export default Admincustomerlist;
