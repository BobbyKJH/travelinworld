import React, { useState } from "react";
import styled from "styled-components";
import Country from "./Country";
// 전체 박스
const Container = styled.div`
  display: block;
  /* width: 100vw;
  height: 100vh; */
`;
// 버튼 구분
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 오륜기
const OutLineBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  margin: 10px;
  width: 300px;
  height: 300px;
  @media (max-width: 1000px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 820px) {
    width: 230px;
    height: 230px;
  }
  @media (max-width: 700px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

const InLineBtn = styled.div`
  font-family: "Gugi", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  font-size: 24px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  @media (max-width: 1000px) {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 820px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 700px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    width: 90px;
    height: 90px;
  }
`;

// 대륙별 지도 버튼
const CloesBtn = styled.button`
  font-family: "Gugi", cursive;
  display: block;
  color: #fff;
  background-color: #000fff;
  border-radius: 20px;
  border: none;
  margin: 10px auto;
  width: 40%;
  height: 30px;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const CountryBtn = styled.button`
  font-family: "Gugi", cursive;
  color: #fff;
  background-color: #000;
  display: block;
  border-radius: 20px;
  width: 20%;
  padding: 10px;
  margin: 10px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
const CountryBox = styled.div`
  /* background-color: #808080; */
  /* opacity: 0.5; */
`;

function CountryList() {
  const [btn, setBtn] = useState("flex");
  const [country, setCountry] = useState(null);

  // 유럽
  const EU = () => {
    setBtn("none");
    setCountry(`https://bobbykjh.github.io/json/eu.json`);
  };
  // 아프리카
  const Africa = () => {
    setBtn("none");
    setCountry(`https://bobbykjh.github.io/json/africa.json`);
  };
  // 아메리카
  const America = () => {
    setBtn("none");
    setCountry(`https://bobbykjh.github.io/json/america.json`);
  };
  // 아시아
  const Asia = () => {
    setBtn("none");
    setCountry(`https://bobbykjh.github.io/json/asia.json`);
  };
  // 오세아니아
  const Oceania = () => {
    setBtn("none");
    setCountry(`https://bobbykjh.github.io/json/oceania.json`);
  };
  // 오륜기로 돌아가기
  const Close = () => {
    setBtn("flex");
    setCountry(null);
  };

  return (
    <Container>
      {/* 오륜기 버튼 */}
      <Btn style={{ display: btn }}>
        <OutLineBtn style={{ background: "#0067a3" }} onClick={EU}>
          <InLineBtn>유럽</InLineBtn>
        </OutLineBtn>
        <OutLineBtn style={{ background: "#000" }} onClick={Africa}>
          <InLineBtn>아프리카</InLineBtn>
        </OutLineBtn>
        <OutLineBtn style={{ background: "#ff0000" }} onClick={America}>
          <InLineBtn>아메리카</InLineBtn>
        </OutLineBtn>
      </Btn>
      {/* 오륜기 버튼 */}
      <Btn style={{ display: btn }}>
        <OutLineBtn style={{ background: "#fff000" }} onClick={Asia}>
          <InLineBtn>아시아</InLineBtn>
        </OutLineBtn>
        <OutLineBtn style={{ background: "#008000" }} onClick={Oceania}>
          <InLineBtn>오세아니아</InLineBtn>
        </OutLineBtn>
      </Btn>

      {/* 국가 지도 */}
      {country && (
        <>
          {/* 오륜기로 돌아가기 */}
          <CloesBtn onClick={Close}>오륜기</CloesBtn>
          {/* 대륙 선택 */}
          <Btn>
            <CountryBtn onClick={EU} name="eu">
              유럽
            </CountryBtn>
            <CountryBtn onClick={Africa}>아프리카</CountryBtn>
            <CountryBtn onClick={America}>아메리카</CountryBtn>
            <CountryBtn onClick={Asia}>아시아</CountryBtn>
            <CountryBtn onClick={Oceania}>오세아니아</CountryBtn>
          </Btn>
          <CountryBox>
            <Country local={country} />
          </CountryBox>
        </>
      )}
    </Container>
  );
}

export default CountryList;
