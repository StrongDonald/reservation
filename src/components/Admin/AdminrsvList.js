import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import AdminrsvCalendar from "./AdminrsvCalendar";
import "./index.css";

function AdminrsvList() {
  const dispatch = useDispatch();

  return (
    <div className="AdminrsvList">
      <div className="AdminrsvList_firsttable">
        <div className="AdminrsvList_firsttable_title">
          <div>検索フォーム</div>
        </div>

        <div className="AdminrsvList_firsttable_table">
          <table>
            <tbody>
              <tr>
                <td className="AdminrsvList_firsttable_table_label">
                  予約枠ID
                </td>
                <div>
                  <input></input>
                </div>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="AdminrsvList_firsttable_btnGroup">
          <button className="AdminrsvList_firsttable_btnGroup_back">
            リセット
          </button>
          <button className="AdminrsvList_firsttable_btnGroup_next">
            検索
          </button>
        </div>
      </div>

      <AdminrsvCalendar />
    </div>
  );
}

export default AdminrsvList;
