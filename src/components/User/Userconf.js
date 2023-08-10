import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Userconf() {
  const dispatch = useDispatch();

  return (
    <nav className="Userconf">
      <div className="Userconf_content">
        <div className="Userconf_content_Header">
          <div className="Userconf_content_Header_firststep_circle">
            <p className="Userconf_content_Header_firststep_circle_num">1</p>
            <p>入力</p>
          </div>
          <div className="Userconf_content_Header_firststep_line"></div>

          <div className="Userconf_content_Header_secondstep_line"></div>
          <div className="Userconf_content_Header_secondstep_circle">
            <p className="Userconf_content_Header_secondstep_circle_num">2</p>
            <p>確認</p>
          </div>

          <div className="Userconf_content_Header_secondstep_line"></div>
          <div className="Userconf_content_Header_thirdstep_line"></div>
          <div className="Userconf_content_Header_thirdstep_circle">
            <p className="Userconf_content_Header_thirdstep_circle_num">3</p>
            <p>完了</p>
          </div>
        </div>

        <div className="Userconf_content_information">
          <div className="Userconf_content_information_title">
            <div className="Userconf_content_information_title_symbol"></div>
            <div className="Userconf_content_information_title_text">
              予約者情報
            </div>
          </div>

          <table className="Userconf_content_information_content">
            <tr className="Userconf_content_information_content_partname">
              <td className="Userconf_content_information_content_partname_title">
                <p className="Userconf_content_information_content_partname_title_txt">
                  会社名・牧場名
                </p>
              </td>

              <td className="Userconf_content_information_content_partname_content">
                <p className="Userconf_content_information_content_partname_content_txt">
                  BP牧塌
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_partname">
              <td className="Userconf_content_information_content_partname_title">
                <p className="Userconf_content_information_content_partname_title_txt">
                  役職名
                </p>
              </td>

              <td className="Userconf_content_information_content_partname_content">
                <p className="Userconf_content_information_content_partname_content_txt">
                  代表取婦役
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_name">
              <td className="Userconf_content_information_content_name_content">
                <p className="Userconf_content_information_content_name_content_txt">
                  氏名
                </p>
              </td>

              <td className="Userconf_content_information_content_name_input">
                <p className="Userconf_content_information_content_name_inputtag">
                  纬术 大梅
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_phonenum">
              <td className="Userconf_content_information_content_phonenum_content">
                <p className="Userconf_content_information_content_phonenum_content_txt">
                  携帯番号
                </p>
              </td>

              <td className="Userconf_content_information_content_phonenum_input">
                <p className="Userconf_content_information_content_phonenum_inputtag">
                  000-0000-0000
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_address">
              <td className="Userconf_content_information_content_address_content">
                <p>住所</p>
              </td>

              <td className="Userconf_content_information_content_address_input">
                <div className="Userconf_content_information_content_address_input_box1">
                  <p className="Userconf-p1">郵便番号 6751236</p>
                  <p className="Userconf-p2">都道府県 兵庫県</p>
                  <p className="Userconf-p3">市区町村 加古川市</p>
                  <p className="Userconf-p4">町域番地 平荘町一本松</p>
                  <p className="Userconf-p5">建物名</p>
                </div>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_partname">
              <td className="Userconf_content_information_content_partname_title">
                <p className="Userconf_content_information_content_partname_title_txt">
                  総飼養頭数
                </p>
              </td>

              <td className="Userconf_content_information_content_partname_content">
                <p className="Userconf_content_information_content_partname_content_txt">
                  150
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_partname">
              <td className="Userconf_content_information_content_partname_title">
                <p className="Userconf_content_information_content_partname_title_txt">
                  メールアドレス
                </p>
              </td>

              <td className="Userconf_content_information_content_partname_content">
                <p className="Userconf_content_information_content_partname_content_txt">
                  daiki@bp-one.jp
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_partname">
              <td className="Userconf_content_information_content_partname_title">
                <p className="Userconf_content_information_content_partname_title_txt">
                  ログインID
                </p>
              </td>

              <td className="Userconf_content_information_content_partname_content">
                <p className="Userconf_content_information_content_partname_content_txt">
                  d-suzuki36x
                </p>
              </td>
            </tr>

            <tr className="Userconf_content_information_content_partname">
              <td className="Userconf_content_information_content_partname_title">
                <p className="Userconf_content_information_content_partname_title_txt">
                  パスワード
                </p>
              </td>

              <td className="Userconf_content_information_content_partname_content">
                <p className="Userconf_content_information_content_partname_content_txt">
                  ********
                </p>
              </td>
            </tr>
          </table>

          <div className="Userconf_content_information_personalInfor_btn">
            <Link
              to="/user/add"
              onClick={() =>
                dispatch({
                  type: "useraddFinish",
                })
              }
            >
              <button className="Userconf_content_information_personalInfor_btn_back">
                戻る
              </button>
            </Link>
            <Link to="/user/add-finish">
              <button className="Userconf_content_information_personalInfor_btn_next">
                会員情報を登録する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Userconf;
