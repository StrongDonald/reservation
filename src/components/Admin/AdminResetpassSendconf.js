import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DoneIcon from '@mui/icons-material/Done';
import Box from "@mui/material/Box";
import "./index.css";

function AdminResetpassSendconf() {
  const dispatch = useDispatch();

  return (
    <nav className="adminResetpassSendconf">
      <div className="adminResetpassSendconf_part">
        <div className="adminResetpassSendconf_part_text">
          <div className="adminResetpassSendconf_part_text_content">
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
                管理者パスワードを初期バスワードへリセットし ました。
                <br />
                ログイン後、パスワードの再設定を行ってご利用 ください。 
            </div>
          </div>
        </div>

        <div className="adminResetpassSendconf_part_btn">
          <Link to="/admin">
            <button
                className="adminResetpassSendconf_part_btn_back"
            >
              ログイン画面に戻る
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AdminResetpassSendconf;
