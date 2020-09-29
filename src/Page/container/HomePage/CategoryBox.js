import React from "react";
import { Link } from "react-router-dom";

import icon_kor from "../../image/icon_c_kor.png";
import icon_eng from "../../image/icon_c_eng.png";
import icon_ger from "../../image/icon_c_ger.jpg";

import "./CategoryBox.css";

const CategoryBox = () => (
  <div className="CategoryBox">
    <Link to="/List">
      <div id="c_btn">
        <img width="80" height="70" src={icon_kor} id="c_icon" />
        <span id="c_tag">한국 영상</span>
      </div>
    </Link>

    <Link to="/List">
      <div id="c_btn">
        <img width="80" height="70" src={icon_eng} id="c_icon" />
        <span id="c_tag">영어 영상</span>
      </div>
    </Link>

    <Link to="/List">
      <div id="c_btn">
        <img width="80" height="70" src={icon_ger} id="c_icon" />
        <span id="c_tag">독어 영상</span>
      </div>
    </Link>
  </div>
);

export default CategoryBox;
