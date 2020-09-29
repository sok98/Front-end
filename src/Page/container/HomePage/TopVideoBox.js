import React from "react";
import { Link } from "react-router-dom";

import new1 from "../../image/new1.png";

import "./TopVideoBox.css";

const TopVideoBox = () => (
  <div className="TopVideoBox">
    <p id="top_video_text">
      <b>조회수 TOP</b>
    </p>
    <div class="view1">
      <Link to="/View" id="View">
        <img width="230" height="150" src={new1} id="new1" />
        <p id="view_title">
          독일 공영방송 도이체벨레(DW) 강경화 외교부 장관 인터뷰
        </p>
      </Link>
    </div>
  </div>
);

export default TopVideoBox;
