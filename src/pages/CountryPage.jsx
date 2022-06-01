import React from "react";
import styled from "styled-components";
import Country from "../components/CountryList/Country";
import CountryList from "../components/CountryList/CountryList";

const Container = styled.div`
  display: black;
  width: 99%;
  margin: 0 auto;
  border: 5px solid aqua;
`;

function CountryPage() {
  return (
    <Container>
      <CountryList />
      {/* <Country /> */}
    </Container>
  );
}

export default CountryPage;
