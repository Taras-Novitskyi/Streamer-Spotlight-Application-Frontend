import axios from "axios";

axios.defaults.baseURL =
  "https://streamer-spotlight-application-backend.onrender.com";

async function addStreamer(streamer) {
  try {
    const data = await axios.post("/streamers", streamer);

    return data;
  } catch (error) {
    return error;
  }
}

async function fetchStreamers() {
  try {
    const data = await axios.get(`/streamers`);

    return data;
  } catch (error) {
    return error;
  }
}

async function getStreamerById(id) {
  try {
    const data = await axios.get(`/streamer/${id}`);

    return data;
  } catch (error) {
    return error;
  }
}

async function updateStreamersRating(id, vote) {
  try {
    const data = await axios.put(`/streamers/${id}/vote`, vote);

    return data;
  } catch (error) {
    return error;
  }
}

const api = {
  addStreamer,
  fetchStreamers,
  getStreamerById,
  updateStreamersRating,
};

export default api;
