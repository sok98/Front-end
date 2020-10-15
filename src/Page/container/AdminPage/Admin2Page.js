import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

class Admin2Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="Admin2Page">
          <p>Admin2페이지</p>
          <p>비디오 영상과 csv 파일</p>
        </div>
      </div>
    );
  }
}
export default Admin2Page;
