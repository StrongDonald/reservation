import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Login() {
  const dispatch = useDispatch();

  return (
    <nav className="manageLogin">
      <div className="manageLogin_part">
        <div className="manageLogin_part_text">
          <div></div>
          <p>ログイン</p>
        </div>

        <div className="manageLogin_part_ID">
          <p>管理者名</p>
          <input />
        </div>

        <div className="manageLogin_part_Pass">
          <p>管理者パスワード</p>
          <input />
        </div>

        <div className="manageLogin_part_btn">
          <Link to="/manage/login">
            <button
              onClick={() =>
                dispatch({
                  type: "managelogin",
                })
              }
            >
              ログイン
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Login;
