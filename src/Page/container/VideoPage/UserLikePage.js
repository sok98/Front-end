import React, { Component, state } from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./ListPage.css";

class UserLikePage extends Component {
  userid = localStorage.getItem("userid");
  state = {
    ItemList: [],
  };

  loadItem = async () => {
    console.log("loadItem 들어옴");

    axios
      .get("http://wordballoon.net:5050/api/searchword/mylike/" + this.userid)
      .then((response) => {
        console.log("axios 들어옴");
        console.log(response);
        this.setState({
          ItemList: response.data,
        });
      });
  };

  componentDidMount() {
    this.loadItem();
  }

  render() {
    const { ItemList } = this.state;
    console.log("ItemList 확인");
    console.log(ItemList);
    return (
      <div className="scroll">
        <Header />
        <Navi />
        <div className="UserLikePage">
          <p>{this.searchword} 내가 좋아요 한 영상 :</p>
          <ul className="ListItemBox">
            {ItemList &&
              ItemList.map((itemdata) => {
                return (
                  <div>
                    <a href={`/View/${itemdata.videoid}`}>
                      <div class="aaa">
                        <div id="item_image">
                          <img
                            width="250px"
                            height="150px"
                            src={itemdata.thumbnail}
                            id="item_img"
                            alt=""
                          />
                        </div>
                        <div id="item_info">
                          <p id="item_title">{itemdata.videotitle}</p>
                          <p id="item_uploader">{itemdata.uploader}</p>
                          <p id="item_view">조회수 : {itemdata.view}</p>
                          <p id="item_like">❤ {itemdata.videolike}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
export default UserLikePage;
