import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function RsvCancel() {
  const dispatch = useDispatch();

  return (
    <nav className="RsvCancel">
      <div className="RsvCancel_content">

        <div className="RsvCancel_content_information">
          <div className="RsvCancel_content_information_title">
          予約のキャンセルを受け付けました。<br />
          登録いただいたメールアドレスに確認のメールをお送りしましたので、ご確認ください。 <br />
          表示されている『予約ID』は、必ずメモか印刷をして保存してください。<br />
          メールが届かない場合は、問い合わせの際に『予約ID』をお知らせください。<br />
          </div>

          <div className="RsvCancel_content_information_ID">
              <span className="ID_title">予約ID：</span>
              <span className="ID_num">48</span>
          </div>

          <div className="RsvCancel_content_information_personalInfor_btn">
            <Link
              to="/user/login"
              onClick={() =>
                dispatch({
                  type: "login",
                })
              }
            >
              <button className="RsvCancel_content_information_personalInfor_btn_next">
                TOPへ戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default RsvCancel;
