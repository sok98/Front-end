import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../../image/namelogo_clean.PNG";

import "./form.css";
import "./form_add.css";
let count = 0;

function JoinPage({ history }) {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [PassworddoubleChek, setPassworddoubleChek] = useState("");
  const [Name, setName] = useState("");
  const [Birthday, setBirthday] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onIDCheckHandler = (event) => {
    event.preventDefault();
    console.log("핸들러")
    let body = {
      userid: Id,
      password: "",
      name: "",
      birth: "",
    };
    console.log("렛 바디 이후임")
    axios.post("http://localhost:5050/api/auth/register", body)
      .then(response => {
        console.log("axio된건가?")
        console.log(response.data.success)
        if (response.data.success) {
          console.log("if안입니다")
          alert("사용 가능한 아이디 입니다")
          count = 1;
          /*localStorage.setItem('cnt', count);*/
          /*console.log(localStorage.setItem('cnt', count));*/
          console.log("중복확인버튼if의count" + count)
          return count;
        } else {
          console.log("else안입니다")
          alert("중복입니다");
          console.log("중복확인버튼else의count" + count)
        }
      })
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onPasswordCheckHandler = (event) => {
    setPassworddoubleChek(event.currentTarget.value);

  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onBirthdayHandler = (event) => {
    setBirthday(event.currentTarget.value);
  };
  console.log("서브미트바깥의count" + count)
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("서브미트핸들러")
    console.log("서브미트안의count" + count)
    /*const cat = localStorage.getItem("doubleckeckid");//cat에 값이 없으면 중복체크 안한거
    console.log(cat)*/
    if (count !== 1) { // 조건 1. 아이디 중복체크를 통해서 중복확인버튼을 누른경우 count=1이다.
      console.log("if2 안입니다")
      alert("아이디 중복확인을 해주세요")
      console.log("서브미트안의count가1이 아닐경우의" + count)
    } else if (!Password || !PassworddoubleChek || !Name || !Birthday) {// 조건 2. 필수 항목중에 하나라도 빈 값이 있으면
      console.log("else if2 안입니다")
      alert("필수항목을 작성해주세요")
    } else if (Password !== PassworddoubleChek) {
      console.log("elseif2비번 안입니다")
      alert("비밀번호가 일치하지 않습니다")
    }
    else {
      console.log("else 2 안입니다")
      let body = {
        userid: Id,
        password: Password,
        name: Name,
        birth: Birthday,
      };
      console.log("렛 바디2 이후임")
      axios.post("http://localhost:5050/api/auth/register", body)
        .then(response => {
          if (response.status === 400) { // 응답이 왔을때 무언가 오류가 있다면(400이 떴다면 )
            alert('다시 한 번 확인해주세요!')
          } else { // 아니라면 가입 완료!
            alert('가입 완료 !');
            history.push("/Login"); //로그인이 되면 메인페이지로 이동
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
        {/*회원가입 */}
        <div class="Join">
          {/*아이디*/}
          <div class="ID">
            <input id="ID" value={Id} onChange={onIdHandler} placeholder="ID" />
            {/*<button id="ID_check_btn" onChange={onIDCheckHandler}>중복확인</button>*/}
            <button id="ID_check_btn" onClick={onIDCheckHandler}>
              중복확인
            </button>
          </div>
          {/*비밀번호*/}
          <div>
            <input
              id="PW"
              type="password"
              onChange={onPasswordHandler}
              value={Password}
              placeholder="PASSWORD"
            />
          </div>
          {/*비밀번호 확인*/}
          <div>
            <input
              id="PW_check"
              type="password"
              onChange={onPasswordCheckHandler}
              value={PassworddoubleChek}
              placeholder="PASSWORDCHECK"
            />
          </div>
          {/*{this.renderFeedbackMessage()}*/}
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