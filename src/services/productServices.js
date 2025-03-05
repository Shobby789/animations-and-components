import axios from "axios";

const API_BASE_URL = `http://localhost:8000/api/products`;

const handleResponse = async (response) => {
  if (response.status == 200) {
    return await response.data;
  } else {
    throw new Error(response.statusText);
  }
};

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-products`);
    return handleResponse(response);
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export default {
  fetchProducts,
};
