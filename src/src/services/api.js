import axios from "axios";

// Configuración de la API
const api = axios.create({
  baseURL: "http://localhost:8822", // Asegúrate de que este es el puerto correcto de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
