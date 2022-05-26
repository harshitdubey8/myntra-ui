import React from "react";
import styled from "styled-components";

function NewInTopBrands() {
  return (
    <NewInTopBrandsSection>
      <BrandsHeading>NEW IN TOP BRANDS</BrandsHeading>
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/96b79372-852b-4e41-904a-ffc47f840d171645860227477-SS22-BestOfBrands-Levis.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/ae3f2d8b-4f02-40ab-8233-d9ab9c7be4941645860227438-SS22-BestOfBrands-CKJeans.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/823d5fd5-48e6-4eb1-bd66-1ea70306275a1645860227498-SS22-BestOfBrands-Metro.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg" />
      <BrandImage src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/b69656bd-7766-45db-96ea-d45df19a7a361645860227484-SS22-BestOfBrands-LP.jpg" />
    </NewInTopBrandsSection>
  );
}

export default NewInTopBrands;

const NewInTopBrandsSection = styled.section``;

const BrandImage = styled.img`
  height: auto;
  width: 187px;
`;

const BrandsHeading = styled.h1`
  color: #3e4152;
  letter-spacing: 0.15em;
  font-size: 1.8em;
  margin: 50px 0 10px 30px;
  max-height: 5em;
  font-weight: 500;
`;
