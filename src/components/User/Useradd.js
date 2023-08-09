import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Useradd() {
  return (
    <nav className="Useradd">
      <div className="Useradd_content">
        <div className="Useradd_content_Header">
          <div className="Useradd_content_Header_firststep_circle">
            <p className="Useradd_content_Header_firststep_circle_num">1</p>
            <p>入力</p>
          </div>
          <div className="Useradd_content_Header_firststep_line"></div>

          <div className="Useradd_content_Header_secondstep_line"></div>
          <div className="Useradd_content_Header_secondstep_circle">
            <p className="Useradd_content_Header_secondstep_circle_num">2</p>
            <p>確認</p>
          </div>

          <div className="Useradd_content_Header_secondstep_line"></div>
          <div className="Useradd_content_Header_thirdstep_line"></div>
          <div className="Useradd_content_Header_thirdstep_circle">
            <p className="Useradd_content_Header_thirdstep_circle_num">3</p>
            <p>完了</p>
          </div>
        </div>

        <div className="Useradd_content_information">
          <div className="Useradd_content_information_title">
            <div className="Useradd_content_information_title_symbol"></div>
            <div className="Useradd_content_information_title_text">
              予約者情報
            </div>
          </div>

          <table className="Useradd_content_information_content">
            <tbody>
              <tr className="Useradd_content_information_content_partname">
                <td className="Useradd_content_information_content_partname_content">
                  <p className="Useradd_content_information_content_partname_content_txt">
                    会社名・牧場名
                  </p>
                  <p className="Useradd_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_partname_input">
                  <input className="Useradd_content_information_content_partname_inputtag" />
                </td>
              </tr>

              <tr className="Useradd_content_information_content_partname">
                <td className="Useradd_content_information_content_partname_content">
                  <p className="Useradd_content_information_content_partname_content_txt">
                    役職名
                  </p>
                  <p className="Useradd_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_partname_input">
                  <input className="Useradd_content_information_content_partname_inputtag" />
                </td>
              </tr>

              <tr className="Useradd_content_information_content_name">
                <td className="Useradd_content_information_content_name_content">
                  <p className="Useradd_content_information_content_name_content_txt">
                    氏名
                  </p>
                  <p className="Useradd_content_information_content_name_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_name_input">
                  <p>姓</p>
                  <input className="Useradd_content_information_content_name_inputtag" />
                  <p>名</p>
                  <input className="Useradd_content_information_content_name_inputtag" />
                </td>
              </tr>

              <tr className="Useradd_content_information_content_phonenum">
                <td className="Useradd_content_information_content_phonenum_content">
                  <p className="Useradd_content_information_content_phonenum_content_txt">
                    携帯番号
                  </p>
                  <p className="Useradd_content_information_content_phonenum_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_phonenum_input">
                  <input className="Useradd_content_information_content_phonenum_inputtag" />
                  <p>-</p>
                  <input className="Useradd_content_information_content_phonenum_inputtag" />
                  <p>-</p>
                  <input className="Useradd_content_information_content_phonenum_inputtag" />
                </td>
              </tr>

              <tr className="Useradd_content_information_content_address">
                <td className="Useradd_content_information_content_address_content">
                  <p className="Useradd_content_information_content_address_content_txt">
                    携帯番号
                  </p>
                  <p className="Useradd_content_information_content_address_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_address_input">
                  <div className="Useradd_content_information_content_address_input_box1">
                    <p className="Useradd_content_information_content_address_input_box1_label">
                      郵便番号
                    </p>
                    <div className="Useradd_content_information_content_address_input_box1_addressinput">
                      <input className="Useradd_content_information_content_address_input_box1_addressinput_tag" />
                      <button className="Useradd_content_information_content_address_input_box1_addressinput_btn">
                        住所検索
                      </button>
                    </div>
                  </div>
                  <div className="Useradd_content_information_content_address_input_box2">
                    <p className="Useradd_content_information_content_address_input_box2_label">
                      都道府県
                    </p>
                    <select className="Useradd_content_information_content_address_input_box2_select">
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
                  <div className="Useradd_content_information_content_address_input_box3">
                    <p className="Useradd_content_information_content_address_input_box3_label">
                      市区町村
                    </p>
                    <input className="Useradd_content_information_content_address_input_box3_tag" />
                  </div>
                  <div className="Useradd_content_information_content_address_input_box4">
                    <p className="Useradd_content_information_content_address_input_box4_label">
                      建物名
                    </p>
                    <input className="Useradd_content_information_content_address_input_box4_tag" />
                  </div>
                </td>
              </tr>

              <tr className="Useradd_content_information_content_partname">
                <td className="Useradd_content_information_content_partname_content">
                  <p className="Useradd_content_information_content_partname_content_txt">
                      総飼養頭数  
                  </p>
                  <p className="Useradd_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_partname_input">
                  <input className="Useradd_content_information_content_partname_inputtag" />
                </td>
              </tr>


              <tr className="Useradd_content_information_content_emailaddress">
                <td className="Useradd_content_information_content_emailaddress_content">
                  <p className="Useradd_content_information_content_emailaddress_content_txt">
                  メールアドレス
                  </p>
                </td>

                <td className="Useradd_content_information_content_emailaddress_input">
                  <p className="Useradd_content_information_content_emailaddress_inputtag" >daiki@bp-one.jp</p>
                </td>
              </tr>

              <tr className="Useradd_content_information_content_emailaddress">
                <td className="Useradd_content_information_content_emailaddress_content">
                  <p className="Useradd_content_information_content_emailaddress_content_txt">
                  ログインID
                  </p>
                </td>

                <td className="Useradd_content_information_content_emailaddress_input">
                  <p className="Useradd_content_information_content_emailaddress_inputtag" >d-suzuki36x</p>
                </td>
              </tr>

              <tr className="Useradd_content_information_content_partname">
                <td className="Useradd_content_information_content_partname_content">
                  <p className="Useradd_content_information_content_partname_content_txt">
                  パスワード
                  </p>
                  <p className="Useradd_content_information_content_partname_content_require">
                    必須
                  </p>
                </td>

                <td className="Useradd_content_information_content_partname_input">
                  <input className="Useradd_content_information_content_partname_inputtag" />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="Useradd_content_information_personalInfor">
            <p></p>
            <div className="Useradd_content_information_personalInfor_text">個人情報取扱について</div>
          </div>

          <div className="Useradd_content_information_personalInfor_textarea">
            <div>当社はWebシステム開発、システムおよびサーバのレンタルなど当社の事業展開において取り扱う取引先、従業者など関係者すべての個人情報保護の重要性を認識し、適切に取り扱い、個人の権利を侵害しないことが重要であると考えます。これを確実に実施するため【個人情報保護方針】を定めるとともに、個人情報保護マネジメントシステムを策定し、これを遵守し、個人情報を適切に取り扱い及び管理に努めることにより関係者の信頼を一層確かなものにすることを目指します。
                <br />
                <br />
                1. 会社の事業展開において、取引先、従業者など関係者の個人 情報を取得、利用および提供を行う場合、取得目的、関係者に対する当社の窓口等を通知したうえで、必要な範囲の個人情報を取得、社内規定に照らし、適正に行います。 
                <br />
                2. 関係者よりお預かりさせていただいた個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩、及び目的外利用などの予防に努めます。万が一不正アクセス、紛失、破壊、改ざん、漏洩などが発生した場合は是正に関する適切な処置を速やかに行います。
                <br />
                3. 個人情報 に関する法令及びその他の要求事項を遵守します。
                <br />
                4. 個人情報の保護のために内部監査による定期的な見直しを行い、また代表者による見直し結果を反映させ、適正な管理の維持、継続的な改善に努めます。
                <br />
                5. 個人情報に関する苦情、相談については迅速、適切に対応します。
                <br />
                <br />
                個人情報保護に 関してのお問い合わせは下記受付窓口までお願いいたします。
                <br />
                また、個人情報の開示、訂正、削除要請も同じ窓口で受け付けておりますが、コールバックなどの方法で本人確認をさせて頂きますので、ご了承ください。
                <br />
                <br />
                <br />

                ＜問合せ受付窓口＞
                <br />
                住所　北海道野付郡別海町別海緑町116番地12
                <br />
                TEL 　0153-77-9951
                <br />
                xxxxxxxx@example.com
                <br />
                株式会社ASAHIサポートセンター
                <br />
                管理部：個人情報保護管理責任者（姓名　入力）

                <br />
                <br />
                <br />
                制定：xxxx年xx月xx日
                <br />
                改定：xxxx年xx月xx日
                <br />
                株式会社xxxxxxxxxx
                <br />
                代表取締役社長　田中博行
                </div>
          </div>

          <div className="Useradd_content_information_personalInfor_textbox">
            <input type="checkbox" />
            <p>個人情報規約に同意する</p>
          </div>

          <div className="Useradd_content_information_personalInfor_btn">
            <Link to = "/"><button className="Useradd_content_information_personalInfor_btn_back">
              戻る
            </button>
            </Link>
            <Link to = "/user/add-conf">
                <button className="Useradd_content_information_personalInfor_btn_next">
                内容確認へ進む
                </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Useradd;
