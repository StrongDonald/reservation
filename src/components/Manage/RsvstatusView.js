import ManagersvCalendar from "./ManagersvCalendar";
import React, { useState } from "react";

const RsvstatusView = () => {

    const [organizecss, setOrganizecss] = useState(["btnColor", "", "", "", "", "", "", "", "", "", ""]);

  function colorChange(v) {
    let arr = ["", "", "", "", "", "", "", "", "", "", ""];
    arr[v] = "btnColor";
    setOrganizecss(arr);
  }

  return (
    <div className="RsvstatusView">
      <div className="RsvstatusView_organize">
        <div className="RsvstatusView_organize_title">管理組合名</div>
        <div className="RsvstatusView_organize_btndiv">
          <button className={organizecss[0]} onClick={() => colorChange(0)}>
            組織1
          </button>
          <button className={organizecss[1]} onClick={() => colorChange(1)}>
            組織2
          </button>
          <button className={organizecss[2]} onClick={() => colorChange(2)}>
            組織3
          </button>
          <button className={organizecss[3]} onClick={() => colorChange(3)}>
            組織4
          </button>
          <button className={organizecss[4]} onClick={() => colorChange(4)}>
            組織5
          </button>
          <button className={organizecss[5]} onClick={() => colorChange(5)}>
            組織6
          </button>
          <button className={organizecss[6]} onClick={() => colorChange(6)}>
            組織7
          </button>
          <button className={organizecss[7]} onClick={() => colorChange(7)}>
            組織8
          </button>
          <button className={organizecss[8]} onClick={() => colorChange(8)}>
            組織9
          </button>
          <button className={organizecss[9]} onClick={() => colorChange(9)}>
            組織10
          </button>
        </div>
      </div>

      <div className="RsvstatusView_reservation">
        <ManagersvCalendar />
      </div>
    </div>
  );
};

export default RsvstatusView;
