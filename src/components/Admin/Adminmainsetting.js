import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Adminmainsetting = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminmainsetting">
      <div className="Adminmainsetting_title">予約サイト_会員登録/ログイン</div>
      <table className="Adminmainsetting_table1">
        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>予約者からの会員登録</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>予約者からの会員編集</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>予約サイトログイン</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>必須</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>会員登録リンク</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>IDリマインダー</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input type="radio" />
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>パスワードリマインダー</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input type="radio" />
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div className="Adminmainsetting_title">予約サイト_会員登録/ログイン</div>
      <table className="Adminmainsetting_table1">   
        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>お問い合わせ</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>利用規約</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>予約サイト公開</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>非公開</span>
              </div>

              <div>
                <input type="radio" />
                <span>公開</span>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div className="Adminmainsetting_title">予約登録</div>
      <table className="Adminmainsetting_table2">
        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>続けて予約</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <input type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>会員登録と同時に予約</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <input type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>メール認証</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <input type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input type="radio"/>
                <span>利用する</span>
              </div>

              <div>
                <input type="radio"/>
                <span>必須</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>予約リマインダーメール</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <input type="radio"/>
                <span>配信しない</span>
              </div>

              <div>
                <input type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>予約リマインダーメール配信時間</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <select>
                  <option value="1" selected="selected">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div>
                <input type="radio"/>
                <span>時間前</span>
              </div>

              <div>
                <input type="radio"/>
                <span>日前</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>利用終了リマインダーメール</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <input type="radio"/>
                <span>配信しない</span>
              </div>

              <div>
                <input type="radio"/>
                <span>配信する</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="Adminmainsetting_table2_title">
            <p>利用終了リマインダーメール配信時間</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table2_td">
            <div className="Adminmainsetting_table2_content">
              <div>
                <select>
                  <option value="1" selected="selected">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div>
                <input type="radio"/>
                <span>時間前</span>
              </div>

              <div>
                <input type="radio"/>
                <span>日前</span>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div className="Adminmainsetting_title">予約状況（カレンダー）</div>
      <table className="Adminmainsetting_table3">
        <tr>
          <td className="Adminmainsetting_table3_title">
            <p>予約状況初期値表示日</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table3_td">
            <div className="Adminmainsetting_table3_content">
              <span className="Adminmainsetting_table3_content_firstspan">現在日の</span>
              <input className="Adminmainsetting_table3_content_firstinput"/>
              <span className="Adminmainsetting_table3_content_firstspan">日先から表示する</span>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table3_title">
            <p>予約状況表示時間</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table3_td">
            <div className="Adminmainsetting_table3_content">
                <input type="time" className="Adminmainsetting_table3_content_secondinput"/> <span className="Adminmainsetting_table3_content_firstspan">から</span><input type="time" className="Adminmainsetting_table3_content_secondinput"/>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table3_title">
            <p>1ヶ月表示の表示件数</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table3_td">
            <div className="Adminmainsetting_table3_content">
              <input value={31} className="Adminmainsetting_table3_content_thirdinput"/>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table3_title">
            <p>予約状況初期表示時間</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table3_td">
            <div className="Adminmainsetting_table3_content">
              <input className="Adminmainsetting_table3_content_forthinput" type="time"/>
              <span className="Adminmainsetting_table3_content_forthsapn">から表示する</span>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table3_title">
            <p>予約台帳初期表示</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table3_td">
            <div className="Adminmainsetting_table3_content">
              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>時間表示（1日）</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>時間表示（1週間）</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>日にち表示（1日）</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>日にち表示（1週間）</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>1ヶ月表示</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>時間割表示（1日）</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>時間割表示（1週間）</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>一覧表示</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table3_title">
            <p>予約受付締切を過ぎたコマ</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table3_td">
            <div className="Adminmainsetting_table3_content">
              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>表示しない</span>
              </div>

              <div className="Adminmainsetting_table3_content_fifthdiv">
                <input  type="radio"/>
                <span>表示する</span>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div className="Adminmainsetting_title">会員/予約項目</div>
      <table className="Adminmainsetting_table1">
        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>項目の並び順</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input type="radio"/>
                <span>顧客情報の項目が上</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>予約内容の項目が上</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>予約の日時変更</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>許可しない</span>
              </div>

              <div>
                <input type="radio" />
                <span>許可する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>利用規約（予約時）</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input  type="radio"/>
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminmainsetting_table1_title">
            <p>個人情報規約（会員登録時）</p>
            <div>必須</div>
          </td>

          <td className="Adminmainsetting_table1_td">
            <div className="Adminmainsetting_table1_content">
              <div>
                <input  type="radio"/>
                <span>利用しない</span>
              </div>

              <div>
                <input type="radio" />
                <span>利用する</span>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div className="Adminmainsetting_btn"><Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      ><button>編集</button></Link></div>
    </div>
  );
};

export default Adminmainsetting;
