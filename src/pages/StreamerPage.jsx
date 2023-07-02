import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { refreshError } from "../redux//streamer/streamerSlice";
import api from "../apiService/streamersApi";
import { Container } from "../components/Container/Container";
import { MainLoader } from "../components/Loader/Loader";
import { StreamerCard } from "../components/StreamerCard/StreamerCard";

const StreamerPage = ({ socket }) => {
  const [streamer, setStreamer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { streamerId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const resault = await api.getStreamerById(streamerId);

      if (!resault.data) {
        dispatch(refreshError(resault));
        return;
      }

      setStreamer(resault.data);
      setIsLoading(false);
    })();
  }, [dispatch, streamerId]);

  const handleVotesClick = async ({ upvotes, downvotes }) => {
    const votes = { upvotes, downvotes };

    const result = await api.updateStreamersRating(streamerId, votes);

    if (!result.data) {
      dispatch(refreshError(result));
      return;
    }

    setStreamer((prev) => ({ ...prev, ...result.data }));
    socket.emit("get-streamers", result.data);
  };

  return (
    streamer && (
      <Container>
        {isLoading ? (
          <MainLoader />
        ) : (
          <StreamerCard streamer={streamer} onVotesClick={handleVotesClick} />
        )}
      </Container>
    )
  );
};

export default StreamerPage;
