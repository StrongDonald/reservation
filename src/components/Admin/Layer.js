import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

const Layer = () => {
  const dispatch = useDispatch();
  const stData = useSelector((state) => state);

  const rsvlist = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>運用メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 予約台帳</div>
    </div>
  );

  const rsvset = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 予約枠設定</div>
    </div>
  );

  const rsvsetadd = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvset_title">
        {" "}
        <Link
          to="/admin/reservationframeset"
          onClick={() =>
            dispatch({
              type: "rsvframeset",
            })
          }
        >
          {" "}
          > 予約枠設定
        </Link>
        <span> > 新規登録</span>
      </div>
    </div>
  );

  const restset = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 休業設定</div>
    </div>
  );

  const restsetpage = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvset_title">
        {" "}
        <Link
          to="/admin/restset"
          onClick={() =>
            dispatch({
              type: "restset",
            })
          }
        >
          {" "}
          > 休業設定
        </Link>
        <span> > 休業設定 編集</span>
      </div>
    </div>
  );

  const rsvitemset = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 予約内容の項目設定</div>
    </div>
  );

  const customerset = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 顧客情報の項目設定</div>
    </div>
  );

  const automailsend = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 自動返信メール設定</div>
    </div>
  );

  const automailsendedit = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvset_title">
        {" "}
        <Link
          to="/admin/automailsend"
          onClick={() =>
            dispatch({
              type: "automailsend",
            })
          }
        >
          {" "}
          > 自動返信メール設定
        </Link>
        <span> > 新規登録</span>
      </div>
    </div>
  );

  const mainsetting = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 基本設定</div>
    </div>
  );
  const tagsetting = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 計測タグ設定</div>
    </div>
  );

  const detailset = (
    <div className="adminLayer_rsvlist">
      <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      >
        <div className="adminLayer_rsvlist_toHome">
          <Box
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>各種設定メニューTOP</p>
        </div>
      </Link>

      <div className="adminLayer_rsvlist_title"> > 利用規約・個人情報取り扱い・特商法 設定</div>
    </div>
  );

  return (
    <div className="adminLayer">
      {stData.adminauth.Title === 1 ? rsvlist : ""}
      {stData.adminauth.Title === 2 ? rsvset : ""}
      {stData.adminauth.Title === 3 ? rsvsetadd : ""}
      {stData.adminauth.Title === 4 ? restset : ""}
      {stData.adminauth.Title === 5 ? restsetpage : ""}
      {stData.adminauth.Title === 6 ? rsvitemset : ""}
      {stData.adminauth.Title === 7 ? customerset : ""}
      {stData.adminauth.Title === 8 ? automailsend : ""}
      {stData.adminauth.Title === 9 ? automailsendedit : ""}
      {stData.adminauth.Title === 10 ? mainsetting : ""}
      {stData.adminauth.Title === 11 ? tagsetting : ""}
      {stData.adminauth.Title === 12 ? detailset : ""}
    </div>
  );
};

export default Layer;
