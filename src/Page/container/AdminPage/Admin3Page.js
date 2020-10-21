import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./Admin2Page.css";

function Admin3Page(props) {
  const videoid = props.match.params.videoid;
  let body = {
    videoid: videoid,
    subtitle: csvfile,
  };
  useEffect(() => {
    axios
      .post("http://localhost:5050/api/admin/change", body)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response);
        alert(response);
      });
  }, []);

  return (
    <div>
      <Header />
      <Navi />
      <div class="AdminPage">
        <br />
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
