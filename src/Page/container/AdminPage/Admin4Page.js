import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

class Admin4Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <p>Admin4페이지</p>
          <p>영상 최종 확인</p>
        </div>
      </div>
    );
  }
}
export default Admin4Page;
