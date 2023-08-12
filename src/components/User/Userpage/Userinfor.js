import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Userinfor() {
  const dispatch = useDispatch();

  return (
    <nav className="Userinfor">
      <div className="Userinfor_content">
        <div className="Userinfor_content_information">
          <div className="Userinfor_content_information_title">
            <div className="Userinfor_content_information_title_symbol"></div>
            <div className="Userinfor_content_information_title_text">
              予約者情報
            </div>
          </div>

          <table className="Userinfor_content_information_content">
            <tr className="Userinfor_content_information_content_partname">
              <td className="Userinfor_content_information_content_partname_title">
                <p className="Userinfor_content_information_content_partname_title_txt">
                  会社名・牧場名
                </p>
              </td>

              <td className="Userinfor_content_information_content_partname_content">
                <p className="Userinfor_content_information_content_partname_content_txt">
                  BP牧塌
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_partname">
              <td className="Userinfor_content_information_content_partname_title">
                <p className="Userinfor_content_information_content_partname_title_txt">
                  役職名
                </p>
              </td>

              <td className="Userinfor_content_information_content_partname_content">
                <p className="Userinfor_content_information_content_partname_content_txt">
                  代表取婦役
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_name">
              <td className="Userinfor_content_information_content_name_content">
                <p className="Userinfor_content_information_content_name_content_txt">
                  氏名
                </p>
              </td>

              <td className="Userinfor_content_information_content_name_input">
                <p className="Userinfor_content_information_content_name_inputtag">
                  纬术 大梅
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_phonenum">
              <td className="Userinfor_content_information_content_phonenum_content">
                <p className="Userinfor_content_information_content_phonenum_content_txt">
                  携帯番号
                </p>
              </td>

              <td className="Userinfor_content_information_content_phonenum_input">
                <p className="Userinfor_content_information_content_phonenum_inputtag">
                  000-0000-0000
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_address">
              <td className="Userinfor_content_information_content_address_content">
                <p>住所</p>
              </td>

              <td className="Userinfor_content_information_content_address_input">
                <div className="Userinfor_content_information_content_address_input_box1">
                  <p className="Userinfor-p1">郵便番号 6751236</p>
                  <p className="Userinfor-p2">都道府県 兵庫県</p>
                  <p className="Userinfor-p3">市区町村 加古川市</p>
                  <p className="Userinfor-p4">町域番地 平荘町一本松</p>
                  <p className="Userinfor-p5">建物名</p>
                </div>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_partname">
              <td className="Userinfor_content_information_content_partname_title">
                <p className="Userinfor_content_information_content_partname_title_txt">
                  総飼養頭数
                </p>
              </td>

              <td className="Userinfor_content_information_content_partname_content">
                <p className="Userinfor_content_information_content_partname_content_txt">
                  150
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_partname">
              <td className="Userinfor_content_information_content_partname_title">
                <p className="Userinfor_content_information_content_partname_title_txt">
                  メールアドレス
                </p>
              </td>

              <td className="Userinfor_content_information_content_partname_content">
                <p className="Userinfor_content_information_content_partname_content_txt">
                  daiki@bp-one.jp
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_partname">
              <td className="Userinfor_content_information_content_partname_title">
                <p className="Userinfor_content_information_content_partname_title_txt">
                  ログインID
                </p>
              </td>

              <td className="Userinfor_content_information_content_partname_content">
                <p className="Userinfor_content_information_content_partname_content_txt">
                  d-suzuki36x
                </p>
              </td>
            </tr>

            <tr className="Userinfor_content_information_content_partname">
              <td className="Userinfor_content_information_content_partname_title">
                <p className="Userinfor_content_information_content_partname_title_txt">
                  パスワード
                </p>
              </td>

              <td className="Userinfor_content_information_content_partname_content">
                <p className="Userinfor_content_information_content_partname_content_txt">
                  ********
                </p>
                <div className="Userinfor_content_information_content_partname_content_btn">
                <Link to="/user/newpass" 
                  onClick={() =>
                    dispatch({
                      type: "login-passChange",
                    })
                  }>
                  <button >パスワードを変更</button>
                </Link>
                </div>
              </td>
            </tr>
          </table>

          <div className="Userinfor_content_information_personalInfor_btn">
            <Link to="/user/add" 
              onClick={() =>
                dispatch({
                  type: "login-register",
                })
              }>
              <button className="Userinfor_content_information_personalInfor_btn_next">
                編集
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Userinfor;
