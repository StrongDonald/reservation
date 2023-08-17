import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DoneIcon from '@mui/icons-material/Done';
import Box from "@mui/material/Box";
import "./index.css";

function AdminResetpassSend() {
  const dispatch = useDispatch();

  return (
    <nav className="adminResetpassSend">
      <div className="adminResetpassSend_part">
        <div className="adminResetpassSend_part_text">
          <div className="adminResetpassSend_part_text_content">
            <Box
                className = "box"
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <DoneIcon sx={{ color: "#02d849", fontSize: 25}} />
            </Box>
            <div className="paddingleft">
                パスワードリセットの案内メールを送信しました。
                <br />
                有効期限は竇録から1時間です。
                <br />
                メールの内容に従ってパスワードのリセットを行 ってください。
            </div>
          </div>
        </div>


        <div className="adminResetpassSend_part_Pass">
          <p>メールが届かない埸合、下配が考えられます。</p>
          <br />
          <p>管理者ログイン2が違う</p><br />
          <p>他の管理者メールアドレス宛に届いている</p><br />
          <p>複數マスター管理者がいる埸合、システム提供時に設定し たマスター管理者は別の人</p><br />
          <p>別のマスター管理者にパスワード変更を依頼するか、管理 者ログイン2とメールアドレスを確認してください。</p>
        </div>

        <div className="adminResetpassSend_part_btn">
          <Link to="/admin">
            <button
                className="adminResetpassSend_part_btn_back"
            >
              ログイン画面に戻る
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AdminResetpassSend;
