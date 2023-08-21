import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";

const Adminautomailsendedit = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminautomailsendedit">
      <table>
        <tr>
          <td className="Adminautomailsendedit_normal">
            <p>メール種別</p>
            <div>必須</div>
          </td>

          <td>
            <div className="Adminautomailsendedit_select">
              <select>
                <option value="1">会員登録</option>
                <option value="2">会員変更</option>
                <option value="3">退会申請</option>
                <option value="4">ログインIDリマインダー</option>
                <option value="5">パスワードリマインダー</option>
                <option value="6">予約登録</option>
                <option value="7">予約変更</option>
                <option value="8">予約キャンセル</option>
                <option value="9">キャンセル待ち通知</option>
                <option value="10">予約リマインダー</option>
                <option value="16">利用終了リマインダー</option>
                <option value="11">メール認証：会員登録</option>
                <option value="12">メール認証：予約登録</option>
                <option value="13">予約ステータス変更</option>
                <option value="14">ゲスト予約確認用認証コード</option>
                <option value="15">キャンセル待ち通知解除</option>
              </select>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminautomailsendedit_normal">
            <p>送信対象</p>
            <div>必須</div>
          </td>

          <td>
            <div className="Adminautomailsendedit_select">
              <select>
                <option value="-1">全て</option>
                <option value="1">ゲスト</option>
                <option value="2">ログイン</option>
              </select>
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminautomailsendedit_normal">
            <p>配信者名</p>
            <div>必須</div>
          </td>

          <td>
            <div className="Adminautomailsendedit_input">
              <input />
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminautomailsendedit_normal">
            <p>FROMアドレス</p>
            <div>必須</div>
          </td>

          <td>
            <div className="Adminautomailsendedit_input">
              <input placeholder="auto-reply@revn5.demo.iqnet.co.jp" />
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminautomailsendedit_normal">
            <p>件名</p>
            <div>必須</div>
          </td>

          <td>
            <div className="Adminautomailsendedit_input">
              <input />
            </div>
          </td>
        </tr>

        <tr>
          <td className="Adminautomailsendedit__">
            <p>挨拶文</p>
          </td>
          <td className="Adminautomailsendedit_textarea">
            <div>
              <textarea />
            </div>
          </td>
        </tr>
        <tr>
          <td className="Adminautomailsendedit__">
            <p>本文</p>
            <div>必須</div>
          </td>
          <td className="Adminautomailsendedit_textarea">
            <div>
              <textarea />
            </div>
          </td>
        </tr>
        <tr>
          <td className="Adminautomailsendedit__">
            <p>挨拶文</p>
          </td>
          <td className="Adminautomailsendedit_textarea">
            <div>
              <textarea />
            </div>
          </td>
        </tr>
        <tr>
          <td className="Adminautomailsendedit_normal">
            <p>テスト</p>
          </td>
          <td className="Adminautomailsendedit_end">
            <div>
              <input />
              <button>左のメールアドレス宛にテストメール送信</button>
            </div>
          </td>
        </tr>
      </table>

      <div className="Adminautomailsendedit_btngroup">
        <Link
          to="/admin/automailsend"
          onClick={() =>
            dispatch({
              type: "automailsend",
            })
          }
        >
          <button className="Adminautomailsendedit_back">戻る</button>
        </Link>
        <Link
          to="/admin/automailsend"
          onClick={() =>
            dispatch({
              type: "automailsend",
            })
          }
        >
          <button className="Adminautomailsendedit_nxt">登録</button>
        </Link>
      </div>
    </div>
  );
};

export default Adminautomailsendedit;
