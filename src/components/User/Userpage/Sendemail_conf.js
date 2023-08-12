import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Sendemail_conf() {
  const dispatch = useDispatch();

  return (
    <nav className="Sendemail_conf">
      <div className="Sendemail_conf_content">
        <div className="Sendemail_conf_content_Header">
          <div className="Sendemail_conf_content_Header_firststep_circle">
            <p className="Sendemail_conf_content_Header_firststep_circle_num">1</p>
            <p className="Sendemail_conf_content_Header_firststep_circle_label">1.お問い合わせの入力</p>
          </div>
          <div className="Sendemail_conf_content_Header_firststep_line"></div>

          <div className="Sendemail_conf_content_Header_secondstep_line"></div>
          <div className="Sendemail_conf_content_Header_secondstep_circle">
            <p className="Sendemail_conf_content_Header_secondstep_circle_num">2</p>
            <p className="Sendemail_conf_content_Header_secondstep_circle_label">2.お問い合わせの確認</p>
          </div>

          <div className="Sendemail_conf_content_Header_secondstep_line"></div>
          <div className="Sendemail_conf_content_Header_thirdstep_line"></div>
          <div className="Sendemail_conf_content_Header_thirdstep_circle">
            <p className="Sendemail_conf_content_Header_thirdstep_circle_num">3</p>
            <p className="Sendemail_conf_content_Header_thirdstep_circle_label">3.お問い合わせの完了</p>
          </div>
        </div>

        <div className="Sendemail_conf_content_information">

          <table className="Sendemail_conf_content_information_content">
            <tr className="Sendemail_conf_content_information_content_partname">
              <td className="Sendemail_conf_content_information_content_partname_title">
                <p className="Sendemail_conf_content_information_content_partname_title_txt">
                メールアドレス
                </p>
              </td>

              <td className="Sendemail_conf_content_information_content_partname_content">
                <p className="Sendemail_conf_content_information_content_partname_content_txt">
                	d-suzuki@farmnote.jp
                </p>
              </td>
            </tr>

            <tr className="Sendemail_conf_content_information_content_partname">
              <td className="Sendemail_conf_content_information_content_partname_title">
                <p className="Sendemail_conf_content_information_content_partname_title_txt">
                お問い合わせ内容
                </p>
              </td>

              <td className="Sendemail_conf_content_information_content_partname_content">
                <p className="Sendemail_conf_content_information_content_partname_content_txt">
                  question-content
                </p>
              </td>
            </tr>
          </table>

          <div className="Sendemail_conf_content_information_personalInfor_btn">
            <Link
              to="/user/message"
              onClick={() =>
                dispatch({
                  type: "user-sendemail",
                })
              }
            >
              <button className="Sendemail_conf_content_information_personalInfor_btn_back">
                戻る
              </button>
            </Link>
            <Link to="/user/emailsend-finish">
              <button className="Sendemail_conf_content_information_personalInfor_btn_next">
              内容を送信する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sendemail_conf;
