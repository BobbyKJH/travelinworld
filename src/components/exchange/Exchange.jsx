import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Title = styled.h1`
  font-family: "Gugi", cursive;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: 10px auto;
  width: 500px;
  border: 5px solid #000;
  -webkit-appearance: none;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const ExchangeSelect = styled.select`
  display: block;
  margin: 0 auto;
  width: 500px;
  height: 30px;
  text-align: center;
  -webkit-appearance: none;
  padding: 10px;
  box-sizing: content-box;
`;

const ExchangeOption = styled.option`
  vertical-align: middle;
`;

function Exchange() {
  const [exchange, setExchange] = useState([]);
  const [num, setNum] = useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNum(value);
  };

  useEffect(() => {
    fetch("https://bobbykjh.github.io/exchange.json")
      .then((res) => res.json())
      .then((json) => {
        setExchange(json.list);
      });
  }, [exchange]);

  return (
    <Container>
      <Title>환전 계산기</Title>
      <Input
        type="number"
        onChange={onChange}
        value={num}
        placeholder="금액을 입력해주세요."
      />
      <ExchangeSelect>
        {exchange.map((ex) => (
          <ExchangeOption>
            {ex.통화명} {ex.sign}
          </ExchangeOption>
        ))}
      </ExchangeSelect>
    </Container>
  );
}

export default Exchange;
