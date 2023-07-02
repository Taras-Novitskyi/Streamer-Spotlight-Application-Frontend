import { useLocation } from "react-router-dom";

import {
  StyledLink,
  StyledHeader,
  StyledNav,
} from "../Header/Header.styled";

import { Container } from "../Container/Container";

export const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Container>
          <StyledNav>
            <StyledLink path={location.pathname} to="/">
              Home
            </StyledLink>
          </StyledNav>
      </Container>
    </StyledHeader>
  );
};
