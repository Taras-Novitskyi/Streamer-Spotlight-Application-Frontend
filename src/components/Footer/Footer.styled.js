import styled from "styled-components";

export const FooterStyled = styled.footer`
  position: relative;
  height: ${(p) => p.theme.space(16)};
  background-color: ${(p) => p.theme.colors.darkBgColor};
`;

export const BottomWrapper = styled.div`
  position: relative;
  text-align: center;

  color: ${(p) => p.theme.colors.whiteText};
  background-color: transparent;
`;
