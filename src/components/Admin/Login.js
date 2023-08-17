import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Login() {
  const dispatch = useDispatch();

  return (
    <nav className="adminLogin">
      <div className="adminLogin_part">
        <div className="adminLogin_part_text">
          <div></div>
          <p>ログイン</p>
        </div>

        <div className="adminLogin_part_ID">
          <p>管理者ログインID</p>
          <input />
        </div>

        <div className="adminLogin_part_Pass">
          <p>管理者パスワード</p>
          <input />
        </div>

        <div className="adminLogin_part_btn">
          <Link to="/admin/login">
            <button
              onClick={() =>
                dispatch({
                  type: "adminlogin",
                })
              }
            >
              ログイン
            </button>
          </Link>
        </div>

        <div className="adminLogin_part_passlost">
          <Link to="/admin/passRecover">
            <p>
              パスワードを忘れた方はこちら
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Login;
