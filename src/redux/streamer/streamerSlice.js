import { createSlice } from "@reduxjs/toolkit";
import { getStreamers, updateStreamers, updateSocket } from "./operations";

const initialState = {
  user: { name: null, verify: false },
  streamers: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handleIsLoadingPending = (state) => {
  state.isLoading = true;
};

const handleIsLoadingRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const streamerSlice = createSlice({
  name: "streamers",
  initialState,
  reducers: {
    refreshStreamers: (state, action) => {
      state.streamers = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getStreamers.pending, handleIsLoadingPending)
      .addCase(getStreamers.fulfilled, (state, action) => {
        state.streamers = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStreamers.rejected, handleIsLoadingRejected)
});

export const streamerReducer = streamerSlice.reducer;
export const { refreshStreamers } = streamerSlice.actions;
