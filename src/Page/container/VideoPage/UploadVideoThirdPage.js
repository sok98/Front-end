import React, { Component } from "react";
import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import "./UploadVideoThirdPage.css";

class UploadVideoThirdPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div class="UploadVideoThirdPage">
          <h1 id="upload_success_message">
            영상이 성공적으로 업로드 되었습니다
          </h1>
          <h3 id="upload_success_message2">
            (영상은 관리자가 검수한 후 게시됩니다)
          </h3>
        </div>
      </div>
    );
  }
}
export default UploadVideoThirdPage;
