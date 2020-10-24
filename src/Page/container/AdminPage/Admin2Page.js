import React, { useEffect, useState, setState } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./Admin2Page.css";

function Admin2Page(props) {
  const videoid = props.match.params.videoid;
  const [Video, setVideo] = useState([]);
  const [FilePath, setFilePath] = useState(null);
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

  const onCSVChange = (e) => {
    setFilePath(e.target.files[0]);
    console.log("파일 업로드");
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
  };
  console.log(FilePath);

  const submitHandler = () => {
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
        <div>
          <a href={`${Video.subtitle}`}>csv 파일 다운로드 하기</a>
          <div>수정된 csv 파일 업로드</div>
          <input type="file" accept=".csv" onChange={onCSVChange} />
        </div>
        <button onClick={submitHandler}>다음</button>
      </div>
    </div>
  );
}
export default Admin2Page;
