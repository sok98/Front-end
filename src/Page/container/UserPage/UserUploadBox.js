import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

import "./UserUploadBox.css";

function UserUploadBox() {
    const [Videos, setVideos] = useState([]);

    var userid = localStorage.getItem("userid");
    console.log("아이디 확인");
    console.log(userid);

    let body = {
        userid: userid
    }

    useEffect(() => {
        axios.post("http://localhost:5050/api/mypage/uploader", body)
            .then(response => {
                console.log("uploader axio된건가?")
                console.log(response);
                if (response.data) {
                    console.log("uploader if문 안")

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
                    alert('uploader else문 안')
                }
            })
    }, []);


    const renderCards = Videos.map((video, index) => {
        return (
            <div id="useruploadbox_in">
                <a href={`/View/${video.videoid}`}>
                    <div id="useruploadbox_thumb_title">
                        <img
                            id="userupload_thumb"
                            alt="thumbnail"
                            src={`${video.thumbnail}`}
                        />
                        <div id="userupload_title">{`${video.videotitle}`}</div>
                        <div id="userupload__view">조회수 : {video.view}</div>
                        <div id="userupload__like">❤ {video.videolike}</div>
                    </div>
                </a>
            </div>
        );
    });

    return (
        <div className="useruploadbox">
            <h3 id="useruploadbox_title">내가 업로드한 영상들</h3>
            <hr />
            <div class="useruploadbox_out">{renderCards}</div>
        </div>
    );
}

export default UserUploadBox;