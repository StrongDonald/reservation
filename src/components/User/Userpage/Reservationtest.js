import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./index.css";

function Reservationtest() {
  const dispatch = useDispatch();
  const stData = useSelector(state => state);

  return (
    <nav className="Reservationtest">
      <div className="Reservationtest_content">
        <div className="Reservationtest_content_Header">
          <div className="Reservationtest_content_Header_firststep_circle">
            <p className="Reservationtest_content_Header_firststep_circle_num">1</p>
            <p>入力</p>
          </div>
          <div className="Reservationtest_content_Header_firststep_line"></div>

          <div className="Reservationtest_content_Header_secondstep_line"></div>
          <div className="Reservationtest_content_Header_secondstep_circle">
            <p className="Reservationtest_content_Header_secondstep_circle_num">2</p>
            <p>確認</p>
          </div>

          <div className="Reservationtest_content_Header_secondstep_line"></div>
          <div className="Reservationtest_content_Header_thirdstep_line"></div>
          <div className="Reservationtest_content_Header_thirdstep_circle">
            <p className="Reservationtest_content_Header_thirdstep_circle_num">3</p>
            <p>完了</p>
          </div>
        </div>

        <div className="Reservationtest_content_information">
          <div className="Reservationtest_content_information_title">
            <div className="Reservationtest_content_information_title_symbol"></div>
            <div className="Reservationtest_content_information_title_text">
            予約情報
            </div>
          </div>

          <table className="Reservationtest_content_information_content">
            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                内容
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                  {stData.auth.reservationContent}
                </p>
              </td>
            </tr>

            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                1人あたり料金
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                    {stData.auth.reservationFee}
                </p>
              </td>
            </tr>

            <tr className="Reservationtest_content_information_content_name">
              <td className="Reservationtest_content_information_content_name_content">
                <p className="Reservationtest_content_information_content_name_content_txt">
                日程
                </p>
              </td>

              <td className="Reservationtest_content_information_content_name_input">
                <p className="Reservationtest_content_information_content_name_inputtag">
                  {stData.auth.reservationDate}
                </p>
              </td>
            </tr>

            <tr className="Reservationtest_content_information_content_phonenum">
              <td className="Reservationtest_content_information_content_phonenum_content">
                <p className="Reservationtest_content_information_content_phonenum_content_txt">
                時間
                </p>
              </td>

              <td className="Reservationtest_content_information_content_phonenum_input">
                <p className="Reservationtest_content_information_content_phonenum_inputtag">
                  {stData.auth.reservationTime}
                </p>
              </td>
            </tr>


            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                備考
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                  {stData.auth.message}
                </p>
              </td>
            </tr>

            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                引継希望日
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                 {stData.auth.finishdate}
                </p>
              </td>
            </tr>

            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                引継希望時刻
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                  {stData.auth.finishtime}
                </p>
              </td>
            </tr>
          </table>
          
          <div className="Reservationtest_content_information_title margin">
            <div className="Reservationtest_content_information_title_symbol"></div>
            <div className="Reservationtest_content_information_title_text">
            予約料金
            </div>
          </div>

          <table className="Reservationtest_content_information_content">
            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                料金
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                  {stData.auth.reservationFee.split(" ")[1]}
                </p>
              </td>
            </tr>
          </table>

          <div className="Reservationtest_content_information_title margin">
            <div className="Reservationtest_content_information_title_symbol"></div>
            <div className="Reservationtest_content_information_title_text">
            予約者情報
            </div>
          </div>

          <table className="Reservationtest_content_information_content">
            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                    会社名・牧場名
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                株式会社ファームノート
                </p>
              </td>
            </tr>
            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                    役職名
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                牧場長
                </p>
              </td>
            </tr>

            <tr className="Reservationtest_content_information_content_partname">
              <td className="Reservationtest_content_information_content_partname_title">
                <p className="Reservationtest_content_information_content_partname_title_txt">
                氏名
                </p>
              </td>

              <td className="Reservationtest_content_information_content_partname_content">
                <p className="Reservationtest_content_information_content_partname_content_txt">
                鈴木　大樹
                </p>
              </td>
            </tr>
          </table>

          <div className="Reservationtest_content_information_personalInfor_btn">
            <Link
              to="/user/reservationSet"
              onClick={() =>
                dispatch({
                  type: "rsvStatus",
                  content: stData.auth.reservationContent,
                  fee: stData.auth.reservationFee,
                  time: stData.auth.reservationTime,
                  date: stData.auth.reservationDate,
                })
              }
            >
              <button className="Reservationtest_content_information_personalInfor_btn_back">
                戻る
              </button>
            </Link>
            <Link to="/user/reservation-finish">
              <button className="Reservationtest_content_information_personalInfor_btn_next">
                会員情報を登録する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Reservationtest;
