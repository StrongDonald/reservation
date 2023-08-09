import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Register() {
  return (
    <nav className="userRegister">
      <div className="userRegister_content">
        <div className="userRegister_part">
          <div className="userRegister_part_title">
            <div></div>
            <p>メールアドレス登録</p>
          </div>

          <div className="userRegister_part_text">
            <p>『利用規約』に同意のうえ、メールアドレスを登録してください。</p>
            <p>
              登録後に届く自動返信メールに記載のURLから登録フォームへ進んでください。
            </p>
          </div>

          <table className="userRegister_part_table">
            <tr className="userRegister_part_table_emailaddress">
              <td className="userRegister_part_table_emailaddress_label">メールアドレス</td>
              <td className="userRegister_part_table_emailaddress_type"><input /></td>
            </tr>

            <tr className="userRegister_part_table_emailaddress">
              <td className="userRegister_part_table_emailaddress_label">メールアドレス（確認）</td>
              <td className="userRegister_part_table_emailaddress_type"><input /></td>
            </tr>
          </table>

          <div className="userRegister_part_btngroup">
                <Link to = "/"><button className="userRegister_part_back">TOPへ戻る</button></Link>
                <Link to = "/user/register/finish"><button className="userRegister_part_register">登録する</button></Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Register;
