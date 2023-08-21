import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Adminnoticeedit = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminnoticeedit">
      <table>
        <tr>
          <td>
            <div className="Adminnoticeedit_title">
              <p>表示順</p>
              <div>必須</div>
            </div>
          </td>

          <td>
            <div className="Adminnoticeedit_content">
              <input />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="Adminnoticeedit_title">
              <p>閲覧権限</p>
              <div>必須</div>
            </div>
          </td>

          <td>
            <div className="Adminnoticeedit_div">
              <div>
                <input type="checkbox" />
                <span>全て</span>
              </div>

              <div>
                <input type="checkbox" />
                <span>ゲスト</span>
              </div>

              <div>
                <input type="checkbox" />
                <span>ログイン</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="Adminnoticeedit_title">
              <p>掲載期間</p>
            </div>
          </td>

          <td>
            <div className="Adminnoticeedit_datecontent">
              <input type="date" />
              <span>から</span>
              <input type="date" />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="Adminnoticeedit_title">
              <p>本文</p>
              <div>必須</div>
            </div>
          </td>

          <td>
            <textarea />
          </td>
        </tr>
      </table>

      <div className="Adminnoticeedit_btndiv">
      <Link
        to="/admin/notice"
        onClick={() =>
          dispatch({
            type: "notice",
          })
        }
      ><button className="Adminnoticeedit_back">戻る</button></Link>
        <button className="Adminnoticeedit_preview">プレビュー</button>

        <Link
        to="/admin/notice"
        onClick={() =>
          dispatch({
            type: "notice",
          })
        }><button className="Adminnoticeedit_next">登録</button></Link>
      </div>
    </div>
  );
};

export default Adminnoticeedit;
