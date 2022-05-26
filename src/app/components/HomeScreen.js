import React from "react";
import CarouselHome from "./CarouselHome";
import styled from "styled-components";
import DealOfTheDay from "./DealOfTheDay";
import NewInTopBrands from "./NewInTopBrands";
import NewArrivals from "./NewArrivals";
function HomeScreen() {
  return (
    <Home>
      <CarouselHome />
      <DealOfTheDay />
      <NewInTopBrands />
      <NewArrivals />
    </Home>
  );
}

export default HomeScreen;

const Home = styled.section`
  margin-top: 30px;
`;
