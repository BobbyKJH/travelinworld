import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { authService } from "../fBase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogOut = styled.button`
  font-family: "Gugi", cursive;
  display: block;
  font-size: 2rem;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
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
