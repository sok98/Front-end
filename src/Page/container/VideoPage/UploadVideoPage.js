import React, { useState } from "react";
import { Typography } from "antd"; /*antd다운 필요  npm i antd*/
import axios from "axios"; /*npm i --save axios */
import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import "./UploadVideoPage.css";
import { delay } from "lodash";

const { Title } = Typography;

const CatogoryOptions = [
  { value: "ko-kr", label: "한국영상" },
  { value: "en-us", label: "영어영상" },
];

function UploadVideoPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [Categories, setCategories] = useState("ko-kr");
  const [FilePath, setFilePath] = useState(null);

  /* 비디오 (이벤트)*/
  const onVideoChange = (e) => {
    setFilePath(e.target.files[0]);
    console.log("비디오 업로드");
  };

  /* 제목 (이벤트)*/
  const onTitleChange = (e) => {
    setVideoTitle(e.currentTarget.value);
    console.log("제목");
  };

  /* 카테고리 (이벤트)*/
  const onCategoryChange = (e) => {
    setCategories(e.currentTarget.value);
    console.log("카테고리");
  };

  /*submit버튼 누르면 페이지 넘어감  */
  const onSubmit = (e) => {
    console.log("submit안");
    e.preventDefault();

    //타이틀에 공백있는지 확인
    if (VideoTitle.indexOf(" ") !== -1) {
      alert("title을 다시 확인해주세요.");
    } else {
      //formData
      var formData = new FormData();
      formData.append("videofile", FilePath);
      formData.append("inbucket", Categories);
      formData.append("pvideotitle", VideoTitle);
      formData.append("uploader", localStorage.getItem("userid"));

      //formData 확인
      for (var value of formData.values()) {
        console.log(value);
      }

      const config = {
        header: { "content-type": "multipart/form-data" },
      };

      axios //업로드 axios
        .post("http://localhost:5050/api/upload/video", formData, config)
        .then((response) => {
          console.log("업로드 axios 안");
          console.log(response);

          if (response.data.success) {
            alert("업로드 성공");
            localStorage.setItem("inbucket", Categories);
            localStorage.setItem("pvideotitle", VideoTitle);
            localStorage.setItem("thumbnail", response.data.thumbnail);

            let body = {
              inbucket: localStorage.getItem("inbucket"),
              pvideotitle: localStorage.getItem("pvideotitle"),
              uploader: localStorage.getItem("userid"),
            };

            /*axios //stt axios
              .post("http://localhost:5050/api/upload/stt", body)
              .then((response) => {
                console.log("stt axios 안");
                console.log(response);

                if (response.data.success) {
                  alert("stt 성공");
                  console.log("stt 성공");
                  setTimeout("6분만 기다리자", 360000);*/
            axios
              .post("http://localhost:5050/api/upload/textrank", body)
              .then((restponse) => {
                console.log("textrank axios 안");
                console.log(response);

                if (response.data.success) {
                  alert("textrank 성공");
                  console.log("textrank 성공");
                  window.location.pathname = "/UploadVideoSecond";
                } else {
                  alert("textrank 실패");
                }
              });
            /*} else {
                  alert("stt 실패");
                }
              });*/
          } else {
            alert("업로드 실패");
          }
        });
    }
  };

  return (
    <div>
      <Header />
      <Navi />
      <div class="UploadVideoPage">
        <Title level={2} id="uploadpage_title">
          {" "}
          Upload Video
        </Title>

        <form onSubmit={onSubmit}>
          {/*영상*/}
          <br />
          <br />
          <label id="video_label">Video</label>
          <br />
          <input id="video_input" type="file" onChange={onVideoChange} />

          {/*제목*/}
          <br />
          <br />
          <label id="title_label">
            Tittle <span id="title_war"> (띄어쓰기 불가)</span>
          </label>
          <br />
          <input id="title_input" onChange={onTitleChange} value={VideoTitle} />

          {/*카테고리*/}
          <br />
          <br />
          <label id="category_label">Category</label>
          <br />
          <select id="category_select" onChange={onCategoryChange}>
            {CatogoryOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          {/*버튼*/}
          <br />
          <br />
          <button id="uploadpage_submit_btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UploadVideoPage;
