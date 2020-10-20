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
    axios.get("http://localhost:5050/api/admin/list").then((response) => {
      localStorage.setItem("videoid", response.data.videoid);
      this.setState({
        VideoList: response.data,
      });
    });
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    const { VideoList } = this.state;

    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <p>영상처리 목록 리스트</p>
          <table border="1" class="table_body">
            <th class="table_line">
              <td id="t_id">videoid</td>
              <td id="t_ctg">카테고리</td>
              <td id="t_title">제목</td>
              <td id="t_uploader">게시자</td>
            </th>
            {VideoList &&
              VideoList.map((itemdata) => {
                const setidhandler = () => {
                  localStorage.setItem("videoid", itemdata.videoid);
                };
                return (
                  <tr class="table_line">
                    <a
                      href={`/Admin2/${itemdata.videoid}`}
                      onClick={setidhandler}
                      class="table_line"
                    >
                      <td id="t_id">{itemdata.videoid}</td>
                      <td id="t_ctg">{itemdata.categoryname}</td>
                      <td id="t_title">{itemdata.videotitle}</td>
                      <td id="t_uploader">{itemdata.uploader}</td>
                    </a>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}
export default AdminPage;
