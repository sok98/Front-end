import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../image/namelogo_orange.PNG";
import icon_search from "../../image/icon_search_orange.png";

import LoginBox from "./LoginBox.js";
import CategoryBox from "./CategoryBox.js";
import TopVideoBox from "./TopVideoBox.js";

import "./HomePage.css";

function HomePage() {
  const [SearchCnt, setSearchCnt] = useState("");

  const onSearchHandler = (event) => {
    setSearchCnt(event.currentTarget.value);
  };

  const onSearchCheckHandler = (event) => {
    console.log("핸들러 들어옴");
    event.preventDefault();

    let body = {
      searchCnt: SearchCnt,
    };

    Axios.post("", body).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      {/* 로고 */}
      <div class="top_header">
        <img src={logo} id="logo_homepage" />
      </div>

      {/*아래부분*/}
      <div class="container">
        {/* 오른쪽 창 */}
        <div class="column_right">
          {/*로그인*/}
          <div class="login_box">
            <LoginBox />
          </div>
          {/*카테고리 버튼*/}
          <div class="category_box">
            <CategoryBox />
          </div>
        </div>

        {/*왼쪽 창*/}
        <div class="column_left">
          {/*검색바*/}
          <div class="search">
            <input
              id="search_bar"
              type="text"
              placeholder="검색어 입력"
              onChange={onSearchHandler}
            ></input>
            <Link to="/List" id="search_btn" onClick={onSearchCheckHandler}>
              <img
                width="30"
                height="30"
                src={icon_search}
                id="icon_search_orange"
              />
            </Link>
          </div>
          {/*조회수 TOP*/}
          <div class="top_video_box">
            <TopVideoBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
