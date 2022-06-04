import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: block;
`;
// 환전 계산기
const Title = styled.h1`
  font-family: "Gugi", cursive;
  text-align: center;
`;
// 금앣 작성
const Input = styled.input`
  display: block;
  margin: 10px auto;
  width: 400px;
  padding: 10px;
  -webkit-appearance: none;
  text-align: center;
  box-shadow: 10px 10px 10px 0;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
// 환전 통화 선택
const ExchangeSelect = styled.select`
  display: block;
  margin: 0 auto;
  width: 400px;
  height: 30px;
  text-align: center;
  padding: 10px;
  box-sizing: content-box;
  box-shadow: 10px 10px 10px 0;
  font-family: "Gugi", cursive;
`;

const ExchangeOption = styled.option`
  vertical-align: middle;

  &:hover {
    background-color: black;
  }
`;

const ExchangeNum = styled.h1`
  display: block;
  text-align: center;
  margin: 90px 0;
`;
const Span = styled.span`
  font-size: 24px;
`;

function Exchange() {
  const [exchange, setExchange] = useState([]);
  const [num, setNum] = useState(1);
  const [select, setSelect] = useState("");

  const numRef = useRef(null);

  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    if (name === "num") {
      setNum(value);
    } else if (name === "select") {
      setSelect(value);
    }
  };

  function numberWithCommas(num) {
    if (num < 10000) {
      return num
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  useEffect(() => {
    axios.get("https://bobbykjh.github.io/exchange.json").then((res) => {
      setExchange(res.data.list);
    });
  }, []);

  useEffect(() => {
    setNum(1);
    numRef.current.focus();
  }, [select]);
  return (
    <Container>
      {/* 제목 */}
      <Title>환전 계산기</Title>
      {/* 환전 리스트 */}
      <ExchangeSelect value={select} onChange={onChange} name="select">
        {exchange.map((ex) => (
          <ExchangeOption value={ex.sale} key={ex.id}>
            {ex.currencyname} {ex.sign}
          </ExchangeOption>
        ))}
      </ExchangeSelect>
      {/* 계산 금액 */}
      <ExchangeNum>
        {numberWithCommas(select * num)}
        <Span>원</Span>
      </ExchangeNum>

      <br />
      <Input
        type="number"
        onChange={onChange}
        name="num"
        value={num}
        placeholder="금액을 입력해주세요."
        ref={numRef}
      />
    </Container>
  );
}

export default Exchange;
