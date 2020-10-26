import React, { useEffect, useState } from "react";

import axios from "axios";
import icon_like from "../../image/like.png";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./ViewPage.css";

function ViewPage(props) {
  const videoId = props.match.params.videoid;
  const [Video, setVideo] = useState([]);

  var userlogin = localStorage.getItem("userid");
  if (userlogin == null) {
    userlogin = 11; //로그인 안 한 사람은 11
  }

  let body = {
    videoid: videoId,
    userid: userlogin,
  };

  /*영상불러오기 */
  useEffect(() => {
    axios
      .post("http://wordballoon.net:5050/api/detail/view", body)
      .then((response) => {
        console.log("axio된건가?");
        console.log(response);
        if (response.data) {
          console.log("if문 안");

          var videolink = response.data.videolink;
          console.log(videolink);
          setVideo(response.data);
          console.log(Video);
        } else {
          alert("Failed to get video Info");
        }
      });
  }, []);
  //console.log(Video)
  /*좋아요 (이벤트)*/
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit 안");
    console.log(videoId);
    console.log(userlogin);

    let body = {
      videoid: videoId,
      userid: userlogin,
    };

    axios
      .post("http://wordballoon.net:5050/api/detail/like", body)
      .then((response) => {
        console.log("axio된건가?");
        console.log(response);
        if (response.data) {
          console.log("if문 안");
          alert(response.data);
        } else {
          alert("좋아요 실패");
        }
      });
  };
  return (
    <div>
      <Header />
      <Navi />
      <div class="ViewPage">
        <video id="videoframe1" src={`${Video.videolink}`} controls></video>
        <hr />
        <div class="view_video_name">
          <h1 id="video_name">{`${Video.videotitle}`}</h1>
        </div>
        <div class="view_info">
          <span id="video_uploader">게시자: {`${Video.uploader}`}</span>
          <span id="video_view">조회수: {`${Video.view}`}회</span>
          <span id="video_like">♥: {`${Video.videolike}`}</span>
          <button id="video_like_btn" onClick={onSubmit}>
            <img src={icon_like} /> 좋아요
          </button>
        </div>

        {/*media용*/}
        <div class="view_info2">
          <div id="video_uploader">게시자: {`${Video.uploader}`}</div>
          <div id="video_view">조회수: {`${Video.view}`}회</div>
          <span id="video_like">♥: {`${Video.videolike}`}</span>
          <button id="video_like_btn" onClick={onSubmit}>
            <img src={icon_like} /> 좋아요
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
