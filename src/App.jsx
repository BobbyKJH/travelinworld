import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { authService } from "./fBase";
import AppRouter from "./components/AppRouter";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 48px;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [init, setInit] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  // Login
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogIn(true);
      } else {
        setIsLogIn(false);
      }
      setInit(true);
    });
  });

  return (
    <>
      {init ? <AppRouter isLogIn={isLogIn} /> : <Loading>Loading...</Loading>}
    </>
  );
}

export default App;
