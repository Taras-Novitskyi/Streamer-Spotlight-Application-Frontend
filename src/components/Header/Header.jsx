import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  StyledLink,
  StyledHeader,
  HeaderWrapper,
  StyledNav,
} from "../Header/Header.styled";

import { Container } from "../Container/Container";

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <StyledNav>
            <StyledLink path={location.pathname} to="/">
              Home
            </StyledLink>
          </StyledNav>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
