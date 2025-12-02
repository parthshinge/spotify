import axios from "axios";

const API = axios.create({
    baseURL: "/api", // 👈 फक्त /api ठेवणार
});

export default API;