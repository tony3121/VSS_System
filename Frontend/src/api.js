import axios from "axios";

const API_URL = "https://vss-backend.onrender.com";

export const fetchCandidates = async () => {
  try {
    const response = await axios.get(`${API_URL}/candidates`);
    return response.data;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    throw error;
  }
};
