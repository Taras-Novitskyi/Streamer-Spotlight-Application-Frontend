import styled from "styled-components";

export const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 350px;
`;

export const Message = styled.p`
  display: inline-block;

  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.whiteText};
`;
