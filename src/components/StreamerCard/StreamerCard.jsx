import { useEffect, useState } from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

import { VotesButton } from "../Button/Button";
import {
  Container,
  AvatarContainer,
  Image,
  InfoContainer,
  StreamerName,
  StreamerPlatform,
  StreamerDescription,
  StreamerRating,
  VotesItem,
  VotesCount,
} from "./StreamerCard.styled";

import api from "../../apiService/streamersApi";

export const StreamerCard = ({ streamer, onVotesClick }) => {
  const { _id, name, platform, description, avatar, upvotes, downvotes } =
    streamer;

  const handleUpVotes = async () => {
    onVotesClick({ upvotes: 1 });
    // const votes = { upvotes: 1, downvotes: 0 };
    // const data = await api.updateStreamersRating(_id, votes);
    // setStreamer(updatedStreamer);
  };

  const handleDownVotes = async () => {
    onVotesClick({ downvotes: 1 });
  };

  return (
    <Container>
      <AvatarContainer>
        <Image src={avatar} alt={name} />
      </AvatarContainer>
      <InfoContainer>
        <StreamerName>{name}</StreamerName>
        <StreamerDescription>{description}</StreamerDescription>
        <StreamerPlatform>{platform}</StreamerPlatform>
      </InfoContainer>
      <StreamerRating>
        <VotesItem>
          <VotesCount>{upvotes}</VotesCount>
          <VotesButton
            children={<ImArrowUp size={20} />}
            option="Upvotes"
            onClick={handleUpVotes}
          />
        </VotesItem>
        <VotesItem>
          <VotesCount>{downvotes}</VotesCount>
          <VotesButton
            children={<ImArrowDown size={20} />}
            option="Downvotes"
            onClick={handleDownVotes}
          />
        </VotesItem>
      </StreamerRating>
    </Container>
  );
};
