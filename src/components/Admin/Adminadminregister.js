import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css";

function Adminadminregister() {
  const dispatch = useDispatch();

  return (
    <div className="Adminadminregister_content">
      <table className="Adminadminregister_content_information_content">
        <tbody>
          <tr className="Adminadminregister_content_information_content_partname">
            <td className="Adminadminregister_content_information_content_partname_content">
              <p className="Adminadminregister_content_information_content_partname_content_txt">
                会社名・牧場名
              </p>
              <p className="Adminadminregister_content_information_content_partname_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_partname_input">
              <input className="Adminadminregister_content_information_content_partname_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_partname">
            <td className="Adminadminregister_content_information_content_partname_content">
              <p className="Adminadminregister_content_information_content_partname_content_txt">
                役職名
              </p>
              <p className="Adminadminregister_content_information_content_partname_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_partname_input">
              <input className="Adminadminregister_content_information_content_partname_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_name">
            <td className="Adminadminregister_content_information_content_name_content">
              <p className="Adminadminregister_content_information_content_name_content_txt">
                氏名
              </p>
              <p className="Adminadminregister_content_information_content_name_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_name_input">
              <p>姓</p>
              <input className="Adminadminregister_content_information_content_name_inputtag" />
              <p>名</p>
              <input className="Adminadminregister_content_information_content_name_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_phonenum">
            <td className="Adminadminregister_content_information_content_phonenum_content">
              <p className="Adminadminregister_content_information_content_phonenum_content_txt">
                携帯番号
              </p>
              <p className="Adminadminregister_content_information_content_phonenum_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_phonenum_input">
              <input className="Adminadminregister_content_information_content_phonenum_inputtag" />
              <p>-</p>
              <input className="Adminadminregister_content_information_content_phonenum_inputtag" />
              <p>-</p>
              <input className="Adminadminregister_content_information_content_phonenum_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_address">
            <td className="Adminadminregister_content_information_content_address_content">
              <p className="Adminadminregister_content_information_content_address_content_txt">
                住所
              </p>
              <p className="Adminadminregister_content_information_content_address_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_address_input">
              <div className="Adminadminregister_content_information_content_address_input_box1">
                <p className="Adminadminregister_content_information_content_address_input_box1_label">
                  郵便番号
                </p>
                <div className="Adminadminregister_content_information_content_address_input_box1_addressinput">
                  <input className="Adminadminregister_content_information_content_address_input_box1_addressinput_tag" />
                  <button className="Adminadminregister_content_information_content_address_input_box1_addressinput_btn">
                    住所検索
                  </button>
                </div>
              </div>
              <div className="Adminadminregister_content_information_content_address_input_box2">
                <p className="Adminadminregister_content_information_content_address_input_box2_label">
                  都道府県
                </p>
                <select className="Adminadminregister_content_information_content_address_input_box2_select">
                  <option value=""></option>
                  <option value="1">北海道</option>
                  <option value="2">青森県</option>
                  <option value="3">岩手県</option>
                  <option value="4">宮城県</option>
                  <option value="5">秋田県</option>
                  <option value="6">山形県</option>
                  <option value="7">福島県</option>
                  <option value="8">茨城県</option>
                  <option value="9">栃木県</option>
                  <option value="10">群馬県</option>
                  <option value="11">埼玉県</option>
                  <option value="12">千葉県</option>
                  <option value="13">東京都</option>
                  <option value="14">神奈川県</option>
                  <option value="15">新潟県</option>
                  <option value="16">富山県</option>
                  <option value="17">石川県</option>
                  <option value="18">福井県</option>
                  <option value="19">山梨県</option>
                  <option value="20">長野県</option>
                  <option value="21">岐阜県</option>
                  <option value="22">静岡県</option>
                  <option value="23">愛知県</option>
                  <option value="24">三重県</option>
                  <option value="25">滋賀県</option>
                  <option value="26">京都府</option>
                  <option value="27">大阪府</option>
                  <option value="28">兵庫県</option>
                  <option value="29">奈良県</option>
                  <option value="30">和歌山県</option>
                  <option value="31">鳥取県</option>
                  <option value="32">島根県</option>
                  <option value="33">岡山県</option>
                  <option value="34">広島県</option>
                  <option value="35">山口県</option>
                  <option value="36">徳島県</option>
                  <option value="37">香川県</option>
                  <option value="38">愛媛県</option>
                  <option value="39">高知県</option>
                  <option value="40">福岡県</option>
                  <option value="41">佐賀県</option>
                  <option value="42">長崎県</option>
                  <option value="43">熊本県</option>
                  <option value="44">大分県</option>
                  <option value="45">宮崎県</option>
                  <option value="46">鹿児島県</option>
                  <option value="47">沖縄県</option>
                </select>
              </div>
              <div className="Adminadminregister_content_information_content_address_input_box3">
                <p className="Adminadminregister_content_information_content_address_input_box3_label">
                  市区町村
                </p>
                <input className="Adminadminregister_content_information_content_address_input_box3_tag" />
              </div>

              <div className="Adminadminregister_content_information_content_address_input_box3">
                <p className="Adminadminregister_content_information_content_address_input_box3_label">
                  町域番地
                </p>
                <input className="Adminadminregister_content_information_content_address_input_box3_tag" />
              </div>
              <div className="Adminadminregister_content_information_content_address_input_box4">
                <p className="Adminadminregister_content_information_content_address_input_box4_label">
                  建物名
                </p>
                <input className="Adminadminregister_content_information_content_address_input_box4_tag" />
              </div>
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_partname">
            <td className="Adminadminregister_content_information_content_partname_content">
              <p className="Adminadminregister_content_information_content_partname_content_txt">
                総飼養頭数
              </p>
              <p className="Adminadminregister_content_information_content_partname_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_partname_input">
              <input className="Adminadminregister_content_information_content_partname_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_emailaddress">
            <td className="Adminadminregister_content_information_content_emailaddress_content">
              <p className="Adminadminregister_content_information_content_emailaddress_content_txt">
                メールアドレス
              </p>
              <p className="Adminadminregister_content_information_content_partname_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_partname_input">
              <input className="Adminadminregister_content_information_content_partname_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_emailaddress">
            <td className="Adminadminregister_content_information_content_emailaddress_content">
              <p className="Adminadminregister_content_information_content_emailaddress_content_txt">
                ログインID
              </p>
              <p className="Adminadminregister_content_information_content_partname_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_partname_input">
              <input className="Adminadminregister_content_information_content_partname_inputtag" />
            </td>
          </tr>

          <tr className="Adminadminregister_content_information_content_partname">
            <td className="Adminadminregister_content_information_content_partname_content">
              <p className="Adminadminregister_content_information_content_partname_content_txt">
                パスワード
              </p>
              <p className="Adminadminregister_content_information_content_partname_content_require">
                必須
              </p>
            </td>

            <td className="Adminadminregister_content_information_content_partname_input">
              <input className="Adminadminregister_content_information_content_partname_inputtag" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="Adminadminregister_content_btngroup">
        <Link
          to="/admin/login"
          onClick={() =>
            dispatch({
              type: "adminlogin",
            })
          }
        >
          <button className="Adminadminregister_content_btngroup_back">
            戻る
          </button>
        </Link>
        <Link
          to="/admin/login"
          onClick={() =>
            dispatch({
              type: "adminlogin",
            })
          }
        >
          <button className="Adminadminregister_content_btngroup_nxt">
            確認
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Adminadminregister;
