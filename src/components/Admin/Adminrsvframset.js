import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "210px",
  bgcolor: "background.paper",
};

const deletestyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  height: "210px",
  bgcolor: "background.paper",
};

const Adminrsvframeset = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [deleteopen, setdeleteOpen] = React.useState(false);
  const deletehandleClose = () => setdeleteOpen(false);
  const stData = useSelector((state) => state);
  const [flg, setflg] = React.useState([0, 0]);
  const [selected, setselected] = React.useState();

  function select(id) {
    setOpen(true);
    setselected(id);
  }

  function turn() {
    setflg(flg ^ 1);
    handleClose();

    let arr = flg;
    arr[selected] ^= 1;
    setflg(arr);
  }

  return (
    <div className="adminrsvframeset">
      <div className="adminrsvframeset_btnGroup">
        <span>2件</span>
        <Link to="/admin/adminrsvframesetAdd">
          <button
            className="adminrsvframeset_btnGroup_create"
            onClick={() =>
              dispatch({
                type: "adminrsvframesetAdd",
              })
            }
          >
            + 新規登録
          </button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <td>操作</td>
            <td>
              <div className="adminrsvframeset_filter">
                <p>予約枠名</p>
                <div>
                  <button className="adminrsvframeset_upbtn">▲</button>
                  <br />
                  <button className="adminrsvframeset_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="adminrsvframeset_filter">
                <p>利用期間</p>
                <div>
                  <button className="adminrsvframeset_upbtn">▲</button>
                  <br />
                  <button className="adminrsvframeset_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="adminrsvframeset_filter">
                <p>利用曜日</p>
              </div>
            </td>
            <td>
              <div className="adminrsvframeset_filter">
                <p>実施時間</p>
                <div>
                  <button className="adminrsvframeset_upbtn">▲</button>
                  <br />
                  <button className="adminrsvframeset_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="adminrsvframeset_filter">
                <p>表示順</p>
                <div>
                  <button className="adminrsvframeset_upbtn">▲</button>
                  <br />
                  <button className="adminrsvframeset_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="adminrsvframeset_filter">
                <p>公開設定</p>
                <div>
                  <button className="adminrsvframeset_upbtn">▲</button>
                  <br />
                  <button className="adminrsvframeset_downbtn">▼</button>
                </div>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/adminrsvedit"}
                    onClick={() =>
                      dispatch({
                        type: "adminrsvframesetAdd",
                      })
                    }
                  >
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/adminrsvcopy"}
                    onClick={() =>
                      dispatch({
                        type: "adminrsvframesetAdd",
                      })
                    }
                  >
                    <FileCopyIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <DeleteIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                    onClick={() => {
                      setdeleteOpen(true);
                    }}
                  />
                </span>
              </Box>
            </td>
            <td>朝と夕方（男性2名）</td>
            <td>2022/10/01(土)～</td>
            <td>月 火 水 木 金 土 日 祝日</td>
            <td>05:00～19:00</td>
            <td>1</td>
            <td>
              <button
                className={flg[0] ? "btn_add" : ""}
                onClick={() => select(0)}
              >
                {flg[0] ? "非公開" : "公開"}
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/adminrsvedit"}
                    onClick={() =>
                      dispatch({
                        type: "adminrsvframesetAdd",
                      })
                    }
                  >
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/adminrsvcopy"}
                    onClick={() =>
                      dispatch({
                        type: "adminrsvframesetAdd",
                      })
                    }
                  >
                    <FileCopyIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <DeleteIcon
                    sx={{ color: "#727272", fontSize: 20 }}
                    onClick={() => {
                      setdeleteOpen(true);
                    }}
                  />
                </span>
              </Box>
            </td>
            <td>朝と夕方（女性2名）</td>
            <td>2022/12/13(火)～</td>
            <td>月 火 水 木 金 土 日 祝日</td>
            <td>05:00～19:00</td>
            <td>1</td>
            <td>
              <button
                className={flg[1] ? "btn_add" : ""}
                onClick={() => select(1)}
              >
                {flg[1] ? "非公開" : "公開"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="Modal-header">
            <span
              onClick={() => {
                setOpen(false);
              }}
            >
              ×
            </span>
          </div>
          <div className="turnModal-body">
            <p>公開設定を非公開に変更致します。</p>
            <p>よろしいでしょうか？</p>
            <div className="line"></div>
            <div className="turnModal-btnGroup">
              <button
                className="turnModal-btnGroup_back"
                onClick={() => {
                  handleClose();
                }}
              >
                いいえ
              </button>
              <button className="turnModal-btnGroup_nxt" onClick={() => turn()}>
                はい
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        keepMounted
        open={deleteopen}
        onClose={deletehandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={deletestyle}>
          <div className="deleteModal-header">
            <p>予約枠の削除</p>
            <span onClick={deletehandleClose}>×</span>
          </div>
          <div className="turnModal-body">
            <p>予約枠の削除をおこなってよろしいですか？</p>
            <p>削除したデータの復旧はできません。</p>
            <div className="deleteline"></div>
            <div className="turnModal-btnGroup">
              <button
                className="turnModal-btnGroup_back"
                onClick={() => {
                  deletehandleClose();
                }}
              >
                いいえ
              </button>
              <button
                className="turnModal-btnGroup_nxt"
                onClick={() => deletehandleClose()}
              >
                はい
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Adminrsvframeset;
