import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Useraddfinish() {
  return (
    <nav className="Useraddfinish">
      <div className="Useraddfinish_content">
        <div className="Useraddfinish_content_Header">
          <div className="Useraddfinish_content_Header_firststep_circle">
            <p className="Useraddfinish_content_Header_firststep_circle_num">1</p>
            <p>入力</p>
          </div>
          <div className="Useraddfinish_content_Header_firststep_line"></div>

          <div className="Useraddfinish_content_Header_secondstep_line"></div>
          <div className="Useraddfinish_content_Header_secondstep_circle">
            <p className="Useraddfinish_content_Header_secondstep_circle_num">2</p>
            <p>確認</p>
          </div>

          <div className="Useraddfinish_content_Header_secondstep_line"></div>
          <div className="Useraddfinish_content_Header_thirdstep_line"></div>
          <div className="Useraddfinish_content_Header_thirdstep_circle">
            <p className="Useraddfinish_content_Header_thirdstep_circle_num">3</p>
            <p>完了</p>
          </div>
        </div>

        <div className="Useraddfinish_content_information">
          <div className="Useraddfinish_content_information_title">
            <p>会員登緑が完了しました。</p>
            <p>登錄したメールアドレスにメールをお送りしましたので、ご確認ください.</p>
          </div>

            <div className="Useraddfinish_content_information_personalInfor_btn">
                <Link to = "/"><button className="Useraddfinish_content_information_personalInfor_btn_next">TOPへ戻る</button></Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Useraddfinish;
