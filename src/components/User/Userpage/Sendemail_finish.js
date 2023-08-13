import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Sendemail_finish() {
  const dispatch = useDispatch();

  return (
    <nav className="Sendemailfinish">
      <div className="Sendemailfinish_content">
        <div className="Sendemailfinish_content_Header">
          <div className="Sendemailfinish_content_Header_firststep_circle">
            <p className="Sendemailfinish_content_Header_firststep_circle_num">
              1
            </p>
            <p className="Sendemailfinish_content_Header_firststep_circle_label">1.お問い合わせの入力</p>
          </div>
          <div className="Sendemailfinish_content_Header_firststep_line"></div>

          <div className="Sendemailfinish_content_Header_secondstep_line"></div>
          <div className="Sendemailfinish_content_Header_secondstep_circle">
            <p className="Sendemailfinish_content_Header_secondstep_circle_num">
              2
            </p>
            <p className="Sendemailfinish_content_Header_secondstep_circle_label">2.お問い合わせの確認</p>
          </div>

          <div className="Sendemailfinish_content_Header_secondstep_line"></div>
          <div className="Sendemailfinish_content_Header_thirdstep_line"></div>
          <div className="Sendemailfinish_content_Header_thirdstep_circle">
            <p className="Sendemailfinish_content_Header_thirdstep_circle_num">
              3
            </p>
            <p className="Sendemailfinish_content_Header_thirdstep_circle_label">3.お問い合わせの完了</p>
          </div>
        </div>

        <div className="Sendemailfinish_content_information">
          <div className="Sendemailfinish_content_information_title">
            <p>お問い合わせの送信が完了しました</p>
          </div>

          <div className="Sendemailfinish_content_information_personalInfor_btn">
            <Link
              to="/"
              onClick={() =>
                dispatch({
                  type: "front",
                })
              }
            >
              <button className="Sendemailfinish_content_information_personalInfor_btn_next">
                TOPへ戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sendemail_finish;
