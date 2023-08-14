import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./index.css";

function RsvDetail() {
  const dispatch = useDispatch();
  const stData = useSelector(state => state);

  return (
    <nav className="RsvDetail">
      <div className="RsvDetail_content">

        <div className="RsvDetail_content_information">
            <table className="RsvDetail_content_information_IDnum">
                <tbody>
                    <tr>
                        <td className="RsvDetail_content_information_IDnum_label">
                            予約ID
                        </td>
                        <td className="RsvDetail_content_information_IDnum_num">
                        46
                        </td>
                    </tr>
                </tbody>
            </table>

          <div className="RsvDetail_content_information_title">
            <div className="RsvDetail_content_information_title_symbol"></div>
            <div className="RsvDetail_content_information_title_text">
            予約情報
            </div>
          </div>

          <table className="RsvDetail_content_information_content">
            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                内容
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                朝と夕方（男性2名）
                </p>
              </td>
            </tr>

            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                1人あたり料金
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                    1日 12000円
                </p>
              </td>
            </tr>

            <tr className="RsvDetail_content_information_content_name">
              <td className="RsvDetail_content_information_content_name_content">
                <p className="RsvDetail_content_information_content_name_content_txt">
                日程
                </p>
              </td>

              <td className="RsvDetail_content_information_content_name_input">
                <p className="RsvDetail_content_information_content_name_inputtag">
                2023/08/23(水)
                </p>
              </td>
            </tr>

            <tr className="RsvDetail_content_information_content_phonenum">
              <td className="RsvDetail_content_information_content_phonenum_content">
                <p className="RsvDetail_content_information_content_phonenum_content_txt">
                時間
                </p>
              </td>

              <td className="RsvDetail_content_information_content_phonenum_input">
                <p className="RsvDetail_content_information_content_phonenum_inputtag">
                05:00 ～ 19:00
                </p>
              </td>
            </tr>


            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                備考
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
               
                </p>
              </td>
            </tr>

            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                引継希望日
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                2023/08/11
                </p>
              </td>
            </tr>

            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                引継希望時刻
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                6:00頃
                </p>
              </td>
            </tr>
          </table>
          
          <div className="RsvDetail_content_information_title margin">
            <div className="RsvDetail_content_information_title_symbol"></div>
            <div className="RsvDetail_content_information_title_text">
            予約料金
            </div>
          </div>

          <table className="RsvDetail_content_information_content">
            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                料金
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                  	24000円
                </p>
              </td>
            </tr>
          </table>

          <div className="RsvDetail_content_information_title margin">
            <div className="RsvDetail_content_information_title_symbol"></div>
            <div className="RsvDetail_content_information_title_text">
            予約者情報
            </div>
          </div>

          <table className="RsvDetail_content_information_content">
            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                    会社名・牧場名
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                株式会社ファームノート
                </p>
              </td>
            </tr>
            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                    役職名
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                牧場長
                </p>
              </td>
            </tr>

            <tr className="RsvDetail_content_information_content_partname">
              <td className="RsvDetail_content_information_content_partname_title">
                <p className="RsvDetail_content_information_content_partname_title_txt">
                氏名
                </p>
              </td>

              <td className="RsvDetail_content_information_content_partname_content">
                <p className="RsvDetail_content_information_content_partname_content_txt">
                鈴木　大樹
                </p>
              </td>
            </tr>
          </table>

          <div className="RsvDetail_content_information_personalInfor_btn">
            <Link
              to="/user/reservationHistory"
              onClick={() =>
                dispatch({
                  type: "reservationhistory",
                })
              }
            >
              <button className="RsvDetail_content_information_personalInfor_btn_back">
              予約履歴に戻る
              </button>
            </Link>
            <Link to="/user/reservationSet"
            onClick={() =>
                dispatch({
                  type: "rsvStatus",
                  content: "朝と夕方（男性2名）",
                  time: "05:00 ～ 19:00",
                  fee: "1日 12000円",
                  date: "2023/08/23(水)",
                })
              }>
              <button className="RsvDetail_content_information_personalInfor_btn_next">
              編集
              </button>
            </Link>

            <Link to="/user/reservation-cancel" 
                onClick={() =>
                    dispatch({
                        type: "rsvCancel",
                    })
                }>
              <button className="RsvDetail_content_information_personalInfor_btn_cancel">
              キャンセル
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default RsvDetail;
