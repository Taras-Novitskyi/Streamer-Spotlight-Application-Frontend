import React, { lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

import { theme } from "./utils/theme";
import { GlobalStyles } from "./GlobalStyles";
import { getStreamers } from "./redux/streamer/operations";
import {
  refreshStreamers,
  createUser,
  refreshError,
} from "./redux/streamer/streamerSlice";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { NotFound } from "./components/NotFound/NotFound";

const MainPage = lazy(() => import("./pages/MainPage"));
const StreamerPage = lazy(() => import("./pages/StreamerPage"));

function App() {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setSocket(
    io("https://streamer-spotlight-application-backend.onrender.com")
    );
  }, []);

  useEffect(() => {
    dispatch(getStreamers());
    dispatch(createUser(uuidv4()));
  }, [dispatch]);

  useEffect(() => {
    if (!socket) return;

    socket.on("updated-streamers", (data) => {
      if (socket.connected) {
        dispatch(refreshStreamers(data));
      } else {
        dispatch(refreshError(data.error));
      }
    });

    return () => {
      socket.off("updated-streamers");
    };
  }, [dispatch, socket]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage socket={socket} />} />
            <Route
              path="streamer/:streamerId"
              element={<StreamerPage socket={socket} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
