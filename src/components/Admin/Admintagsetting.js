import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Admintagsetting = () => {
  const dispatch = useDispatch();

  return (
    <div className="Admintagsetting">
        <table>
            <tr>
                <td className="Admintagsetting_title">
                    <p>head開始タグ直後</p>
                </td>

                <td className="Admintagsetting_content">
                    <div>
                        <textarea />
                    </div>
                </td>
            </tr>

            <tr>
                <td className="Admintagsetting_title">
                    <p>head閉じタグ直前</p>
                </td>

                <td className="Admintagsetting_content">
                    <div>
                        <textarea />
                    </div>
                </td>
            </tr>

            <tr>
                <td className="Admintagsetting_title">
                    <p>body開始タグ直後</p>
                </td>

                <td className="Admintagsetting_content">
                    <div>
                        <textarea />
                    </div>
                </td>
            </tr>

            <tr>
                <td className="Admintagsetting_title">
                    <p>body閉じタグ直前</p>
                </td>

                <td className="Admintagsetting_content">
                    <div>
                        <textarea />
                    </div>
                </td>
            </tr>

            <tr>
                <td className="Admintagsetting_title">
                    <p>予約完了ページ</p>
                </td>

                <td className="Admintagsetting_content">
                    <div>
                        <textarea />
                    </div>
                </td>
            </tr>
        </table>
        
        <div className="Admintagsetting_btn"><button>編集</button></div>
    </div>
  );
};

export default Admintagsetting;
