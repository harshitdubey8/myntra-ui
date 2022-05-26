import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Header() {
  return (
    <HeaderContainer>
      <MyntraLogo src={"https://images.indianexpress.com/2021/01/myntra.png"} />

      <LinksContainer>
        {/* <NavItem to="/">MEN</NavItem>
        <NavItem to="/">WOMEN</NavItem>
        <NavItem to="/"> KIDS</NavItem>
        <NavItem to="/">HOME andLIVING</NavItem> */}

        <NavItem>MEN</NavItem>
        <NavItem>WOMEN</NavItem>
        <NavItem>KIDS</NavItem>
        <NavItem>HOME & LIVING</NavItem>
        <NavItem>BEAUTY</NavItem>
        <NavItem>STUDIO</NavItem>
      </LinksContainer>

      <SearchSection>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="search for products brands and more"
        />
      </SearchSection>

      <IconSections>
        <IconLinks>
          <PermIdentityIcon />
          <IconText>Profile</IconText>
        </IconLinks>
        <IconLinks>
          <FavoriteBorderOutlinedIcon />
          <IconText>Wishlist</IconText>
        </IconLinks>
        <IconLinks>
          <ShoppingBagOutlinedIcon />
          <IconText>Bag</IconText>
        </IconLinks>
      </IconSections>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 85px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  z-index: 99;
  position: sticky;
  top: 0;
  padding: 0px 10px 0px 10px;
  width: 100%;
  background-color: #fff;
`;

const MyntraLogo = styled.img`
  width: 120px;
  height: 65px;
`;

const LinksContainer = styled.nav`
  display: flex;
  justify-content: center;

  align-items: space-between;
`;

const NavItem = styled.h3`
  position: relative;
  display: flex;

  text-decoration: none;
  color: BLACK;
  font-weight: 500;
  font-size: 14px;
  padding: 7px 14px;

  :hover {
    border-bottom: solid 3px red;
  }
`;

const SearchSection = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f6;
  padding-left: 20px;
  height: 50px;
`;

const SearchInput = styled.input`
  border-width: 0;
  width: 500px;
  height: 25px;
  outline-width: 0;
  color: #fff;
  font-size: 13px;
  background-color: #f5f5f6;
  padding: 8px 10px 10px;
  color: black;
`;

const IconSections = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  padding-right: 30px;
`;
const IconLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > .MuiSvgIcon-root {
    font-size: 24px;
    margin-bottom: -10px;
  }
`;

const IconText = styled.h3`
  font-size: 10px;
`;
