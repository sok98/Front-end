import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./ViewPage.css";

class ViewPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="ViewPage">
          <iframe
            id="videoframe1"
            /*width="850"
            height="500"*/
            src="https://wordballoon.s3.ap-northeast-2.amazonaws.com/kang_test.mp4"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div>
            <h1>독일 공영방송 도이체벨레(DW) 강경화 외교부 장관 인터뷰</h1>
            <h1>1</h1>
            <h1>2</h1>
          </div>
        </div>
        {/* */}
      </div>
    );
  }
}

export default ViewPage;
