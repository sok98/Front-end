import React, { Component } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

class Admin2Page extends Component {
  // videoid = localStorage.getItem("videoid");
  state = {
    video: "",
    subtitle: "",
  };

  loadsub = async () => {
    console.log("loadList 들어옴");

    axios
      .get("http://localhost:5050/api/admin/edit" /*+ videoid*/)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response);
        this.setState({
          video: response.data,
          subtitle: response.data,
        });
      });
  };

  componentDidMount() {
    this.loadsub();
  }

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
