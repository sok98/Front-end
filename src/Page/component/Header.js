import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/namelogo_mini.PNG";
import logo_icon from "../image/logo_orange.png";
import icon_search from "../image/icon_search_white.png";
import icon_mypage from "../image/icon_mypage.png";
import icon_logout from "../image/icon_logout.png";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <div class="header">
      <Link to="/">
        <img src={logo} id="logo_subpage" />
        {/* class->id*/}
      </Link>
      <Link to="/">
        <img src={logo_icon} id="logo_icon_subpage" />
        {/* class->id*/}
      </Link>
      <input id="header_search_bar" type="text"></input>
      <Link to="/List" id="header_search_btn">
        <img width="30" height="30" src={icon_search} id="icon_search_white" />
      </Link>
      <Link to="/Mypage" id="header_mypage_btn">
        <img width="30" height="30" src={icon_mypage} id="icon_mypage" />
        마이페이지
      </Link>
      <u id="header_logout_btn">
        <img width="30" height="30" src={icon_logout} id="icon_logout" />
        로그아웃
      </u>
    </div>
  </div>
);

export default Header;
