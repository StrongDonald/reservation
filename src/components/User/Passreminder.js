import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Passreminder() {
  const dispatch = useDispatch();

  return (
    <nav className="userPassreminder">
      <div className="userPassreminder_content">
        <div className="userPassreminder_part">
          <div className="userPassreminder_part_title">
            <div></div>
            <p>パスワードリマインダー</p>
          </div>

          <div className="userPassreminder_part_text">
            <p>
              パスワードを忘れてしまった方は、登録時のメールアドレスを入力しリマインダーメールを受信してください。
            </p>
          </div>

          <div className="userPassreminder_part_emailTrans">
            <p>登録時のメールアドレス</p>
            <input></input>
          </div>

          <div className="userPassreminder_part_btngroup">
            <Link
              to="/"
              onClick={() =>
                dispatch({
                  type: "front",
                })
              }
            >
              <button className="userPassreminder_part_back">戻る</button>
            </Link>

            <Link
              to="/user/passInform"
              onClick={() =>
                dispatch({
                  type: "passinform",
                })
              }
            >
              <button className="userPassreminder_part_receive">
                リマインダーメールを受信する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Passreminder;
