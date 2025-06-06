import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmQwYmU0Yzg0ZWNmOTIwZWVmYzIyNTllNDliMzhjOSIsIm5iZiI6MTcyMTkxMDc3Ni42MTMyMTYsInN1YiI6IjY2YTIzNzE0M2Y5NmNlZjUwNmNhN2NiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n98f3tUQzE344ZAh-_DZRmzCvQ2xCwB3bp6MDtALQfg",
  },
};

export const getTrendingMoviesAsync = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};

export const getMovieDetailsAsync = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getMovieCreditsAsync = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getMovieReviewsAsync = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};

export const getMoviesAsync = async (searchText) => {
  const response = await axios.get(
    `/search/movie?query=${searchText}`,
    options
  );
  return response.data.results;
};
