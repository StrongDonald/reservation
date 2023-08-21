import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";

const Adminoperatelog = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminoperatelog">
      <div className="Adminoperatelog_btnGroup">
        <span>5件</span>
      </div>

      <table>
        <thead>
          <tr>
            <td>
              <div className="Adminoperatelog_filter">
                <p>操作時間</p>
                <div>
                  <button className="Adminoperatelog_upbtn">▲</button>
                  <br />
                  <button className="Adminoperatelog_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Adminoperatelog_filter">
                <p>管理者ログインID</p>
                <div>
                  <button className="Adminoperatelog_upbtn">▲</button>
                  <br />
                  <button className="Adminoperatelog_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminoperatelog_filter">
                <p>操作機能</p>
                <div>
                  <button className="Adminoperatelog_upbtn">▲</button>
                  <br />
                  <button className="Adminoperatelog_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Adminoperatelog_filter">
                <p>操作内容</p>
                <div>
                  <button className="Adminoperatelog_upbtn">▲</button>
                  <br />
                  <button className="Adminoperatelog_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminoperatelog_filter">
                <p>操作データ</p>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> 2023/08/22(火) 01:49:30 </td>
            <td>business0507i</td>
            <td>お知らせ</td>
            <td>お知らせ表示設定</td>
            <td>ID：1</td>
          </tr>

          <tr>
            <td>2023/08/21(月) 17:17:22</td>
            <td>business0507i</td>
            <td>予約枠のカラー設定</td>
            <td>編集</td>
            <td>ID：2,1</td>
          </tr>

          <tr>
            <td>2023/08/20(日) 00:19:27</td>
            <td>business0507i</td>
            <td>休業設定</td>
            <td>編集</td>
            <td>ID：全予約枠休日設定</td>
          </tr>

          <tr>
            <td>2023/08/19(土) 18:35:09</td>
            <td>business0507i</td>
            <td>予約枠設定</td>
            <td>新規作成</td>
            <td>ID：16</td>
          </tr>

          <tr>
            <td>2023/08/19(土) 01:28:41</td>
            <td>business0507i</td>
            <td>予約枠設定</td>
            <td>公開設定更新</td>
            <td>ID：7</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
};

export default Adminoperatelog;
