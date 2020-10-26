import { Alert } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../image/namelogo_clean.PNG";

import "./form.css";
import "./form_add.css";
let count = 0;

function ChangePage({ history }) {
  const [Password, setPassword] = useState("");
  const [PasswordChange, setPasswordChange] = useState("");
  const [PasswordChangedoubleChek, setPasswordChangedoubleChek] = useState("");
  const [Name, setName] = useState("");
  const [Birthday, setBirthday] = useState("");

  var userid = localStorage.getItem("userid");
  console.log("아이디 확인");
  console.log(userid);

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPWCheckHandler = (event) => {
    console.log("핸들러 들어옴");
    event.preventDefault();

    let body = {
      userid: userid,
      password: Password,
      name: 0,
      birth: 0,
    };

    console.log("렛 바디 이후임");
    axios
      .post("http://localhost:5050/api/auth/update", body)
      .then((response) => {
        console.log("비번체크axio된건가?");
        console.log(response.data.success);
        if (response.data.success) {
          console.log("if1안입니다");
          alert(response.data.message);
          count = 1;
          console.log("if1의count" + count);
          return count;
        } else {
          console.log("else1안입니다");
          alert("비밀번호가 일치하지 않습니다");
          console.log("else1의count" + count);
        }
      });
  };

  const onPasswordChangeHandler = (event) => {
    setPasswordChange(event.currentTarget.value);
  };

  const onPasswordChangeCheckHandler = (event) => {
    setPasswordChangedoubleChek(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onBirthdayHandler = (event) => {
    setBirthday(event.currentTarget.value);
  };

  console.log("서브미트바깥의count" + count);
  /*submit*/
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("서브미트핸들러");
    console.log("서브미트안의count" + count);

    if (count !== 1) {
      // 조건 1. 아이디 중복체크를 통해서 중복확인버튼을 누른경우 count=1이다.
      console.log("if2 안입니다");
      alert("비밀번호확인을 해주세요");
      console.log("서브미트안의count가1이 아닐경우의" + count);
    } else if (
      !PasswordChange ||
      !PasswordChangedoubleChek ||
      !Name ||
      !Birthday
    ) {
      // 조건 2. 필수 항목중에 하나라도 빈 값이 있으면
      console.log("else if2 안입니다");
      alert("필수항목을 작성해주세요");
    } else if (PasswordChange !== PasswordChangedoubleChek) {
      console.log("elseif2비번 안입니다");
      alert("비밀번호가 일치하지 않습니다");
    } else {
      console.log("else 2 안입니다");
      let body = {
        userid: userid,
        password: PasswordChange,
        name: Name,
        birth: Birthday,
      };
      console.log("렛 바디2 이후임");
      axios
        .post("http://localhost:5050/api/auth/update", body)
        .then((response) => {
          if (response.data.success) {
            alert("수정이 완료되었습니다");
            history.push("/");
          } else {
            alert("수정실패");
          }
        });
    }
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
        {/*정보변경 */}
        <div class="Change">
          {/*기존 PW*/}
          <div class="PW_before">
            <input
              id="PW_now"
              type="password"
              value={Password}
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
              onChange={onPasswordChangeHandler}
              value={PasswordChange}
              placeholder=" 변경 PASSWORD"
            ></input>
          </div>
          <div>
            <input
              id="PW_check"
              type="password"
              onChange={onPasswordChangeCheckHandler}
              value={PasswordChangedoubleChek}
              placeholder=" 변경PASSWORD 확인"
            ></input>
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
              placeholder=" 생년월일(6자리)"
            />
          </div>
          {/*완료버튼*/}
          <div>
            <button id="Change_btn" type="submit">
              정보변경 완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePage;
