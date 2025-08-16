import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzU4NzJiNDhiNTQ5YmM3NDhhZDQxYjE1YzNlMGQ3NyIsIm5iZiI6MTc1NTM2OTQxOS42NjYsInN1YiI6IjY4YTBjZmNiNTA5ODY0ZjlkNWU5NDY3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QBtcgwl1qH5gUTiStl2LQsh0SF7X-2slcwja1EX_VlU",
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
