import React, { useEffect, useState } from "react";
import { Card, Avatar, Col, Typography, Row } from "antd";
import axios from "axios";
import "./TopVideoBox.css";
const { Title } = Typography;

function TopVideoBox() {
  const [Videos, setVideos] = useState([]);
  console.log(localStorage.getItem("userid"));

  /*useeffect()가 아마도 화면이 띄어을떄 */
  useEffect(() => {
    axios.get("http://localhost:5050/api/main/viewtop").then((response) => {
      console.log("axio된건가?");
      console.log(response);
      if (response.data) {
        console.log("if문 안");

        /*콘솔로 찍어보기 */
        for (var i = 0; i < response.data.length; i++) {
          var id = response.data[i].videoid;
          var title = response.data[i].videotitle;
          var link = response.data[i].videolink;
          var thum = response.data[i].thumbnail;
          console.log(id);
          console.log(title);
          console.log(link);
          console.log(thum);
        }
        setVideos(response.data);
      } else {
        alert("Failed to get Videos");
        console.log("else문 안");
      }
    });
  }, []);

  /*6개가 넘어오기떄문에*/
  const renderCards = Videos.map((video, index) => {
    return (
      <div id="topsix_in">
        <a href={`/View/${video.videoid}`}>
          <div id="topvideo_thumb_title">
            <img
              id="topvideo_thumb"
              alt="thumbnail"
              src={`${video.thumbnail}`}
            />
            <p id="topvideo_title">{`${video.videotitle}`}</p>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div class="TopVideoBox">
      <Title level={2} id="topvidebox_title">
        실시간 인기영상
      </Title>
      <hr />
      <div class="topsix_out">{renderCards}</div>
    </div>
  );
}
export default TopVideoBox;
