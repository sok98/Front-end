import React from "react";
import axios from "axios";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import ListItemBox from "./ListItemBox.js";

import "./ListPage.css";

function ListPage() {
  let body = {
    searchword: localStorage.getItem("searchword"),
  };

  axios
    .post("http://localhost:5050/api/searchword/title", body)
    .then((response) => {
      console.log(response);
    });

  return (
    <div>
      <Header />
      <Navi />
      <div className="ListPage">
        <ListItemBox />
      </div>
    </div>
  );
}

export default ListPage;
