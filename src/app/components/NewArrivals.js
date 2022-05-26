import React from "react";
import styled from "styled-components";

function NewArrivals() {
  return (
    <NewArrivalsSection>
      <NewHeading>DEAL ON LATEST ARRIVALS</NewHeading>
      <ArrivalImg src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/02068605-5f9f-404a-8b1d-87eaaba283e71646914652766-SS22-PricingCoupon-600Off--1-.gif" />
      <ArrivalImg src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/6160db76-ee07-49bc-8337-1fc74dd94c2a1646914679466-SS22-PricingCoupon-500Off--1-.gif" />
      <ArrivalImg src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/2a0effa7-c662-45c8-8084-96cdea0710c21646911018691-unisex-1499.gif" />
      <ArrivalImg src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/a1690ca9-bcec-469d-b15b-991b3dad64bc1646910870888-SS22-StripBanners-UnisexUnder999.gif" />
    </NewArrivalsSection>
  );
}

export default NewArrivals;

const NewArrivalsSection = styled.section``;
const NewHeading = styled.h1`
  color: #3e4152;
  letter-spacing: 0.15em;
  font-size: 1.8em;
  margin: 50px 10px 10px 30px;
  max-height: 5em;
  font-weight: 500;
`;
const ArrivalImg = styled.img`
  height: 250px;
  width: 758px;
`;
