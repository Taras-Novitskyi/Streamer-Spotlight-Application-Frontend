import React from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../apiService/streamersApi";
import { selectStreamers } from "../redux/streamer/selectors";
import { refreshError } from "../redux/streamer/streamerSlice";

import { AddStreamerForm } from "../components/AddStreamerForm/AddStreamerForm";
import { StreamersList } from "../components/StreamersList/StreamersList";
import { Container } from "../components/Container/Container";

const MainPage = ({ socket }) => {
  const streamersList = useSelector(selectStreamers);
  const dispatch = useDispatch();

  const handleSubmit = async (newStreamer) => {
    const result = await api.addStreamer(newStreamer);

    if (!result.data) {
      dispatch(refreshError(result));
    } else {
      socket.emit("get-streamers", result.data);
    }
  };

  return (
    <Container>
      <AddStreamerForm onSubmit={handleSubmit} />
      <StreamersList streamers={streamersList} />
    </Container>
  );
};

export default MainPage;
