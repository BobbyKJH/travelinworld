import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Map = styled.div`
  font-family: "Gugi", cursive;
  overflow: hidden;
  background-position: center;
  width: 250px;
  height: 160px;
  margin: 20px;
  display: inline-block;
  border: 1px solid black;
  text-align: center;
`;
const Img = styled.img`
  width: 250px;
  height: 130px;
`;
const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

function Country({ local }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(local)
      .then((response) => response.json())
      .then((json) => {
        setCountry(json.data);
      });
  }, [country]);
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      {country.map((map) => (
        <Map key={map.country_nm}>
          <Img src={map.download_url} alt={map.country_nm} />
          <Name>{map.country_nm}</Name>
        </Map>
      ))}
    </div>
  );
}

export default Country;
