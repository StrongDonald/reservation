import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Registerfinish() {
  return (
    <nav className="userRegisterfinish">
      <div className="userRegisterfinish_content">
        <div className="userRegisterfinish_part">
          <div className="userRegisterfinish_part_title">
            <div></div>
            <p>メールアドレス登録完了</p>
          </div>

          <div className="userRegisterfinish_part_text">
            <p>登録いただいたメールアドレスにメールをお送りしました。</p>
            <p>メールに記載のURLから登録フォームに進んでください。</p>
          </div>

          <div className="userRegisterfinish_part_btngroup">
            <Link to="/">
              <button className="userRegisterfinish_part_back">
                TOPへ戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Registerfinish;
