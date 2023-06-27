import React, { lazy, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { NotFound } from "./components/NotFound/NotFound";

const MainPage = lazy(() => import("./pages/MainPage"));
const StreamerPage = lazy(() => import("./pages/StreamerPage"));

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="streamer" element={<StreamerPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
