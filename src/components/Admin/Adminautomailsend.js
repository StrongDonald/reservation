import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
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
  width: "400px",
  height: "210px",
  bgcolor: "background.paper",
};

const Adminautomailsend = () => {
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
    <div className="Adminautomailsend">
      <div className="Adminautomailsend_btnGroup">
        <span>2件</span>
        <Link to="/admin/automailsendedit">
          <button
            className="Adminautomailsend_btnGroup_create"
            onClick={() =>
              dispatch({
                type: "automailsendedit",
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
              <div className="Adminautomailsend_filter">
                <p> ID </p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Adminautomailsend_filter">
                <p>メール種別</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>
            
            <td>
              <div className="Adminautomailsend_filter">
                <p>送信対象</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Adminautomailsend_filter">
                <p>カテゴリー</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>
            <td>
              <div className="Adminautomailsend_filter">
                <p>配信者名</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminautomailsend_filter">
                <p>FROMアドレス</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminautomailsend_filter">
                <p>件名</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
                </div>
              </div>
            </td>

            <td>
              <div className="Adminautomailsend_filter">
                <p>メール形式</p>
                <div>
                  <button className="Adminautomailsend_upbtn">▲</button>
                  <br />
                  <button className="Adminautomailsend_downbtn">▼</button>
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
                    to={"/admin/automailsendedit"}
                    onClick={() =>
                      dispatch({
                        type: "automailsendedit",
                      })
                    }
                  >
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/automailsendedit"}
                    onClick={() =>
                      dispatch({
                        type: "automailsendedit",
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
            <td> 6 </td>
            <td>予約登録</td>
            <td>全て</td>
            <td>酪農ヘルパー</td>
            <td>酪農ヘルパー予約システム</td>
            <td>info@re5-2236.revn5.demo.iq...</td>
            <td>酪農ヘルパー予約申請を受け付けました</td>
            <td>テキスト</td>
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
                    to={"/admin/automailsendedit"}
                    onClick={() =>
                      dispatch({
                        type: "automailsendedit",
                      })
                    }
                  >
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <Link
                    to={"/admin/automailsendedit"}
                    onClick={() =>
                      dispatch({
                        type: "automailsendedit",
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
            <td> 7 </td>
            <td>予約変更</td>
            <td>全て</td>
            <td>酪農ヘルパー</td>
            <td>酪農ヘルパー予約システム</td>
            <td>info@re5-2236.revn5.demo.iq...</td>
            <td>酪農ヘルパー予約の変更を受け付けました</td>
            <td>テキスト</td>
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
            <p>自動返信メールの削除</p>
            <span onClick={deletehandleClose}>×</span>
          </div>
          <div className="turnModal-body">
            <p>自動返信メールの削除をおこなってよろしいですか？</p>
            <p>削除したデータの復旧はできません。</p>
            <div className="deleteline" style={{width: "400px"}}></div>
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

export default Adminautomailsend;
