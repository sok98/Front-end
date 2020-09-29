import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../image/namelogo_clean.PNG";

import "./form.css";
import "./form_add.css";

function ChangePage() {
  const [Password, setPassword] = useState("");

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onPWCheckHandler = (event) => {
    console.log("핸들러 들어옴");
    event.preventDefault();

    let body = {
      userid: localStorage.getItem("userid"),
      password: Password,
    };

    Axios.post("", body).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      {/*로고*/}
      <div class="top_logo">
        <Link to="/">
          <img src={logo} id="logo_joinpage" />
        </Link>
      </div>

      {/*정보변경 */}
      <div class="Change">
        {/*기존 PW*/}
        <div class="PW_before">
          <input
            id="PW_now"
            type="password"
            placeholder=" 기존 PASSWORD"
            onChange={onPasswordHandler}
          ></input>
          <button id="PW_check_btn" onClick={onPWCheckHandler}>
            확인
          </button>
        </div>
        {/*변경 pw*/}
        <div>
          <input
            id="PW_change"
            type="password"
            placeholder=" 변경 PASSWORD"
          ></input>
        </div>
        <div>
          <input
            id="PW_check"
            type="password"
            placeholder=" PASSWORD 확인"
          ></input>
        </div>
        {/*이름,생년월일*/}
        <div class="personal">
          <input id="User_name" type="text" placeholder=" 사용자 이름"></input>
          <input
            id="User_bityhday"
            type="date"
            placeholder=" 생년월일(6자리)"
          ></input>
        </div>
        {/*완료버튼*/}
        <div>
          <button id="Change_btn" type="submit">
            정보변경 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePage;
