import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./UserInfoBox.css";

function UserInfoBox() {
  var userid = localStorage.getItem("userid");
  var username = localStorage.getItem("name");
  var userbirth = localStorage.getItem("birth");

  return (
    <div className="userinfobox">
      <label id="table_label">사용자 정보</label>
      <table id="table_user" border="1">
        <tr>
          <td id="table_h">ID</td>
          <td id="table_b">{userid}</td>
        </tr>
        <tr>
          <td id="table_h">NAME</td>
          <td id="table_b">{username}</td>
        </tr>
        <tr>
          <td id="table_h">BIRTH</td>
          <td id="table_b">{userbirth}</td>
        </tr>
      </table>
      <Link to="/Change" id="change_btn">
        정보변경
      </Link>
    </div>
  );
}

export default UserInfoBox;
