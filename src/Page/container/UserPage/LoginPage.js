import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../../image/namelogo_clean.PNG";

import "./form.css";

function LoginPage({ history }) {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(Id);
    console.log(Password);

    let body = {
      userid: Id,
      password: Password,
    };

    axios
      .post("http://localhost:5050/api/auth/login", body)
      .then((response) => {
        //console.log(url);
        console.log(response);
        if (response.data.name) {
          localStorage.setItem("userid", response.data.userid);
          localStorage.setItem("password", response.data.password);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("birth", response.data.birth);
          localStorage.setItem("isadmin", response.data.isadmin);
          alert("로그인 성공");
          console.log(response.data);
          history.push("/");
        } else {
          alert(response.data); /*message: 가입되지 않은 회원, 비번 다름 등*/
        }
      });
  };
  return (
    <div>
      {/*로고*/}
      <div class="top_logo">
        <Link to="/">
          <img src={logo} id="logo_loginpage" />
        </Link>
      </div>

      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        {/*로그인 */}
        <div class="Login">
          {/*아이디*/}
          <input id="ID" value={Id} onChange={onIdHandler} placeholder="ID" />

          {/*비밀번호*/}
          <input
            id="PW"
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            placeholder="PASSWORD"
          />

          {/*로그인버튼*/}
          <div>
            <button id="Login_btn">WORDBALLON 로그인</button>
          </div>
        </div>

        {/*회원가입*/}
        <div>
          <Link to="/Join" id="join_us">
            <u>회원가입하기</u>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
