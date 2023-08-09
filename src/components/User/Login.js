import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <nav className="userLogin">
      <div className="userLogin_content">
        <div className="userLogin_part">
          <div className="userLogin_part_text">
            <div></div>
            <p>ログイン</p>
          </div>

          <div className="userLogin_part_ID">
            <p>ログインID</p>
            <input />
          </div>

          <div className="userLogin_part_Pass">
            <p>パスワード</p>
            <input />
          </div>

          <div className="userLogin_part_btn">
            <Link to="/user/login">
              <button>ログイン</button>
            </Link>
          </div>

          <div className="userLogin_part_line"></div>

          <div className="userLogin_part_passlost">
            <Link to="user/passRecover">
              <p>パスワードを忘れた方はこちら</p>
            </Link>
            <span>></span>
          </div>

          <div className="userLogin_part_register">
            <Link to="/user/register">
              <p>新規会員登録</p>
            </Link>
            <span>></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Login;
