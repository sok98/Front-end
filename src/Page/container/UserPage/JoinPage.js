import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../../image/namelogo_clean.PNG";

import "./form.css";
import "./form_add.css";

function JoinPage() {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Birthday, setBirthday] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onIDCheckHandler = (event) => {
    event.preventDefault();
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onBirthdayHandler = (event) => {
    setBirthday(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(Id);
    console.log(Password);
    console.log(Name);
    console.log(Birthday);

    let body = {
      userid: Id,
      password: Password,
      name: Name,
      birth: Birthday,
    };
    axios
      .post("http://localhost:5050/api/auth/register", body)
      .then((response) => {
        //console.log(url);
        console.log(response);
        if (response.data.name) {
          alert("업로드 성공");
          console.log(response.data);
        } else {
          alert(response.data.message);
        }
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

      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        {/*회원가입 */}
        <div class="Join">
          {/*아이디*/}
          <div class="ID">
            <input id="ID" value={Id} onChange={onIdHandler} placeholder="ID" />
            <button id="ID_check_btn" onChange={onIDCheckHandler}>
              중복확인
            </button>
          </div>
          {/*비밀번호*/}
          <div>
            <input
              id="PW"
              value={Password}
              onChange={onPasswordHandler}
              placeholder="PASSWORD"
            />
          </div>
          {/*비밀번호 확인*/}
          <div>
            <input
              id="PW_check"
              value={Password}
              onChange={onPasswordHandler}
              placeholder="PASSWORD"
            />
          </div>
          {/*이름,생년월일*/}
          <div class="personal">
            <input
              id="User_name"
              value={Name}
              onChange={onNameHandler}
              placeholder="사용자 이름"
            />
            <input
              id="User_bityhday"
              value={Birthday}
              onChange={onBirthdayHandler}
              placeholder="생년월일(6자리))"
            />
          </div>
          {/*완료버튼*/}
          <div>
            <button id="Join_btn" type="submit">
              회원가입 완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default JoinPage;
