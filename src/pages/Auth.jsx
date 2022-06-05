import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { authService, firebaseInstance } from "../fBase";

const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

// 전체 박스
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  border: 5px solid black;
  border-radius: 20px;
  width: 600px;
  height: 500px;
`;

const Title = styled.h1`
  font-family: "Gugi", cursive;
  display: block;
  margin: 0;
  margin-bottom: 50px;
  padding: 20px;
  color: #fff;
  background-color: #000;
`;
// input css
const Input = styled.input`
  border: 3px solid #000;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 350px;
  height: 30px;
  &:focus {
    border: 5px solid #3d33dd;
  }
`;

// LogInBtn css
const LogInBtn = styled.input`
  font-family: "Gugi", cursive;
  box-sizing: border-box;
  display: block;
  border: none;
  margin: 20px auto;
  width: 300px;
  height: 30px;
`;

// 깃헙 구글 로그인
const OtherLogIn = styled.button`
  display: inline-block;
  font-family: "Gugi", cursive;
  box-sizing: border-box;
  border: none;
  width: 50%;
  height: 30px;
`;
// 로그인 회원가입 선택 버튼 css
const SelectSign = styled.button`
  font-family: "Gugi", cursive;
  display: block;
  border: none;
  margin: 0 auto;
  width: 100%;
  height: 30px;
`;

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const idRef = useRef(null);

  // email 과 password onChange
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    // console.log(value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // form onSubmit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // data 정의
      let data;
      if (newAccount) {
        //new Account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        //Log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      // 조건에 맞는 data 출력
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // 회원가입 or 로그인 화면 선택
  const Sign = () => {
    setNewAccount((prev) => !prev);
  };

  //구글 & 깃헙 로그인
  const onSocailClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  // 렌더링 focus email
  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <Total>
      <Container>
        <Title>Travel In World</Title>
        {/* 로그인 창 */}
        <form onSubmit={onSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
            ref={idRef}
          />
          {/* 패스워드 입력 */}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          {/* 로그인 회원가입 버튼 */}
          <LogInBtn type="submit" value={newAccount ? "회원가입" : "로그인"} />
          {error}
        </form>

        {/* 깃헙 & 구글  */}
        <div>
          <OtherLogIn name="google" onClick={onSocailClick}>
            Google
          </OtherLogIn>
          <OtherLogIn name="github" onClick={onSocailClick}>
            Github
          </OtherLogIn>
        </div>

        {/* 로그인 & 회원가입 버튼 */}
        <SelectSign onClick={Sign}>
          {newAccount ? "로그인" : "회원가입"}
        </SelectSign>
      </Container>
    </Total>
  );
}

export default Auth;
