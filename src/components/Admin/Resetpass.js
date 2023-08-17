import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Resetpass() {
  const dispatch = useDispatch();

  return (
    <nav className="adminResetpass">
      <div className="adminResetpass_part">
        <div className="adminResetpass_part_text">
          <div className="adminResetpass_part_text_content">
            <p>管理者パスワードをリセットします。</p>
            <div className="paddingleft">
              システム提供時に設定したマスター管理者のみリセットできます。
              <br />
              ※他管理者は、マスター管理者にリセットを依頼ください。
            </div>
          </div>
        </div>

        <div className="adminResetpass_part_ID">
          <p>管理者ログインID</p>
          <div>
            <input />
          </div>
        </div>

        <div className="adminResetpass_part_Pass">
          <p>登録されている管理者メールアドレス宛にメールを送ります。</p>
          <br />

          <p>
            ※管理者メールアドレスが複数設定されている場合、1番目に登録されている管理者メールアドレスにメールが届きます。
          </p>
        </div>

        <div className="adminResetpass_part_btn">
          <Link to="/admin">
            <button
                className="adminResetpass_part_btn_back"
            >
              戻る
            </button>
          </Link>

          <Link to="/admin/ResetpassSend">
            <button
            className="adminResetpass_part_btn_send"
            >
              送信
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Resetpass;
