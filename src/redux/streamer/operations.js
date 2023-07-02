import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://streamer-spotlight-application-backend.onrender.com";

export const getStreamers = createAsyncThunk(
  "streamers/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/streamers`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
