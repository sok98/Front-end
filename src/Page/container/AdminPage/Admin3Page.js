import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./Admin.css";

function Admin3Page(props) {
  const videoid = props.match.params.videoid;
  const [FilePath, setFilePath] = useState(null);
  var start = 0;

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

  var formData = new FormData();
  formData.append("videoid", videoid);
  formData.append("subtitle", FilePath);

  const config = {
    header: { "content-type": "multipart/form-data" },
  };

  const submitHandler = () => {
    alert("변환처리가 시작됩니다.");
    start = 1;
    console.log("useEffect 들어옴");
    for (var value of formData.values()) {
      console.log(value);
    }
    axios
      .post("http://localhost:5050/api/admin/change", formData, config)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response.data);
        window.location.pathname = "/Admin4/" + videoid;
      });
    console.log("axios 밖");
  };

  return (
    <div>
      <Header />
      <Navi />
      <div class="AdminPage">
        <h1 id="admin3_title">수정된 스크립트 파일을 업로드해주세요.</h1>
        <br />
        <input
          id="admin3_input"
          type="file"
          accept=".csv"
          onChange={onCSVChange}
        />
        <button onClick={submitHandler}>업로드</button>
        <br />
        <br />
        <h4 id="admin3_text">
          *업로드 후 자동으로 변환 처리가 시작되고, 완료 후 다음 화면으로
          넘어갑니다.
        </h4>
        {start == 1 ? <h1>변환 중입니다.</h1> : <div></div>}
      </div>
    </div>
  );
}
export default Admin3Page;
