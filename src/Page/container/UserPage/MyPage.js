import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import UserInfoBox from "./UserInfoBox.js";
import UserUploadBox from "./UserUploadBox.js";
import "./MyPage.css";

function MyPage() {
  /*userid */
  var userid = localStorage.getItem("userid");
  console.log("아이디 확인");
  console.log(userid);

  var bitmap;

  let body = {
    userid: userid,
  };

  /*화면에 띄우기*/
  useEffect(() => {
    const config = {
      responseType: "arraybuffer",
    };

    axios
      .post("http://wordballoon.net:5050/api/mypage/wordcloud", body, config)
      .then((response) => {
        console.log("워드클라우드axio된건가?");
        console.log(response);
        console.log(response.data);

        bitmap = new Buffer(response.data, "base64");
        console.log(bitmap);
        localStorage.setItem("bitt", bitmap);
      });
  }, []);

  console.log("1");
  console.log(bitmap);
  console.log("2");
  console.log(localStorage.getItem("bitt"));
  var iimmgg = "data:image/jpeg;base64," + localStorage.getItem("bitt");

  console.log("3이라고");
  console.log(iimmgg);

  return (
    <div>
      {userid ? (
        <div>
          <Header />
          <Navi />
          <div class="MyPage">
            <div class="left_mypage">
              <UserInfoBox />
            </div>
            <div class="right_mypage">
              <label class="keyword_title">선호하는 영상 키워드</label>
              <img id="word_cloud" height="300px" width="500px" src={iimmgg} />
            </div>
            <div class="myupload_mypage">
              <UserUploadBox />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Navi />
          <div class="MyPage">
            <h2 id="please">로그인 후 이용 가능합니다.</h2>
          </div>
        </div>
      )}
    </div>
  );
}
export default MyPage;
