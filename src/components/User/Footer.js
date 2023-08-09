import React from "react";
import "./index.css";
import userFooter_img from "../../img/userFooter-img.png";

function Footer() {
  return (
    <div className="userFooter">
      <div className="userFooter_content ">
        <p>Powered by </p>
        <img src={userFooter_img} />
      </div>
    </div>
  );
}

export default Footer;
