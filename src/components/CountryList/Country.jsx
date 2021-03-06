import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// 국가 박스
const Map = styled.div`
  font-family: "Gugi", cursive;
  display: inline-block;
  color: #000;
  overflow: hidden;
  width: 20%;
  height: 15%;
  margin: 20px;
`;
// 국기 이미지
const Img = styled.img`
  display: block;
  margin: 0 auto;
  box-shadow: 10px 10px 10px 0;
  width: 150px;
  height: 75px;
  @media (max-width: 1040px) {
    width: 100px;
    height: 50px;
  }
  @media (max-width: 700px) {
    width: 70px;
    height: 40px;
  }
`;
// 국가 이름
const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-top: 10px;
  font-size: 18px;
  @media (max-width: 1040px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    font-size: 8px;
  }
`;

function Country({ local }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get(local).then((res) => {
      setCountry(res.data.data);
      console.log(res.data.data);
    });
  }, [country]);

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      {country.map((map) => (
        <Link key={map.id} to={`/country/${map.id}`}>
          <Map>
            <Img src={map.download_url} alt={map.country_nm} />
            <Name>{map.country_nm}</Name>
          </Map>
        </Link>
      ))}
    </div>
  );
}

export default Country;
