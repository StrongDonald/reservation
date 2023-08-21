import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Adminnotice = () => {
  const dispatch = useDispatch();

  return (
    <div className="Adminnotice">
      <div className="Adminnotice_btnGroup">
        <span>0件</span>
        <Link
          to="/admin/noticeedit"
          onClick={() =>
            dispatch({
              type: "noticeedit",
            })
          }
        >
          <button> + 新規登録</button>
        </Link>
        <button> + お知らせ表示設定</button>
      </div>
    </div>
  );
};

export default Adminnotice;
