import React from "react";
import avatar from "../assets/images/avatar.png";

function MsgBox({ timestamp, username, message, index }) {
  return (
    <>
      <div className="msg" key={index}>
        <div className="avatar">
          <img src={avatar} alt="img" />
        </div>
        <div className="text_area">
          <p>
            <span id="timestamp">[{timestamp}]</span>
            <span id="username">{username}</span>
          </p>
          <h6>{message}</h6>
        </div>
      </div>
    </>
  );
}

export default MsgBox;
