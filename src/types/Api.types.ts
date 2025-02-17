import { Image } from "./Image.types";

export interface ApiResponse {
  results: Image[];
  total_pages: number;
}