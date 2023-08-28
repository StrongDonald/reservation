import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const deletestyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "210px",
  bgcolor: "background.paper",
};

const Advmanage = () => {
  const [deleteopen, setdeleteOpen] = React.useState(false);
  const deletehandleClose = () => setdeleteOpen(false);
  const [activatedcss, setActivatedcss] = useState(
    "Advmanage_reservation_statusdiv_activated activateColor"
  );
  const [pausedcss, setPausedcss] = useState(
    "Advmanage_reservation_statusdiv_paused"
  );
  const [organizecss, setOrganizecss] = useState(["btnColor", "", "", "", "", "", "", "", "", "", ""]);

  function activated() {
    setActivatedcss("Advmanage_reservation_statusdiv_activated activateColor");
    setPausedcss("Advmanage_reservation_statusdiv_paused");
  }

  function paused() {
    setActivatedcss("Advmanage_reservation_statusdiv_activated");
    setPausedcss("Advmanage_reservation_statusdiv_paused activateColor");
  }

  function colorChange(v) {
    let arr = ["", "", "", "", "", "", "", "", "", "", ""];
    arr[v] = "btnColor";
    setOrganizecss(arr);
  }

  return (
    <div className="Advmanage">
      <div className="Advmanage_organize">
        <div className="Advmanage_organize_title">管理組合名</div>
        <div className="Advmanage_organize_btndiv">
          <button className={organizecss[0]} onClick={() => colorChange(0)}>全組織⼀括</button>
          <button className={organizecss[1]} onClick={() => colorChange(1)}>組織1</button>
          <button className={organizecss[2]} onClick={() => colorChange(2)}>組織2</button>
          <button className={organizecss[3]} onClick={() => colorChange(3)}>組織3</button>
          <button className={organizecss[4]} onClick={() => colorChange(4)}>組織4</button>
          <button className={organizecss[5]} onClick={() => colorChange(5)}>組織5</button>
          <button className={organizecss[6]} onClick={() => colorChange(6)}>組織6</button>
          <button className={organizecss[7]} onClick={() => colorChange(7)}>組織7</button>
          <button className={organizecss[8]} onClick={() => colorChange(8)}>組織8</button>
          <button className={organizecss[9]} onClick={() => colorChange(9)}>組織9</button>
          <button className={organizecss[10]} onClick={() => colorChange(10)}>組織10</button>
        </div>
      </div>

      <div className="Advmanage_reservation">
        <div>
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
        <div className="Advmanage_reservation_urldiv">
          <input
            type="text"
            placeholder="localhost:3000/bannerImage/'IDNumber'"
          />
        </div>
        <div className="Advmanage_reservation_previewdiv">
          <button>プレビュー</button>
        </div>
        <div className="Advmanage_reservation_statusdiv">
          <button className={activatedcss} onClick={activated}>
            有効
          </button>
          <button className={pausedcss} onClick={paused}>
            ⼀時停⽌
          </button>
          <button
            className="Advmanage_reservation_statusdiv_delete"
            onClick={() => setdeleteOpen(true)}
          >
            削除
          </button>
        </div>
      </div>

      <Modal
        keepMounted
        open={deleteopen}
        onClose={deletehandleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={deletestyle}>
          <div className="deleteModal-header">
            <p>広告掲載の削除</p>
            <span onClick={deletehandleClose}>×</span>
          </div>
          <div className="turnModal-body">
            <p>広告掲載の削除をおこなってよろしいですか？</p>
            <p>削除したデータの復旧はできません。</p>
            <div style={{width: "400px", borderBottom: "1px solid grey", marginLeft: "-20px", marginTop: "20px", marginBottom: "20px"}}></div>
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

export default Advmanage;
