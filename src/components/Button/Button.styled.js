import styled from "styled-components";

export const AddBtn = styled.button`
  width: 130px;
  height: 46px;

  padding: ${(p) => p.theme.space(2)};

  font-family: "Poppins";
  font-size: ${(p) => p.theme.fontSizes.xl}px;
  line-height: 24px;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.lightBgColor};
  color: ${(p) => p.theme.colors.whiteText};

  border: 1px solid #22252a;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(19, 45, 74);
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    outline: none;
  }
`;

export const VoteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${(p) => (p.option === "Upvotes" ? "#5fc49a" : "#ce0316")};
    outline: none;
  }
`;
