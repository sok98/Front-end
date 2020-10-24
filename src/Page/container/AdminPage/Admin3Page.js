import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./Admin2Page.css";

function Admin3Page(props) {
  const videoid = props.match.params.videoid;
  const [FilePath, setFilePath] = useState(null);

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
    console.log("useEffect 들어옴");
    for (var value of formData.values()) {
      console.log(value);
    }
    axios
      .post("http://localhost:5050/api/admin/change", formData, config)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response.data);
        alert(response.data);
        window.location.pathname = "/Admin4/" + videoid;
      });
    console.log("axios 밖");
  };

  return (
    <div>
      <Header />
      <Navi />
      <div class="AdminPage">
        <br />
        <input type="file" accept=".csv" onChange={onCSVChange} />
        <button onClick={submitHandler}>다음</button>
        <br />
        <h1 id="text1">변환 처리 중입니다.</h1>
        <p id="text2">
          변환 처리가 완료되면 자동으로 다음 화면으로 넘어갑니다.
        </p>
      </div>
    </div>
  );
}
export default Admin3Page;
