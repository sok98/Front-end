import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import "./UserInfoBox.css";

function UserInfoBox() {
  var userid = localStorage.getItem("userid");
  var username = localStorage.getItem("name");
  var userbirth = localStorage.getItem("birth");

  return (
    <div>
      <p>{userid}</p>
      <p>{username}</p>
      <p>{userbirth}</p>
      <Link to="/Change">정보변경</Link>
    </div>
  );
}

export default UserInfoBox;
