import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

function Admin4Page(props) {
  const videoid = props.match.params.videoid;
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    console.log("useEffect 안");
    axios
      .get("http://localhost:5050/api/admin/confirm/" + videoid)
      .then((response) => {
        console.log("setVideo에 들어갈 내용 확인 (response.data)");

        if (response.data) {
          console.log(response.data);
          setVideo(response.data);
        } else {
          alert("Failed to get video");
        }
      });
  }, []);
  console.log("Video 값 확인");
  console.log(Video);

  const submitHandler = () => {
    axios
      .get("http://localhost:5050/api/admin/complete/" + videoid)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response.data);
        alert(response.data);
        window.location.pathname = "/Admin";
      });
  };

  return (
    <div>
      <Header />
      <Navi />
      <div class="AdminPage">
        <h2 id="admin4_title">영상 최종 확인</h2>
        <video src={`${Video.videolink}`} controls width="850px"></video>
        <br />
        <button id="admin4_btn" onClick={submitHandler}>
          영상 게시
        </button>
      </div>
    </div>
  );
}

export default Admin4Page;
