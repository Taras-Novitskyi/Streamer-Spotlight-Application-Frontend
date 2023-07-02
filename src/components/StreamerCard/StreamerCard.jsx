import { useSelector } from "react-redux";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

import { selectUser } from "../../redux/streamer/selectors";
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

export const StreamerCard = ({ streamer, onVotesClick }) => {
  const { name, platform, description, avatar, upvotes, downvotes } =
    streamer;

  const userId = useSelector(selectUser);

  const isUpvote = upvotes.indexOf(userId);
  const isDownvote = downvotes.indexOf(userId);

  const handleUpVotes = async () => {
    onVotesClick({ upvotes: userId });
  };

  const handleDownVotes = async () => {
    onVotesClick({ downvotes: userId });
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
          <VotesCount>{upvotes.length}</VotesCount>
          <VotesButton
            children={
              <ImArrowUp
                size={20}
                color={isUpvote === -1 ? "#000000" : "#5fc49a"}
              />
            }
            option="Upvotes"
            onClick={handleUpVotes}
          />
        </VotesItem>
        <VotesItem>
          <VotesCount>{downvotes.length}</VotesCount>
          <VotesButton
            children={
              <ImArrowDown
                size={20}
                color={isDownvote === -1 ? "#000000" : "#ce0316"}
              />
            }
            option="Downvotes"
            onClick={handleDownVotes}
          />
        </VotesItem>
      </StreamerRating>
    </Container>
  );
};
