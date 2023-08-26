import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from 'react';
import "./index.css";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function AdminToppage() {
  const dispatch = useDispatch();

  return (
    <div className="AdminToppage">
      <div className="AdminToppage_firsttable">
        <div className="AdminToppage_firsttable_title">
            <div>ご利用状況</div>
        </div>

        <table>
          <thead>
            <tr>
              <td>該当管理アカウントの契約年数・アカウント開設⽇</td>
              <td>該当管理アカウントの累計会員数</td>
              <td>該当管理アカウントのヘルパー予約累計申込数</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>エクスパンド（ベーシック）</td>
              <td>4 / 無制限</td>
              <td>0 / 100000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="AdminToppage_secondtable">
        <div className="AdminToppage_secondtable_title">
            <div>前日のアクセス数</div>
        </div>

        <table className="AdminToppage_secondtable_table">
          <thead>
            <tr>
              <td>該当管理アカウントの新規会員登録数</td>
              <td>該当管理アカウントのヘルパー予約申込数</td>
              <td>該当管理アカウントのヘルパー予約キャンセル数</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>0件</td>
              <td>0件</td>
              <td>0件</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminToppage;
