import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./loginbox.css";

function LoginBox() {
  var username = localStorage.getItem("name");

  const logout = () => {
    axios.post("http://localhost:5050/api/auth/logout").then((response) => {
      // localstorage 회원정보 삭제
      localStorage.removeItem("userid");
      localStorage.removeItem("password");
      localStorage.removeItem("name");
      localStorage.removeItem("birth");
      localStorage.removeItem("isadmin");
      alert("로그아웃되었습니다.");
      console.log(response);
      window.location.reload(true);
    });
  };

  return (
    <div>
      {username ? (
        <div>
          <div class="login_top">
            <Link to="/MyPage" id="login_user">
              {username} 님
            </Link>
            {/*관리자일때만 버튼 보이게 변경*/}
            <Link to="/Admin" id="login_admin">
              관리자
            </Link>
            <button id="login_logout" onClick={logout}>
              로그아웃
            </button>
          </div>
          <div class="login_bottom">
            <Link to="/UploadVideo" id="login_upload">
              영상 업로드
            </Link>
            <Link to="/Change" id="login_change">
              정보변경
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/Login" id="login_btn">
            <b>WORDBALLOON 로그인</b>
          </Link>
          <p id="login_q">
            회원이 아니신가요?&nbsp;&nbsp;
            <Link to="/Join" id="login_join">
              <u>회원가입</u>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginBox;
