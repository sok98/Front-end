import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import UserInfoBox from "./UserInfoBox.js";

import "./MyPage.css";

class MyPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="MyPage">
          <div class="left_mypage">
            <h1 id="keyword">선호하는 영상 키워드</h1>
          </div>
          <div class="right_mypage">
            <UserInfoBox />
          </div>
        </div>
      </div>
    );
  }
}
export default MyPage;
