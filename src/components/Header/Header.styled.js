import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: ${(p) => p.theme.space(4.5)};
  height: ${(p) => p.theme.space(11.5)};
  background-color: transparent;

  @media (min-width: 1440px) {
    margin-top: ${(p) => p.theme.space(3.5)};
  }
`;

export const HeaderWrapper = styled.section`
  display: flex;
  height: 46px;
`;

export const StyledNav = styled.nav`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
    margin-left: 187px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${({ path, category }) =>
    path.includes("recipe")
      ? "#23262A"
      : category
      ? category.some((value) => path.includes(value))
        ? (p) => p.theme.colors.firstAccentColor
        : (p) => p.theme.colors.itemTextColor
      : (p) => p.theme.colors.itemTextColor};
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &.active {
    color: #8baa36;
  }

  &:hover,
  :focus {
    color: #8baa36;
  }
`;
