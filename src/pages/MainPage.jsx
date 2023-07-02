import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";

import api from "../apiService/streamersApi";
import { selectStreamers } from "../redux/streamer/selectors";
import { getStreamers } from "../redux/streamer/operations";
import { refreshStreamers } from "../redux//streamer/streamerSlice";

import { AddStreamerForm } from "../components/AddStreamerForm/AddStreamerForm";
import { StreamersList } from "../components/StreamersList/StreamersList";
import { Container } from "../components/Container/Container";

const MainPage = () => {
  const socket = useOutletContext();

  const streamersList = useSelector(selectStreamers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStreamers());
  }, [dispatch]);

  useEffect(() => {
    if (!socket) return;

    socket.on("updated-streamers", (data) => {
      dispatch(refreshStreamers(data));
    });

    return () => {
      socket.off("updated-streamers");
    };
  }, [dispatch, socket]);

  const handleSubmit = async (newStreamer) => {
    const data = await api.addStreamer(newStreamer);
    socket.emit("get-streamers", data);
  };

  return (
    <Container>
      <AddStreamerForm onSubmit={handleSubmit} />
      <StreamersList streamers={streamersList} />
    </Container>
  );
};

export default MainPage;
