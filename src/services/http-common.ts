import axios from "axios";

const URL = "https://rickandmortyapi.com/api";

export const http = axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json",
  },
});
