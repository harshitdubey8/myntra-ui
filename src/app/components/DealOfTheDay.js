import React from "react";
import styled from "styled-components";

function DealOfTheDay() {
  return (
    <DealOfTheDaySection>
      <DealHeading>DEAL OF THE DAY</DealHeading>
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
      <DealImage src="https://assets.myntassets.com/f_webp,w_89,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/64f6b10b-fa39-4739-9853-be13fd09ad4d1653547123025-Buy-2-At-60--Off.jpg" />
    </DealOfTheDaySection>
  );
}

export default DealOfTheDay;

const DealOfTheDaySection = styled.section``;
const DealImage = styled.img`
  height: auto;
  width: 150px;
`;

const DealHeading = styled.h1`
  color: #3e4152;
  letter-spacing: 0.15em;
  font-size: 1.8em;
  margin: 50px 0 10px 30px;
  max-height: 5em;
  font-weight: 500;
`;
