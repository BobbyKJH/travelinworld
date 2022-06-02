import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Navigation
const Conainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

// Home Navigation
const HomeLink = styled.div`
  font-family: "Gugi", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1.5rem;
  color: #ffff;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

// Navigation
const NavLink = styled.div`
  font-family: "Gugi", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 0 5px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 550px) {
    font-size: 3px;
  }
`;
// SignIn Link
const SignLink = styled.div`
  font-family: "Gugi", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  padding: 0 0.5rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    font-size: 0.3rem;
  }
`;

function Navigation() {
  return (
    <Conainer>
      <HomeLink>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          HOME
        </Link>
      </HomeLink>

      <NavLink>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          계획
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          추천
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/country" style={{ color: "#fff", textDecoration: "none" }}>
          나라
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          대륙
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/exchange" style={{ color: "#fff", textDecoration: "none" }}>
          환전
        </Link>
      </NavLink>
      <SignLink>
        <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
          MY PROFILE
        </Link>
      </SignLink>
    </Conainer>
  );
}

export default Navigation;
