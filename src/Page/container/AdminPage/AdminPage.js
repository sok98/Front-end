import React, { Component } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./AdminPage.css";

class AdminPage extends Component {
  state = {
    VideoList: [],
  };

  loadList = async () => {
    console.log("loadList 들어옴");

    axios.get("http://localhost:5050/api/admin/list").then((response) => {
      console.log("axios 들어옴");
      console.log(response);
      this.setState({
        VideoList: response.data,
      });
    });
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <p>Admin1페이지</p>
          <p>영상처리 목록 리스트</p>
        </div>
      </div>
    );
  }
}
export default AdminPage;
