import express from "express";
import axios from "axios";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovie,
  updateMovie,
} from "./movieMethods.js";
const app = express();

const port = 3000;
const weatherApiUrl = "https://api.open-meteo.com/v1/forecast";
app.use(express.json());

app.get("/movies", getAllMovies);

app.get("/movies/:id", getMovie);

app.post("/movies", createMovie);

app.patch("/movies/:id", updateMovie);

app.delete("/movies/:id", deleteMovie);

app.get("/weather", async (req, res) => {
  let data = {};
  let response = await axios.get(weatherApiUrl, {
    params: {
      latitude: 45.47,
      longitude: 24.09,
      temperature_unit: "celsius",
      hourly: "temperature",
    },
  });
  data = response.data;
  res.json(data);
});

/* app.get("/weather", (req, res) => {
  let data = {};
  axios
    .get(weatherApiUrl, {
      params: {
        latitude: 45.47,
        longitude: 24.09,
        temperature_unit: "celsius",
        hourly: "temperature",
      },
    })
    .then((response) => {
      data = response.data;
      res.json(data);
    })
    .catch((err) => {})
    .finally(() => {});
}); */
app.listen(port, () => {
  console.log("app started on port: " + port);
});
