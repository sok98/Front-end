import React, { Component } from "react";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

class ListPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div> 리스트 페이지 </div>
      </div>
    );
  }
}
export default ListPage;
