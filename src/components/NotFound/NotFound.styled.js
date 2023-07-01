import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;

  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${(p) => p.theme.colors.whiteText};
  background-color: ${(p) => p.theme.colors.darkBgColor};
`;

export const AlertContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 206px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AlertTextPartOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 32px;
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-top: 32px;
  }
`;

export const AlertTextPartTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 32px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400px;
    margin-top: 14px;
  }
`;
