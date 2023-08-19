import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

const Adminrsvcopy = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="adminrsvcopy">
        <div className="adminrsvcopy_header">
          <button>予約枠設定</button>
        </div>

        <div className="adminrsvcopy_Title">
          <div>基本設定</div>
        </div>

        <table className="adminrsvcopy_firstTable">
          <tbody>
            <tr>
              <td className="adminrsvcopy_firstTable_td1">
                <p>予約枠名</p>
                <div>必須</div>
              </td>
              <td className="adminrsvcopy_firstTable_td2">
                <div>
                  <input />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>利用期間設定</div>
        </div>

        <table className="adminrsvcopy_secondTable">
          <tbody>
            <tr>
              <td className="adminrsvcopy_secondTable_td1">
                <p>利用期間</p>
                <div>必須</div>
              </td>
              <td className="adminrsvcopy_secondTable_td2">
                <div className="adminrsvcopy_secondTable_firstdiv">
                  <input type="date" />
                  <span>から</span> <input type="date" /> <span>の期間</span>
                </div>
                <div className="adminrsvcopy_secondTable_seconddiv">
                  開始日のみ必須です
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_secondTable_td3">
                <p>利用曜日</p>
              </td>

              <td className="adminrsvcopy_secondTable_td4">
                <div className="adminrsvcopy_secondTable_td4_1">
                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>月</span>
                  </span>

                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>火</span>
                  </span>

                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>水</span>
                  </span>

                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>木</span>
                  </span>

                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>金</span>
                  </span>

                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>金</span>
                  </span>

                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>日</span>
                  </span>
                  <span className="adminrsvcopy_secondTable_td4_1_span">
                    <input type="checkbox" />
                    <span>祝日</span>
                  </span>
                </div>

                <div className="adminrsvcopy_secondTable_td4_2">
                  チェックがない場合、全曜日に表示されます。
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_secondTable_td5">
                <p>実施時間</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_secondTable_td6">
                <div className="adminrsvcopy_secondTable_td6_1">
                  <input type="time" /> <span>から</span> <input type="time" />
                </div>

                <div className="adminrsvcopy_secondTable_td6_2">
                  基本設定の「予約状況表
                  表示時間」外の実施時間は、予約サイトで非表示となりますが
                  <br />
                  直接URLを指定すれば予約できます。詳しくはマニュアルで確認ください。
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>在庫数設定</div>
        </div>

        <table className="adminrsvcopy_thirdtable">
          <tbody>
            <tr>
              <td className="adminrsvcopy_thirdtable_td1">
                <p>在庫数</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_thirdtable_td2">
                <div>
                  <input />
                </div>
              </td>
            </tr>
            <tr>
              <td className="adminrsvcopy_thirdtable_td3">
                <p>在庫の単位</p>
              </td>
              <td className="adminrsvcopy_thirdtable_td4">
                <div>
                  <input />
                </div>
                <br />
                <p>
                  予約枠の数字の後に付く単位となります。（例）「個」・「部屋」・「席」など
                </p>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_thirdtable_td5">
                <p>在庫数表示設定</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_thirdtable_td6">
                <div className="adminrsvcopy_thirdtable_td6_div">
                  <div>
                    <input type="radio" />
                    <span>数字で表示</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>記号で表示</span>
                  </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <td>記号</td>
                            <td>切り替えタイミング</td>
                            <td>削除</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><select><option value="1">表示なし</option><option value="2">◎</option><option value="3">〇</option><option value="4" selected="selected">▲</option><option value="5">×</option><option value="6">空</option><option value="7">満</option><option value="8">--</option></select></td>
                            <td>在庫数が 0</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td><select><option value="1">表示なし</option><option value="2" selected="selected">◎</option><option value="3">〇</option><option value="4">▲</option><option value="5">×</option><option value="6">空</option><option value="7">満</option><option value="8">--</option></select></td>
                            <td>在庫数が 1 以上</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <div className="adminrsvcopy_thirdtable_td6Btn"><button>記号追加</button></div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>料金設定</div>
        </div>

        <table className="adminrsvcopy_Title_forthtable">
          <tbody>
            <tr>
                <td className="adminrsvcopy_forthtable_td3">
                    <p>料金設定</p>
                    <div>必須</div>
                </td>

                <td className="adminrsvcopy_forthtable_td4">
                    <div className="adminrsvcopy_forthtable_td4_div">
                        <div>
                            <input type="radio" />
                            <span>一律</span>
                        </div>
                        <div>
                            <input type="radio" />
                            <span>プラン</span>
                        </div>
                    </div>
                </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_forthtable_td1">
                <p>料金</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_forthtable_td2">
                <div>
                  <input />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>予約受付設定</div>
        </div>

        <table className="adminrsvcopy_Title_fifthtable">
          <tbody>
            <tr>
              <td className="adminrsvcopy_fifthtable_td1">
                <p>予約時間設定</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_fifthtable_td2">
                <div className="adminrsvcopy_fifthtable_td2_1">
                  <input /><span>日単位の予約</span>
                </div>

                <div className="adminrsvcopy_fifthtable_td2_2">
                  <input /><span>日～</span><input /><span>日が選択可能</span>
                </div>

                <div className="adminrsvcopy_fifthtable_td2_3">
                    ※管理画面からの予約は1日単位で予約ができます。
                </div>

              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_fifthtable_td3">
                <p>受付可能な予約数</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_fifthtable_td4">
                <div>
                  <input />
                  <span>から</span>
                  <input />
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_fifthtable_td5">
                <p>予約登録時のステータス</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_fifthtable_td6">
                <div className="adminrsvcopy_fifthtable_td6_div">
                  <div>
                    <input type="radio" />
                    <span>確定</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>仮申込</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>仮予約</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
                <td className="adminrsvcopy_fifthtable_td7">
                    <p>予約内容の表示パターン</p>
                    <div>必須</div>
                </td>

                <td className="adminrsvcopy_fifthtable_td8">
                    <div><select><option>デフォルト</option></select></div>
                </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>予約期限設定</div>
        </div>

        <table className="adminrsvcopy_Title_sixtable">
          <tbody>
            <tr>
              <td className="adminrsvcopy_sixtable_td1">
                <p>予約受付開始タイミング</p>
              </td>

              <td className="adminrsvcopy_sixtable_td2">
                <div>
                  <input />
                  <span>日前の</span>
                  <select>
                    <option value="">----</option>
                    <option value="00:00">0時</option>
                    <option value="01:00">1時</option>
                    <option value="02:00">2時</option>
                    <option value="03:00">3時</option>
                    <option value="04:00">4時</option>
                    <option value="05:00">5時</option>
                    <option value="06:00">6時</option>
                    <option value="07:00">7時</option>
                    <option value="08:00">8時</option>
                    <option value="09:00">9時</option>
                    <option value="10:00">10時</option>
                    <option value="11:00">11時</option>
                    <option value="12:00">12時</option>
                    <option value="13:00">13時</option>
                    <option value="14:00">14時</option>
                    <option value="15:00">15時</option>
                    <option value="16:00">16時</option>
                    <option value="17:00">17時</option>
                    <option value="18:00">18時</option>
                    <option value="19:00">19時</option>
                    <option value="20:00">20時</option>
                    <option value="21:00">21時</option>
                    <option value="22:00">22時</option>
                    <option value="23:00">23時</option>
                  </select>
                  <span>から予約可能</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_sixtable_td3">
                <p>予約受付締切タイミング</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_sixtable_td4">
                <div>
                  <input type="radio" />
                  <span>開始時間</span>
                  <input type="radio" />
                  <span>終了時間 の </span>{" "}
                  <input className="adminrsvcopy_sixtable_td4_input" />
                  <select className="adminrsvcopy_sixtable_td4_select">
                    <option>時間前</option>
                    <option>日前</option>
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_sixtable_td5">
                <p>予約受付締切タイミング</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_sixtable_td4">
                <div>
                  <input type="radio" />
                  <span>開始時間</span>
                  <input type="radio" />
                  <span>終了時間 の </span>
                  <input className="adminrsvcopy_sixtable_td4_input" />
                  <select className="adminrsvcopy_sixtable_td4_select">
                    <option>時間前</option>
                    <option>日前</option>
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_sixtable_td7">
                <p>予約キャンセル締切タイミング</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_sixtable_td4">
                <div>
                  <input type="radio" />
                  <span>開始時間</span>
                  <input type="radio" />
                  <span>終了時間 の </span>
                  <input className="adminrsvcopy_sixtable_td4_input" />
                  <select className="adminrsvcopy_sixtable_td4_select">
                    <option>時間前</option>
                    <option>日前</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>予約回数制限</div>
        </div>

        <table className="adminrsvcopy_Title_seventable">
          <tbody>
            <tr>
              <td className="adminrsvcopy_seventable_td1">
                <p>予約回数の上限（1月あたり）</p>
              </td>
              <td className="adminrsvcopy_seventable_td2">
                <div>
                  <input />
                  <span>回まで</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_seventable_td1">
                <p>予約回数の上限（1日あたり）</p>
              </td>
              <td className="adminrsvcopy_seventable_td2">
                <div>
                  <input />
                  <span>回まで</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_seventable_td5">
                <p>同日時の重複予約防止</p>
                <div>必須</div>
              </td>

              <td className="adminrsvcopy_seventable_td6">
                <div className="adminrsvcopy_seventable_td6_div">
                  <div>
                    <input type="radio" />
                    <span>対象にする</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>対象にする</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="adminrsvcopy_Title">
          <div>表示設定</div>
        </div>

        <table className="adminrsvcopy_Title_eighttable">
          <tbody>

            <tr>
                <td className="adminrsvcopy_eighttable_td7">
                    <p>「空きあり」以外（予約サイト）</p>
                </td>

                <td className="adminrsvcopy_eighttable_td8">
                    <div className="adminrsvcopy_eighttable_td8_1">
                        <div><input type="checkbox"/><span>受付期間外</span></div>
                        <div><input type="checkbox"/><span>空きなし</span></div>
                        <div><input type="checkbox"/><span>予約済み</span></div>
                        <div><input type="checkbox"/><span>予約中</span></div>
                    </div>

                    <div className="adminrsvcopy_eighttable_td8_2">
                    チェックを入れた予約状況で、「予約枠のカラー設定」で指定した色が適用されます。
                    </div>
                </td>
            </tr>

            <tr>
                <td className="adminrsvcopy_eighttable_td9">
                    <p>カレンダー表示</p>
                    <div>必須</div>
                </td>

                <td className="adminrsvcopy_eighttable_td10">
                    <div className="adminrsvcopy_eighttable_td10_div">
                        <div>
                            <input type="checkbox"/><span>時間表示（1日）</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>時間表示（1週間）</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>日にち表示（1日）</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>日にち表示（1週間）</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>1ヶ月表示</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>時間割表示（1日）</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>時間割表示（1週間）</span>
                        </div>

                        <div>
                            <input type="checkbox"/><span>一覧表示</span>
                        </div>
                    </div>
                </td>
            </tr>
                
            <tr>
              <td className="adminrsvcopy_eighttable_td1">
                <p>公開期間</p>
              </td>

              <td className="adminrsvcopy_eighttable_td2">
                <div>
                  <input type="date"/>
                  <span>から</span>
                  <input type="date"/>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_eighttable_td3">
                <div className="adminrsvcopy_eighttable_td3_div">
                  <p>公開設定</p>
                  <div>必須</div>
                </div>
              </td>

              <td className="adminrsvcopy_eighttable_td4">
                <div className="adminrsvcopy_eighttable_td4_div">
                  <div>
                    <input type="radio" />
                    <span>公開</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>非公開</span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="adminrsvcopy_eighttable_td5">
                <p>表示順</p>
              </td>

              <td className="adminrsvcopy_eighttable_td6">
                <div>
                  <input />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="AdminrsvAdd_btndiv">
        <Link to={"/admin/reservationframeset"}>
          <button
            className="AdminrsvAdd_btndiv_back"
            onClick={() =>
              dispatch({
                type: "rsvframeset",
              })
            }
          >
            戻る
          </button>
        </Link>
        <Link to={"/admin/reservationframeset"}>
          <button
            className="AdminrsvAdd_btndiv_next"
            onClick={() =>
              dispatch({
                type: "rsvframeset",
              })
            }
          >
            登録
          </button>
        </Link>
      </div>
    </>
  );
};

export default Adminrsvcopy;
