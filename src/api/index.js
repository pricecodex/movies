import axios from "axios";

// Lazy to put api key to .env file so hardcoded it :))
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjA1OWM3ODkwMWFkMjBlNTYxOTAyMWY1MWYwYTY0NiIsIm5iZiI6MTczNjU4OTA0NS4xMjEsInN1YiI6IjY3ODIzZWY1OTEyY2IyNzI4MGJiNjY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OiXZCMjyBaaGcGXe7Y0pkda2HC03VweyixT1dMwwmY0",
  },
});
