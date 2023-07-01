import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

async function addStreamer(streamer) {
  try {
    const { data } = await axios.post("/streamers", streamer);

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchStreamers() {
  try {
    const { data } = await axios.get(`/streamers`);

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getStreamerById(id) {
  try {
    const { data } = await axios.get(`/streamers/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function updateStreamersRating(id, vote) {
  try {
    const { data } = await axios.post(`/streamers/${id}`, vote);

    return data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  addStreamer,
  fetchStreamers,
  getStreamerById,
  updateStreamersRating,
};

export default api;
