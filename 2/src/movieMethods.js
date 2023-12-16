import movies from "./data.js";
import { formatResponse, formatErrorResponse } from "./requestUtils.js";

export const getAllMovies = (req, res) => {
  res.json(formatResponse(movies));
};

export const getMovie = (req, res) => {
  let movieId = req.params.id;
  let movie = movies.filter((movie) => {
    return movie.id == movieId;
  })[0];
  res.json(formatResponse(movie));
};

export const createMovie = (req, res) => {
  let movieData = req.body;
  if (
    movieData.title == null ||
    movieData.title.length < 3 ||
    movieData.title.length > 200
  ) {
    res.json(formatErrorResponse("The movie title is invalid"));

    return;
  }

  if (
    movieData.description == null ||
    movieData.description.length < 3 ||
    movieData.description.length > 20000
  ) {
    res.json(formatErrorResponse("The movie description is invalid"));

    return;
  }

  if (
    movieData.rating == null ||
    typeof movieData.rating != "number" ||
    movieData.rating <= 0 ||
    movieData.rating > 10
  ) {
    res.json(formatErrorResponse("The movie rating is invalid"));

    return;
  }
  let id = Math.floor(Math.random() * 100);
  let matches = movies.filter((movie) => movie.id == id).length;
  while (matches > 0) {
    id = Math.floor(Math.random() * 100);
    matches = movies.filter((movie) => movie.id === id).length;
  }
  movieData.id = id;
  movies.push(movieData);
  res.json(formatResponse(movieData));
};

export const updateMovie = (req, res) => {
  let movieId = req.params.id;

  let movieData = req.body;

  let movie = movies.filter((movie) => {
    return movie.id == movieId;
  })[0];

  if (movieData.title != null) {
    movie.title = movieData.title;
  }
  if (movieData.rating != null) {
    movie.rating = movieData.rating;
  }
  if (movieData.description != null) {
    movie.description = movieData.description;
  }
  res.json(formatResponse(movie));
};

export const deleteMovie = (req, res) => {
  let movieId = req.params.id;
  let movie = movies.filter((movie) => {
    return movie.id == movieId;
  })[0];

  movies.splice(
    movies.findIndex((movie) => movieId == movieId),
    1
  );

  res.json(formatResponse(movie));
};
