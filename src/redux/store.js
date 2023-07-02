import { configureStore } from "@reduxjs/toolkit";
import { streamerReducer } from "./streamer/streamerSlice";

export const store = configureStore({
  reducer: {
    streamers: streamerReducer,
  },
});

