import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import icon_video from "../image/icon_video.png";
import icon_cartegory from "../image/icon_cartegory.png";
import icon_upload from "../image/icon_upload.png";
import icon_mypage from "../image/icon_mypage.png";
import icon_logout from "../image/icon_logout.png";
import icon_login from "../image/icon_login.png";

import "./Navi.css";

import $ from "jquery";
window.$ = window.jQuery = $;
class Navi extends Component {
  componentDidMount = () => {
    $(".btn").click(function () {
      $("#menu,.page_cover,html").addClass("open");
      window.location.hash = "#open";
    });
    $(".close").click(function () {
      $("#menu,.page_cover,html").removeClass("open");
    });
    /*window.onhashchange = function () {
      if (window.location.hash != "#open") {
        $("#menu,.page_cover,html").removeClass("open");
      }
    };*/
  };

  render() {
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
      <div className="Navi">
        <div class="navi">
          <ul id="group_all">
            <li class="group">
              <div class="title">
                <img width="20" height="20" src={icon_video} id="title_icon" />
                <span id="title_text">내 동영상</span>
              </div>
              <ul class="sub">
                <li>
                  <a href="#">최근 본 영상</a>
                </li>
                <li>
                  <a href="#">좋아요 한 영상</a>
                </li>
                <li>
                  <a href="#">맞춤 영상</a>
                </li>
              </ul>
            </li>
            <li class="group">
              <div class="title">
                <img
                  width="20"
                  height="20"
                  src={icon_cartegory}
                  id="title_icon"
                />
                <span id="title_text">카테고리</span>
              </div>
              <ul class="sub">
                <li>
                  <a href="#">한국 영상</a>
                </li>
                <li>
                  <a href="#">영어 영상</a>
                </li>
                <li>
                  <a href="#">독어 영상</a>
                </li>
              </ul>
            </li>
            <li class="group">
              <Link to="/UploadVideo" id="UploadVideo">
                <div class="title">
                  <img
                    width="20"
                    height="20"
                    src={icon_upload}
                    id="title_icon"
                  />
                  <span id="title_text">동영상 업로드</span>
                </div>
              </Link>
            </li>
          </ul>

          {/*화면 작아지면 ul은 위에꺼와 동일 id랑class에 2만 붙여줌 */}
          {/*추가된건 btn~menu까지  */}
          <div class="btn"></div>
          <div onclick="history.back();" class="page_cover"></div>
          <div id="menu">
            <div onclick="history.back();" class="close"></div>
            <ul id="group_all2">
              <li class="group2">
                <div class="title2">
                  <img
                    width="20"
                    height="20"
                    src={icon_video}
                    id="title_icon2"
                  />
                  <span id="title_text2">내 동영상</span>
                </div>
                <ul class="sub2">
                  <li>
                    <a href="#">최근 본 영상</a>
                  </li>
                  <li>
                    <a href="#">좋아요 한 영상</a>
                  </li>
                  <li>
                    <a href="#">맞춤 영상</a>
                  </li>
                </ul>
              </li>
              <li class="group2">
                <div class="title2">
                  <img
                    width="20"
                    height="20"
                    src={icon_cartegory}
                    id="title_icon2"
                  />
                  <span id="title_text2">카테고리</span>
                </div>
                <ul class="sub2">
                  <li>
                    <a href="#">한국 영상</a>
                  </li>
                  <li>
                    <a href="#">영어 영상</a>
                  </li>
                  <li>
                    <a href="#">독어 영상</a>
                  </li>
                </ul>
              </li>
              <li class="group2">
                <Link to="/UploadVideo" id="UploadVideo2">
                  <div class="title2">
                    <img
                      width="20"
                      height="20"
                      src={icon_upload}
                      id="title_icon2"
                    />
                    <span id="title_text2">동영상 업로드</span>
                  </div>
                </Link>
              </li>
              <li class="group3">
                <div>
                  {username ? (
                    <div>
                      <Link to="/Mypage" id="navi_mypage_btn">
                        <img
                          width="30"
                          height="30"
                          src={icon_mypage}
                          id="navi_icon_mypage"
                        />
                        마이페이지
                      </Link>
                      <u id="navi_logout_btn" onClick={logout}>
                        <img
                          width="30"
                          height="30"
                          src={icon_logout}
                          id="navi_icon_logout"
                        />
                        로그아웃
                      </u>
                    </div>
                  ) : (
                    <div>
                      <Link to="/Login" id="navi_mypage_btn">
                        <img
                          width="30"
                          height="30"
                          src={icon_mypage}
                          id="navi_icon_mypage"
                        />
                        마이페이지 {username}
                      </Link>
                      <Link to="/Login" id="navi_logout_btn">
                        <img
                          width="30"
                          height="30"
                          src={icon_login}
                          id="navi_icon_logout"
                        />
                        로그인
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Navi;
