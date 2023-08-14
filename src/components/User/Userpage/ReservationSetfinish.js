import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function ReservationSetfinish() {
  const dispatch = useDispatch();

  return (
    <nav className="ReservationSetfinish">
      <div className="ReservationSetfinish_content">
        <div className="ReservationSetfinish_content_Header">
          <div className="ReservationSetfinish_content_Header_firststep_circle">
            <p className="ReservationSetfinish_content_Header_firststep_circle_num">
              1
            </p>
            <p>入力</p>
          </div>
          <div className="ReservationSetfinish_content_Header_firststep_line"></div>

          <div className="ReservationSetfinish_content_Header_secondstep_line"></div>
          <div className="ReservationSetfinish_content_Header_secondstep_circle">
            <p className="ReservationSetfinish_content_Header_secondstep_circle_num">
              2
            </p>
            <p>確認</p>
          </div>

          <div className="ReservationSetfinish_content_Header_secondstep_line"></div>
          <div className="ReservationSetfinish_content_Header_thirdstep_line"></div>
          <div className="ReservationSetfinish_content_Header_thirdstep_circle">
            <p className="ReservationSetfinish_content_Header_thirdstep_circle_num">
              3
            </p>
            <p>完了</p>
          </div>
        </div>

        <div className="ReservationSetfinish_content_information">
          <div className="ReservationSetfinish_content_information_title">
          予約を受け付けました。<br />
          登録いただいたメールアドレスに確認のメールをお送りしましたので、ご確認ください。 <br />
          表示されている『予約ID』は、必ずメモか印刷をして保存してください。 <br />
          メールが届かない場合は、問い合わせの際に『予約ID』をお知らせください。<br />
          </div>

          <div className="ReservationSetfinish_content_information_ID">
              <span className="ID_title">予約ID：</span>
              <span className="ID_num">48</span>
          </div>

          <div className="ReservationSetfinish_content_information_personalInfor_btn">
            <Link
              to="/user/login"
              onClick={() =>
                dispatch({
                  type: "login",
                })
              }
            >
              <button className="ReservationSetfinish_content_information_personalInfor_btn_next">
                TOPへ戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ReservationSetfinish;
