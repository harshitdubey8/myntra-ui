import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselHome() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      stopOnHover={true}
      showStatus={false}
      showIndicators={false}
    >
      <CarouselItem>
        <Carouselimg src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/c89495bf-c1f3-4c0f-862b-8a3c223d4a561653399091454-Sports---Casual-Shoes_Desk.jpg" />
      </CarouselItem>
      <CarouselItem>
        <Carouselimg src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ba5790ef-6bfe-427c-8b13-739320e1cba11652015668956-Kurtas---Sets_Desk.jpg" />
      </CarouselItem>
      <CarouselItem>
        <Carouselimg src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/b83abadd-48d9-4df9-93fa-6a0d090d5ee31652015784857-Trendy-Heels_Desk.jpg" />
      </CarouselItem>
    </Carousel>
  );
}

export default CarouselHome;

const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
`;
const Carouselimg = styled.img`
  width: 100%;
  height: 400px;
`;
