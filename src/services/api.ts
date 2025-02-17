
import axios from "axios";
import { ApiResponse } from "../types/Api.types";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "BuRgL-lsvO2dkqQqS4V_nhuQc8Twzb8Cg__Fve4QiI0";

const fetchImages = async (
  query: string,
  page: number = 1
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;
