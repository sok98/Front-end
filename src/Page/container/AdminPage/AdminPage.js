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
    const { VideoList } = this.state;
    console.log("VideoList 확인");
    console.log(VideoList);
    return (
      <div>
        <Header />
        <Navi />
        <div class="AdminPage">
          <p>영상처리 목록 리스트</p>
          <table border="1">
            <th>
              <td>videoid</td>
              <td>카테고리</td>
              <td>제목</td>
              <td>게시자</td>
            </th>
            {VideoList &&
              VideoList.map((itemdata) => {
                const setidhandler = (value) => {
                  console.log("videoid 값 넘겨주기");
                  console.log(value);
                  localStorage.setItem("videoid", value);
                };
                return (
                  <tr>
                    <a
                      /*href={`/Admin2/${itemdata.videoid}`}*/
                      value={itemdata.videoid}
                      onClick={setidhandler}
                    >
                      <td>{itemdata.videoid}</td>
                      <td>{itemdata.categoryname}</td>
                      <td>{itemdata.videotitle}</td>
                      <td>{itemdata.uploader}</td>
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
