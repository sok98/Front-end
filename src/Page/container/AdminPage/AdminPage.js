import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import UserAdminBox from "./UserAdminBox.js";
import VideoAdminBox from "./VideoAdminBox.js";

import "./AdminPage.css";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <UserAdminBox />
          <VideoAdminBox />
        </div>
      </div>
    );
  }
}
export default AdminPage;
