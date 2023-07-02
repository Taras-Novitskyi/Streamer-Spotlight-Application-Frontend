import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex; 
  align-items: center;

  height: ${(p) => p.theme.space(15)};
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  color: ${(p) => p.theme.colors.whiteText};

  &.active {
    color: ${(p) => p.theme.colors.lightBgColor};
  }

  &:hover,
  :focus {
    color: ${(p) => p.theme.colors.lightBgColor};
  }
`;
