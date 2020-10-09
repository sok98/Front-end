import React, { Component } from "react";
import axios from "axios";

//import "./ListItemBox.css";

class ListItemBox extends Component {
  state = {};

  render() {
    console.log(Itemcard);
    const { Itemcard } = this.props;
    return (
      <div>
        <ul className="ListItemBox">
          {Itemcard &&
            Itemcard.map((itemdata) => {
              return (
                <li className="itemtable">
                  <img src={itemdata.thumbnail} className="item_image" alt="" />
                  <p>
                    타이틀 :{" "}
                    <span className="text--brand">{itemdata.videotitle}</span>
                  </p>
                  <p>업로더 : {itemdata.uploader}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
export default ListItemBox;
