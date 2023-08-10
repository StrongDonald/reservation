import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Newpass() {
  const dispatch = useDispatch();

  return (
    <div className="Newpass">
      <div className="Newpass_content">
        <div className="Newpass_part">
          <div className="Newpass_part_text">
            <div></div>
            <p>パスワード再設定</p>
          </div>

          <p className="Newpass_part_letter">
            新しいパスワードを入力してください
          </p>
          <div className="Newpass_part_Pass">
            <p>パスワード</p>
            <input />
          </div>

          <div className="Newpass_part_Passconfirm">
            <p>パスワード（確あ）</p>
            <input />
          </div>

          <div className="Newpass_part_btn">
            <Link
              to="/user/newpass/finish"
              onClick={() =>
                dispatch({
                  type: "newpassFinish",
                })
              }
            >
              <button>パスワードを設定</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newpass;
