import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import api from "../apiService/streamersApi";

import { AddStreamerForm } from "../components/AddStreamerForm/AddStreamerForm";
import { StreamersList } from "../components/StreamersList/StreamersList";
import { Container } from "../components/Container/Container";

const MainPage = () => {
  const [socket, setSocket] = useState(null);
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    setSocket(io("http://localhost:3001"));
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.fetchStreamers();
      setStreamers(data);
    })();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("updated-streamers", (data) => {
      console.log("updated-streamers", data);
      setStreamers(data);
      //   setChat((prev) => [...prev, { data: data, received: true }]);
    });

    return () => {
      socket.off("updated-streamers");
    };
  }, [socket]);

  const handleSubmit = async (newStreamer) => {
    const data = await api.addStreamer(newStreamer);
    socket.emit("get-streamers", data);
  };

  return (
    <Container>
      <AddStreamerForm onSubmit={handleSubmit} />
      <StreamersList streamers={streamers} />
    </Container>
  );
};

export default MainPage;
