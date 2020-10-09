import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import logo from "../../image/namelogo_orange.PNG";
import icon_search from "../../image/icon_search_orange.png";

import LoginBox from "./LoginBox.js";
import CategoryBox from "./CategoryBox.js";
import TopVideoBox from "./TopVideoBox.js";

import "./HomePage.css";

function HomePage() {
  const [Searchword, setSearchword] = useState("");

  const onSearchHandler = (event) => {
    setSearchword(event.currentTarget.value);
  };

  const onSearchCheckHandler = (event) => {
    event.preventDefault();
    console.log("핸들러 들어옴");
    localStorage.setItem("searchword", Searchword);
    window.location.pathname = "/List";

    /*let body = {
      searchword: Searchword,
    };

    axios
      .post("http://localhost:5050/api/searchword/title", body)
      .then((response) => {
        alert("검색 성공");
        console.log(response.data);

        //localStorage.setItem("ItemList", response);
        //window.location.pathname = "/List";
      });*/
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
