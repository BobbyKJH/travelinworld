import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  font-family: "Gugi", cursive;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
  width: 100px;
  padding: 10px;
  background-color: #000;
  color: #fff;
`;
function CountryDetail() {
  const id = useParams();
  const nav = useNavigate();
  console.log(id);

  return (
    <div>
      {/* {country.map((map) =>()} */}
      <Btn
        onClick={() => {
          nav("/country");
        }}
      >
        오륜기
      </Btn>
    </div>
  );
}

export default CountryDetail;
