import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Form,
  message,
  Input,
} from "antd"; /*antd다운 필요  npm i antd*/
import Dropzone from "react-dropzone"; /*react-dropzone다운필요 npm install react-dropzone --save*/
import axios from "axios"; /*npm i --save axios */
import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import "./UploadVideoPage.css";

const { Title } = Typography;

const CatogoryOptions = [
  { value: "ko-kr", label: "한국영상" },
  { value: "en-us", label: "영어영상" },
];

function UploadVideoPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [Categories, setCategories] = useState("한국");
  const [FilePath, setFilePath] = useState("");

  var username = localStorage.getItem("name");
  var mp4;

  /* 제목 (이벤트)*/
  const onTitleChange = (e) => {
    setVideoTitle(e.currentTarget.value);
    console.log("제목쓰는칸");
  };
  /* 카테고리 (이벤트)*/
  const onCategoryChange = (e) => {
    setCategories(e.currentTarget.value);
    console.log("카테고리칸");
  };
  /*드래그앤드롭  */
  //let formData = new FormData();
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    console.log("드래그앤드롭안");
    console.log(files[0]);
    localStorage.setItem("dropvideo", files[0]);
  };

  var dropvideo = localStorage.getItem("dropvideo");
  console.log(dropvideo);
  console.log(username);

  /*submit버튼 누르면 페이지 넘어감  */
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit안입니다");
    let body = {
      videofile: dropvideo,
      inbucket: Categories,
      pvideotitle: VideoTitle,
      uploader: username,
    };
    console.log("axios밖입니다");
    axios
      .post("http://localhost:5050/api/upload/video", body)
      .then((response) => {
        console.log(response);
        console.log("axios안입니다");
        if (response.data.success) {
          //localStorage.setItem("videofile", response.data.videofile);
          localStorage.setItem("inbucket", response.data.inbucket);
          localStorage.setItem("pvideotitle", response.data.pvideotitle);
          //localStorage.setItem("uploader", response.data.uploader);
          alert("업로드 성공");
          console.log(response.data);
        } else {
          alert("업로드 실패");
          alert(response.data);
        }
      });
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
        <Form onSubmit={onSubmit}>
          <div id="upload_after_form">
            <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
              {({ getRootProps, getInputProps }) => (
                <div id="upload_after_dropzone" {...getRootProps()}>
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
          </div>

          {/*제목*/}
          <br />
          <br />
          <label id="title_label">Tittle</label>
          <br />
          <input id="title_input" onChange={onTitleChange} value={VideoTitle} />

          {/*카테고리*/}
          <br />
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
          <Link to="/UploadVideoSecond">
            <Button id="uploadpage_submit_btn" type="primary">
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
export default UploadVideoPage;
