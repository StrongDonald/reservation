import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Newpassfinish() {
  return (
    <div className="Newpassfinish">
      <div className="Newpassfinish_content">
        <div className="Newpassfinish_part">
          <div className="Newpassfinish_part_text">
            <div></div>
            <p>パスワード再設定</p>
          </div>

            <p className="Newpassfinish_part_letter">パスワードを再設定致しました。</p>

          <div className="Newpassfinish_part_btn">
            <Link to="/">
              <button>艮る</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newpassfinish;
