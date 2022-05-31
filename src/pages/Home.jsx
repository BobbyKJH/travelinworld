import React, { useState } from "react";
import styled from "styled-components";

// 전체 박스
const Container = styled.div`
  display: block;
`;

// form
const Form = styled.form`
  display: block;
  text-align: center;
  border: 1px solid black;
`;

// 채팅
const ChatInput = styled.input`
  font-family: "Press Start 2P", cursive;
  display: block;
  margin: 0 auto;
  width: 50%;
  padding: 10px;
`;

// 보내기 버튼
const SendBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 30%;
  font-size: 0.3rem;
  padding: 10px;
`;

function Home() {
  return <Container>ssss</Container>;
}

export default Home;
