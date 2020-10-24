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
        console.log("axios 들어옴");

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
  console.log(Video.videolink);

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
        <p>영상 최종 확인</p>
        <video src={`${Video.videolink}`} controls></video>
        <button onClick={submitHandler}>확인</button>
      </div>
    </div>
  );
}

export default Admin4Page;
