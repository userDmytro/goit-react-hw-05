import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDcyNmMwZTgzNDA4ZGE0YzI4M2FlMmFiNjgyODQwZiIsInN1YiI6IjY2NTBiZDc2OGU1MTZmMGI3YWVjNWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60y_lNqnZn0yj6oJYn2awMV4M0FA7UawlDUULV24pL8",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};
export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDcyNmMwZTgzNDA4ZGE0YzI4M2FlMmFiNjgyODQwZiIsInN1YiI6IjY2NTBiZDc2OGU1MTZmMGI3YWVjNWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60y_lNqnZn0yj6oJYn2awMV4M0FA7UawlDUULV24pL8",
    },
  });
  return response.data;
};
export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};
export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};
export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};
