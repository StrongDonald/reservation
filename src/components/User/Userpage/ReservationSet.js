import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./index.css";

function ReservationSet() {
  const dispatch = useDispatch();
  const stData = useSelector(state => state);
  const [date, setDate] = useState('');
  const [rsvDate, setrsvDate] = useState('');
  const [rsvContent, setrsvContent] = useState('');
  const [rsvFee, setrsvFee] = useState('');
  const [rsvTime, setrsvTime] = useState('');
  const [message, setmessage] = useState('');
  const [finishdate, setfinishdate] = useState('');
  const [finishtime, setfinishtime] = useState('');

  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    setfinishdate(e.target.value);
  };

  const selecthandle = (e) => {
    setfinishtime(e.target.value);
  }

  const textareaHandle = (e) => {
    setmessage(e.target.value);
  }

  useEffect(() => {
    setrsvDate(stData.auth.reservationDate);
    setrsvContent(stData.auth.reservationContent);
    setrsvFee(stData.auth.reservationFee);
    setrsvTime(stData.auth.reservationTime);    
  }, []);


  return (
    <nav className="ReservationSet">
      <div className="ReservationSet_content">
        <div className="ReservationSet_content_Header">
          <div className="ReservationSet_content_Header_firststep_circle">
            <p className="ReservationSet_content_Header_firststep_circle_num">
              1
            </p>
            <p>入力</p>
          </div>
          <div className="ReservationSet_content_Header_firststep_line"></div>

          <div className="ReservationSet_content_Header_secondstep_line"></div>
          <div className="ReservationSet_content_Header_secondstep_circle">
            <p className="ReservationSet_content_Header_secondstep_circle_num">
              2
            </p>
            <p>確認</p>
          </div>

          <div className="ReservationSet_content_Header_secondstep_line"></div>
          <div className="ReservationSet_content_Header_thirdstep_line"></div>
          <div className="ReservationSet_content_Header_thirdstep_circle">
            <p className="ReservationSet_content_Header_thirdstep_circle_num">
              3
            </p>
            <p>完了</p>
          </div>
        </div>

        <div className="ReservationSet_content_information">
          <div className="ReservationSet_content_information_title">
            <div className="ReservationSet_content_information_title_symbol"></div>
            <div className="ReservationSet_content_information_title_text">
              予約情報
            </div>
          </div>

          <table className="ReservationSet_content_information_content">
            <tbody>
              <tr className="ReservationSet_content_information_content_partname">
                <td className="ReservationSet_content_information_content_partname_content">
                  <p className="ReservationSet_content_information_content_partname_content_txt">
                    内容
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_partname_input">
                  <p className="ReservationSet_content_information_content_partname_inputtag">
                    {stData.auth.reservationContent}
                  </p>
                </td>
              </tr>

              <tr className="ReservationSet_content_information_content_partname">
                <td className="ReservationSet_content_information_content_partname_content">
                  <p className="ReservationSet_content_information_content_partname_content_txt">
                    1人あたり料金
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_partname_input">
                  <p className="ReservationSet_content_information_content_partname_inputtag">
                    {stData.auth.reservationFee}
                  </p>
                </td>
              </tr>

              <tr className="ReservationSet_content_information_content_name">
                <td className="ReservationSet_content_information_content_name_content">
                  <p className="ReservationSet_content_information_content_name_content_txt">
                    日程
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_name_input">
                  <p>{stData.auth.reservationDate}</p>
                </td>
              </tr>

              <tr className="ReservationSet_content_information_content_phonenum">
                <td className="ReservationSet_content_information_content_phonenum_content">
                  <p className="ReservationSet_content_information_content_phonenum_content_txt">
                    時間
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_phonenum_input">
                  <p className="ReservationSet_content_information_content_phonenum_inputtag">
                    {stData.auth.reservationTime}
                  </p>
                </td>
              </tr>

              <tr className="ReservationSet_content_information_content_address">
                <td className="ReservationSet_content_information_content_address_content">
                  <p className="ReservationSet_content_information_content_address_content_txt">
                    備考
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_address_input">
                  <textarea onChange={textareaHandle}/>
                </td>
              </tr>

              <tr className="ReservationSet_content_information_content_partname">
                <td className="ReservationSet_content_information_content_partname_content">
                  <p className="ReservationSet_content_information_content_partname_content_txt">
                    引継希望日
                  </p>
                  <p className="ReservationSet_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_partname_input">
                  <input className="ReservationSet_content_information_content_partname_inputtag addTag" 
                  type="date"
                  onChange={handleChange}
                  ref={dateInputRef}/>
                </td>
              </tr>

              <tr className="ReservationSet_content_information_content_emailaddress">
                <td className="ReservationSet_content_information_content_emailaddress_content">
                  <p className="ReservationSet_content_information_content_emailaddress_content_txt">
                    引継希望時刻
                  </p>
                  <p className="ReservationSet_content_information_content_emailaddress_content_require">
                    必須
                  </p>
                </td>

                <td className="ReservationSet_content_information_content_emailaddress_input">
                  <select onChange={(e) => selecthandle(e)}>
                    <option value=""></option>
                    <option value="1">5:00頃</option>
                    <option value="2">6:00頃</option>
                    <option value="3">7:00頃</option>
                    <option value="4">8:00頃</option>
                    <option value="5">9:00頃</option>
                    <option value="6">10:00頃</option>
                    <option value="7">11:00頃</option>
                    <option value="8">12:00頃</option>
                    <option value="9">13:00頃</option>
                    <option value="10">14:00頃</option>
                    <option value="11">15:00頃</option>
                    <option value="12">16:00頃</option>
                    <option value="13">17:00頃</option>
                    <option value="14">18:00頃</option>
                    <option value="15">19:00頃</option>
                    <option value="16">20:00頃</option>
                    <option value="17">21:00頃</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="ReservationSet_content_information_personalInfor">
            <p></p>
            <div className="ReservationSet_content_information_personalInfor_text">
              予約者情報
            </div>
          </div>

        <table className="ReservationSet_content_userinfor">
            <tr className="ReservationSet_content_userinfor_firstline">
                <td className="ReservationSet_content_userinfor_firstline_title">
                    <p>会社名・牧場名</p>
                </td>

                <td className="ReservationSet_content_userinfor_firstline_content">
                    <p>株式会社ファームノート</p>
                </td>
            </tr>

            <tr className="ReservationSet_content_userinfor_secondline">
                <td className="ReservationSet_content_userinfor_secondline_title">
                    <p>役職名</p>
                </td>

                <td className="ReservationSet_content_userinfor_secondline_content">
                    <p>牧場長</p>
                </td>
            </tr>

            <tr className="ReservationSet_content_userinfor_thirdline">
                <td className="ReservationSet_content_userinfor_thirdline_title">
                    <p>氏名</p>
                </td>

                <td className="ReservationSet_content_userinfor_thirdline_content">
                    <p>鈴木　大樹</p>
                </td>
            </tr>
        </table>

          <div className="ReservationSet_content_information_personalInfor_btn">
            <Link
              to="/user/rsvStatus"
              onClick={() =>
                dispatch({
                  type: "rsvSet",
                })
              }
            >
              <button className="ReservationSet_content_information_personalInfor_btn_back">
                戻る
              </button>
            </Link>
            <Link
              to="/user/reservationset-conf"
              onClick={() =>
                dispatch({
                    type: "rsvSetconf",
                    time: rsvTime,
                    date: rsvDate,
                    fee: rsvFee,
                    content: rsvContent,
                    message: message,
                    finishtime: finishtime,
                    finishdate: finishdate,
                })
              }
            >
              <button className="ReservationSet_content_information_personalInfor_btn_next">
                内容確認へ進む
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ReservationSet;
