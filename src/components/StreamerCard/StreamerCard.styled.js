import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 540px;
  margin: 0 auto;

  background-color: ${(p) => p.theme.colors.mainBgColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.mainBgColor};

  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const AvatarContainer = styled.div`
  height: 260px;
  width: 100%;
  margin-bottom: ${(p) => p.theme.space(4)};

  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const Image = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 36%;

  padding-right: ${(p) => p.theme.space(4)};
  padding-left: ${(p) => p.theme.space(4)};
`;

export const StreamerName = styled.p`
  margin-bottom: ${(p) => p.theme.space(3)};

  font-size: 18px;
`;

export const StreamerPlatform = styled.p`
  margin-bottom: ${(p) => p.theme.space(4)};
`;

export const StreamerDescription = styled.p`
  flex-grow: 1;

  margin-bottom: ${(p) => p.theme.space(2)};

  font-size: 14px;
  color: rgb(82, 118, 160);

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  white-space: pre-wrap;

  &:hover {
    overflow: auto;
  }
`;

export const StreamerRating = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: ${(p) => p.theme.space(10)};

  background-color: ${(p) => p.theme.colors.lightBgColor};
`;

export const VotesItem = styled.div`
  display: flex;
  align-items: center;
`;

export const VotesCount = styled.p`
  margin-right: ${(p) => p.theme.space(2)};

  font-size: 20px;
`;
