import React, { useState } from "react";
import styled from "styled-components";

import World from "../../image/World.png";
import Asia from "../../image/Asia.gif";
import NorthAmerica from "../../image/NorthAmerica.gif";
import SouthAmerica from "../../image/SouthAmerica.gif";
import Oceania from "../../image/Oceania.gif";
import Europe from "../../image/Europe.gif";
import Africa from "../../image/Africa.gif";

const Container = styled.div`
  display: block;
`;

const Separation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorldImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 50vw;
  height: 37vw;
`;

const Continent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100vw;
  height: 60vh; */
`;

const Btn = styled.button`
  font-family: "Gugi", cursive;
  display: block;
  border: none;
  border-radius: 20px;
  margin: 10px 20px;
  width: 100px;
  height: 30px;
`;

function Continents() {
  // 세계지도
  const [continents, setContinents] = useState("asia");
  const All = () => setContinents(World);
  // 유럽
  const eu = () => setContinents(Europe);
  // 아시아
  const asia = () => setContinents("asia");
  // 아프리카
  const africa = () => setContinents(Africa);
  // 오세아니아
  const oceania = () => setContinents(Oceania);
  // 북미
  const america = () => setContinents("america");

  return (
    <Container>
      <Separation>
        <Btn onClick={All}>세계지도</Btn>
      </Separation>
      <Separation>
        <Btn onClick={eu}>유럽</Btn>
        <Btn onClick={asia}>아시아</Btn>
        <Btn onClick={africa}>아프리카</Btn>
      </Separation>
      <Separation>
        <Btn onClick={oceania}>오세아니아</Btn>
        <Btn onClick={america}>북 아메리카</Btn>
      </Separation>

      <Continent>
        {continents === "america" && (
          <>
            <WorldImg src={NorthAmerica} />
            <WorldImg src={SouthAmerica} />
          </>
        )}
        {continents === "asia" && <WorldImg src={Asia} />}
      </Continent>
    </Container>
  );
}

export default Continents;
