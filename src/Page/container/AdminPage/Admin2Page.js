import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import CSVbox from "./CSVbox.js";

import "./Admin2Page.css";

function Admin2Page(props) {
  const videoid = props.match.params.videoid;
  const [Video, setVideo] = useState([]);
  console.log(videoid);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/admin/edit/" + videoid)
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

  const submitHandler = () => {
    console.log("submotHandler");
    window.location.pathname = "/Admin3/" + videoid;
  };

  return (
    <div>
      <Header />
      <Navi />

      <div className="Admin2Page">
        <p>Admin2페이지</p>
        <p>비디오 영상과 csv 파일</p>
        <video
          src={`${Video.videolink}`}
          controls
          width="300px"
          height="200px"
        ></video>
        <CSVbox csvfile={`${Video.subtitle}`} />
        <button onClick={submitHandler}>다음</button>
      </div>
    </div>
  );
}
export default Admin2Page;
