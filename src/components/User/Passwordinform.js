import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Passwordinform() {
  return (
    <nav className="userPasswordinform">
      <div className="userPasswordinform_content">
        <div className="userPasswordinform_part">
          <div className="userPasswordinform_part_title">
            <div></div>
            <p>パスワードリマインダー</p>
          </div>

          <div className="userPasswordinform_part_text">
            <p>会員登録時のメールアドレスにメールを送信しました。メールをご確認ください。</p>
          </div>    

          <div className="userPasswordinform_part_btngroup">
            <Link to="/">
              <button className="userPasswordinform_part_back">
                戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Passwordinform;
