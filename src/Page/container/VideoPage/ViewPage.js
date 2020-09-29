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
            src="https://wordballoon.s3.ap-northeast-2.amazonaws.com/en-us/%EB%82%A81%EC%97%AC1.mp4"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div>
            <h1 id="video_name">
              어떻게 하면 노동자들이 더 편해 질 수 있는가에 대한 토론
            </h1>
          </div>
        </div>
        {/* */}
      </div>
    );
  }
}

export default ViewPage;
