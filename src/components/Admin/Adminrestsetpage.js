import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";

const Adminrestsetpage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="Adminrestsetpage">
        <div className="Adminrestsetpage_header">1</div>

        <div className="Adminrestsetpage_title1">
          <span>適用期間</span>
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <DeleteIcon sx={{ color: "#727272", fontSize: 25 }} />
          </Box>
        </div>

        <div className="Adminrestsetpage_date">
          <input type="date" />
          <span>から</span>
          <input type="date" />
          <span>の期間</span>
        </div>
        <div className="Adminrestsetpage_title2">適用曜日</div>

        <div className="Adminrestsetpage_day">
          <div>
            <input type="checkbox" />
            <span>月</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>火</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>水</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>木</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>金</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>土</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>日</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>祝日</span>
          </div>
        </div>

        <div className="Adminrestsetpage_title3">適用時間</div>

        <div className="Adminrestsetpage_time">
          <input type="time" />
          <span>から</span>
          <input type="time" />
          <span>の時間</span>
        </div>
        <div className="Adminrestsetpage_title4">適用除外日</div>

        <div className="Adminrestsetpage_btndiv">
          <button>+ 適用除外日追加</button>
        </div>
      </div>

      <div className="Adminrestpage_addbtn">
        <button>+ 休業設定 追加</button>
      </div>

      <div className="Adminrestpage_finishbtn">
        <Link
          to="/admin/restset"
          onClick={() =>
            dispatch({
              type: "restset",
            })
          }
        >
          <button className="Adminrestpage_finishbtn_back">戻る</button>
        </Link>
        <Link
          to="/admin/restset"
          onClick={() =>
            dispatch({
              type: "restset",
            })
          }
        >
          <button className="Adminrestpage_finishbtn_nxt">登録</button>
        </Link>
      </div>
    </>
  );
};

export default Adminrestsetpage;
