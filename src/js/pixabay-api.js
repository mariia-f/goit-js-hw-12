import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54690330-eb245c6ad75148e763d2e54fd";

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}