import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./Admin2Page.css";

class Admin3Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <p>Admin3페이지</p>
          <p>변환 처리 중입니다 ...</p>
          <p>변환 처리가 완료되면 자동으로 다음 화면으로 넘어갑니다.</p>
        </div>
      </div>
    );
  }
}
export default Admin3Page;
