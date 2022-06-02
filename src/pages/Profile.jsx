import React from "react";
import styled from "styled-components";
// Home으로 이동
import { useNavigate } from "react-router-dom";
import { authService } from "../fBase";

// Box
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// LogOut Btn
const LogOut = styled.button`
  font-family: "Gugi", cursive;
  display: block;
  border: 5px solid black;
  border-radius: 20px;
  background-color: white;
  font-size: 20px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  transition: 1s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

function Profile() {
  const nav = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    // 로그아웃뒤 홈으로 돌아간다.
    nav("/");
  };

  return (
    <Container>
      <LogOut onClick={onLogOutClick}>Log Out </LogOut>
    </Container>
  );
}

export default Profile;
