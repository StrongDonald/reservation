import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import "./index.css";
import Modal from "@mui/material/Modal";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: "absolute",
    top: "450px",
    left: "950px",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "600px",
    bgcolor: "background.paper",
  };

const Admincustomerset = () => {
  const dispatch = useDispatch();
  const [firstopen, setfirstOpen] = React.useState(false);
  const firsthandleClose = () => setfirstOpen(false);

  return (
    <div className="Admincustomerset">
      <table>
        <thead>
          <tr>
            <td className="Admincustomerset_td1"><p>編集</p></td>

            <td className="Admincustomerset_td2">
                <p>項目名</p>
            </td>

            <td className="Admincustomerset_td4">
              <p>必須</p>
            </td>

            <td className="Admincustomerset_td2">
              <p>入力タイプ</p>
            </td>

            <td className="Admincustomerset_td5">
                <p>予約画面表示</p>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>会員権限</td>
            <td>必須</td>
            <td>顧客の権限</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>会社名・牧場名</td>
            <td>必須</td>
            <td>テキストボックス</td>
            <td>表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>役職名</td>
            <td>必須</td>
            <td>テキストボックス</td>
            <td>表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>氏名</td>
            <td>必須</td>
            <td>氏名</td>
            <td>表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>携帯番号</td>
            <td>必須</td>
            <td>電話番号</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>住所</td>
            <td>必須</td>
            <td>住所検索</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>総飼養頭数</td>
            <td>必須</td>
            <td>テキストボックス</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>メールアドレス</td>
            <td>必須</td>
            <td>メールアドレス</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>メールアドレス（確認）</td>
            <td>任意</td>
            <td>メールアドレス（確認）</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>ログインID</td>
            <td>必須</td>
            <td>ログインID</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>パスワード</td>
            <td>必須</td>
            <td>パスワード</td>
            <td>非表示</td>
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
                  <Link>
                    <EditIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>パスワード（確認）</td>
            <td>必須</td>
            <td>パスワード（確認）</td>
            <td>非表示</td>
          </tr>
        </tbody>
      </table>

      <div className="Admincustomerset_addbtn"><button onClick={() => setfirstOpen(true)}> + 項目追加</button></div>

      <div className="Admincustomerset_editbtn"><Link to="/admin/login" onClick={() =>
                dispatch({
                    type: "adminlogin",
                })
                }><button>編集</button></Link></div>

    <Modal
        keepMounted
        open={firstopen}
        onClose={firsthandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="customerModal-header">
            <p>項目設定</p>
            <span onClick={firsthandleClose}>×</span>
          </div>

          <div className="customerModal-body">
            <div className="customerModal-body-div1">
                <p>テキストボックス</p>
                <p>テキストエリア</p>
                <p>マルチテキストボックス</p>
                <p>ラジオボタン</p>
                <p>セレクトボックス</p>
                <p>チェックボックス</p>
                <p>年月日</p>
                <p>氏名</p>
                <p>電話番号</p>
                <p>都道府県</p>
                <p>住所検索</p>
            </div>

            <div className="customerModal-body-div2">
                <div className="customerModal-body-div2-title"><p>基本設定</p><span></span></div>
                <div className="customerModal-body-div2-first">
                    <p>項目名</p>
                    <input />
                </div>

                <div className="customerModal-body-div2-second">
                    <p className="customerModal-body-div2-second-title">必須</p>
                    <p className="customerModal-body-div2-second-p">必須</p>
                    <div className="customerModal-body-div2-second-div">
                        <input type="radio"/>
                        <span>必須</span>
                    </div>
                    <div className="customerModal-body-div2-second-div">
                        <input type="radio"/>
                        <span>任意</span>
                    </div>
                </div>

                <div className="customerModal-body-div2-second">
                    <p className="customerModal-body-div2-second-title add">予約画面表示</p>
                    <p className="customerModal-body-div2-second-p">必須</p>
                    <div className="customerModal-body-div2-second-div">
                        <input type="radio"/>
                        <span>表示</span>
                    </div>
                    <div className="customerModal-body-div2-second-div">
                        <input type="radio"/>
                        <span>非表示</span>
                    </div>
                </div>                
            </div>
          </div>

            <div className="customerModal-btn">
                <button onClick={firsthandleClose}>項目を追加</button>
            </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Admincustomerset;
