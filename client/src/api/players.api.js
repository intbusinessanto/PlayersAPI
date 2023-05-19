import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);

const playersApi = axios.create({
  baseURL: `${URL}/players/api/v1/players`,
});

export const getAllPlayers = () => playersApi.get("/");

export const getPlayer = (id) => playersApi.get(`/${id}`);

export const createPlayer = (player) => playersApi.post("/", player);

export const updatePlayer = (id, player) => playersApi.put(`/${id}/`, player);

export const deletePlayer = (id) => playersApi.delete(`/${id}`);
