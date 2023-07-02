import { createSlice } from "@reduxjs/toolkit";
import { getStreamers } from "./operations";

const initialState = {
  user: null,
  streamers: [],
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
    createUser: (state, action) => {
      if (!state.user) {
        state.user = action.payload;
      }
    },
    refreshStreamers: (state, action) => {
      state.streamers = action.payload;
    },
    refreshError: (state, action) => {
      if (!state.user) {
        state.error = action.payload;
      }
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
      .addCase(getStreamers.rejected, handleIsLoadingRejected),
});

export const streamerReducer = streamerSlice.reducer;
export const { refreshStreamers, createUser, refreshError } =
  streamerSlice.actions;
