import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Usermessage() {
  const dispatch = useDispatch();

  return (
    <nav className="Sendemail">
      <div className="Sendemail_content">
        <div className="Sendemail_content_Header">
          <div className="Sendemail_content_Header_firststep_circle">
            <p className="Sendemail_content_Header_firststep_circle_num">1</p>
            <p className="Sendemail_content_Header_firststep_circle_label">1.お問い合わせの入力</p>
          </div>
          <div className="Sendemail_content_Header_firststep_line"></div>

          <div className="Sendemail_content_Header_secondstep_line"></div>
          <div className="Sendemail_content_Header_secondstep_circle">
            <p className="Sendemail_content_Header_secondstep_circle_num">2</p>
            <p className="Sendemail_content_Header_secondstep_circle_label">2.お問い合わせの確認</p>
          </div>

          <div className="Sendemail_content_Header_secondstep_line"></div>
          <div className="Sendemail_content_Header_thirdstep_line"></div>
          <div className="Sendemail_content_Header_thirdstep_circle">
            <p className="Sendemail_content_Header_thirdstep_circle_num">3</p>
            <p className="Sendemail_content_Header_thirdstep_circle_label">3.お問い合わせの完了</p>
          </div>
        </div>

        <div className="Sendemail_content_information">
          <table className="Sendemail_content_information_content">
            <tbody>
              <tr className="Sendemail_content_information_content_partname">
                <td className="Sendemail_content_information_content_partname_content">
                  <p className="Sendemail_content_information_content_partname_content_txt">
                  メールアドレス
                  </p>
                  <p className="Sendemail_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="Sendemail_content_information_content_partname_input">
                  <input className="Sendemail_content_information_content_partname_inputtag" placeholder="d-suzuki@farmnote.jp"/>
                </td>
              </tr>

              <tr className="Sendemail_content_information_content_partname">
                <td className="Sendemail_content_information_content_partname_content">
                  <p className="Sendemail_content_information_content_partname_content_txt">
                  メールアドレス（確認）
                  </p>
                  <p className="Sendemail_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="Sendemail_content_information_content_partname_input">
                  <input className="Sendemail_content_information_content_partname_inputtag" placeholder="d-suzuki@farmnote.jp"/>
                </td>
              </tr>

              <tr className="Sendemail_content_information_content_name">
                <td className="Sendemail_content_information_content_name_content">
                  <p className="Sendemail_content_information_content_name_content_txt">
                  お問い合わせ内容
                  </p>
                  <p className="Sendemail_content_information_content_name_content_require">
                    必須
                  </p>
                </td>

                <td className="Sendemail_content_information_content_name_input">
                  <textarea />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="Sendemail_content_information_personalInfor_btn">
            <Link
              to="/user/login"
              onClick={() =>
                dispatch({
                  type: "login",
                })
              }
            >
              <button className="Sendemail_content_information_personalInfor_btn_back">
              TOPへ戻る
              </button>
            </Link>
            <Link
              to="/user/sendemail-conf"
              onClick={() =>
                dispatch({
                  type: "user-sendemail",
                })
              }
            >
              <button className="Sendemail_content_information_personalInfor_btn_next">
              確認する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Usermessage;
