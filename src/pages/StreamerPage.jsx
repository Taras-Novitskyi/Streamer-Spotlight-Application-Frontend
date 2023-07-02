import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

import api from "../apiService/streamersApi";
import { Container } from "../components/Container/Container";
import { StreamerCard } from "../components/StreamerCard/StreamerCard";

const StreamerPage = () => {
  const [streamer, setStreamer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const socket = useOutletContext();

  const { streamerId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const streamer = await api.getStreamerById(streamerId);
      setStreamer(streamer);

      setIsLoading(false);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    })();
  }, [streamerId]);

  const handleVotesClick = async ({ upvotes = 0, downvotes = 0 }) => {
    const votes = { upvotes, downvotes };

    const data = await api.updateStreamersRating(streamerId, votes);
    setStreamer((prev) => ({ ...prev, ...data }));

    socket.emit("get-streamers", data);
  };

  return (
    streamer && (
      <Container>
        <StreamerCard streamer={streamer} onVotesClick={handleVotesClick} />
      </Container>
    )
  );
};

export default StreamerPage;
