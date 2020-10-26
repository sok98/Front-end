import React, { useEffect, useState, setState } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./Admin.css";

function Admin2Page(props) {
  const videoid = props.match.params.videoid;
  const [Video, setVideo] = useState([]);
  const [FilePath, setFilePath] = useState(null);
  console.log(videoid);

  useEffect(() => {
    axios
      .get("http://wordballoon.net:5050/api/admin/edit/" + videoid)
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

      <div className="AdminPage">
        <h2 id="admin2_title">스크립트 확인하기</h2>
        <video
          src={`${Video.videolink}`}
          controls
          width="850px"
          height="500px"
        ></video>
        <div>
          <h3>
            {" "}
            1.{" "}
            <span>
              <a href={`${Video.subtitle}`}>스크립트를 다운로드</a>
            </span>
            해주세요.
          </h3>
          <h3>2. 위 동영상과 비교하며 스크립트를 확인해주세요.</h3>
          <h3>3. 수정사항이 있으면 변경 후 저장해주세요.</h3>
          <h3>
            4. 확인이 완료되었으면 확인 완료 버튼을 눌러주세요.
            <button onClick={submitHandler} id="admin2_btn">
              확인 완료
            </button>
          </h3>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Admin2Page;
