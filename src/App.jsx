import React, { lazy, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
import { ThemeProvider } from "styled-components";

import { theme } from "./utils/theme";
import { GlobalStyles } from "./GlobalStyles";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { NotFound } from "./components/NotFound/NotFound";

const MainPage = lazy(() => import("./pages/MainPage"));
const StreamerPage = lazy(() => import("./pages/StreamerPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="streamer/:streamerId" element={<StreamerPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
