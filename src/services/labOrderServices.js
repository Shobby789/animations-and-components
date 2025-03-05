import axios from "axios";
const API_BASE_URL = `http://localhost:8000/api/`;

const handleResponse = async (response) => {
  if (response.status == 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};

const fetchPrices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/prices/get-prices`);
    return handleResponse(response);
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export default {
  fetchPrices,
};
