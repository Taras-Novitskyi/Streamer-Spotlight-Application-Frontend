import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
// import toast from 'react-hot-toast';
import api from "../../apiService/streamersApi";

// axios.defaults.baseURL = 'https://yummy-team4-nodejs-project.onrender.com';
axios.defaults.baseURL = "http://localhost:3001";

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const getStreamers = createAsyncThunk(
  "streamers/getAll",
  async (credentials, thunkAPI) => {
    try {
      const data = api.fetchStreamers();
      // const { data } = await axios.get(`/streamers`);

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateStreamers = (streamers) => ({
  type: "UPDATE_STREAMERS",
  payload: streamers,
});
