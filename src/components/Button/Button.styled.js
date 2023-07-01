import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SingInBtn = styled(NavLink)`
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

export const RegistrationBtn = styled(NavLink)`
  display: block;
  padding: 11px 24px;
  width: 132px;
  background-color: ${(p) => p.theme.colors.firstAccentColor};
  color: ${(p) => p.theme.colors.footerText};
  font-family: "Poppins";
  font-size: ${(p) => p.theme.fontSizes.l}px;
  line-height: 21px;
  text-align: center;
  border: ${(p) => p.theme.border.greenBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 20px 44px;
    width: 184px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.secondAccentColor};
    border: ${(p) => p.theme.border.blackBtnBorder};
    outline: none;
  }
`;

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

  border: ${(p) => p.theme.border.blackBtnBorder};
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

export const ButtonUp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(p) => (p.isButtonUp ? 1 : 0)};
  pointer-events: ${(p) => (p.isButtonUp ? "auto" : "none")};
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  background: transparent;
  border: 2px solid ${(p) => p.theme.colors.firstAccentColor};
  border-radius: 50%;
  font-size: 30px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
    color: ${(p) => p.theme.colors.lightGreenText};
    border: 2px solid transparent;
    background-color: ${(p) => p.theme.colors.lightBgColor};
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    bottom: 100px;
    right: 50px;
    height: 70px;
    width: 70px;
    font-size: 50px;
    bottom: 100px;
  }
`;

export const BackTorecipeBtn = styled(NavLink)`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background-color: ${(p) => p.theme.colors.secondAccentColor};
  color: ${(p) => p.theme.colors.mainBgColor};
  font-family: "Poppins";
  font-size: ${(p) => p.theme.fontSizes.l}px;
  font-weight: medium;
  line-height: 15px;
  border: ${(p) => p.theme.border.blackBtnBorder};
  border-radius: 24px 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    margin-bottom: 120px;
    padding: 11px 32px;
    bottom: 28px;
    right: 24px;
    width: 190px;
    height: 50px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 150px;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.firstAccentColor};
    border: ${(p) => p.theme.border.greenBtnBorder};
    outline: none;
  }
`;
