import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul``;

export const Item = styled.li`
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: space-between; */

  margin-bottom: ${(p) => p.theme.space(4)};

  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.lightBgColor};
  color: ${(p) => p.theme.colors.whiteText};

  border-radius: ${(p) => p.theme.space(2)};
  border-bottom: 1px solid ${(p) => p.theme.colors.lightBgColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.mainBgColor};
    border-bottom: 1px solid ${(p) => p.theme.colors.accentColor};
    outline: none;
  }
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;

  padding-right: ${(p) => p.theme.space(4)};
  padding-left: ${(p) => p.theme.space(4)};

  background-color: transparent;
  color: ${(p) => p.theme.colors.footerText};

  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: 21px;
`;

export const DataName = styled.div`
  display: flex;
  flex-grow: 1;

  background-color: transparent;
  color: ${(p) => p.theme.colors.darkBgColor};

  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: 21px;
  font-weight: 600;
`;

export const Votes = styled.div`
  display: flex;

  padding: ${(p) => p.theme.space(4)};
`;

export const VotesItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: ${(p) => p.theme.space(4)};
  }
`;

export const VotesCount = styled.p`
  margin-right: ${(p) => p.theme.space(2)};

  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: 21px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.darkBgColor};
`;

export const UpvotesIcon = styled.div`
  display: flex;
  align-items: center;
  color: #5fc49a;
`;

export const DownvotesIcon = styled.div`
  display: flex;
  align-items: center;
  color: #ce0316;
`;
