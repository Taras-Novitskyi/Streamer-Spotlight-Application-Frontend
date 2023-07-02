import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;

  color: ${(p) => p.theme.colors.whiteText};
`;
