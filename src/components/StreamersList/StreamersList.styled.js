import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul``;

export const Item = styled.li`
  /* width: 100%; */

  padding: ${(p) => p.theme.space(2)};

  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.lightBgColor};
  color: ${(p) => p.theme.colors.whiteText};

  border: ${(p) => p.theme.border.blackBtnBorder};
  border-radius: ${(p) => p.theme.space(2)};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(19, 45, 74);
    /* border: ${(p) => p.theme.border.greenBtnBorder}; */
    border: 1px solid #5fc49a;
    outline: none;
  }
`;

export const ItemLink = styled(NavLink)`
  display: block;
  padding: 10px 24px;
  background-color: transparent;
  color: ${(p) => p.theme.colors.footerText};
  font-family: "Poppins";
  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: 21px;
  border: 2px solid #fafafa;
  border-radius: 24px 44px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 19px 44px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    padding: 20px 44px;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.firstAccentColor};
    border: 2px solid #8baa36;
    outline: none;
  }
`;
