import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const getMovieByQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTvShowByQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
  );
  return response.data;
};

export const getTvShowDetails = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`
  );
  return response.data;
};

export const getActorsByQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`
  );
  return response.data;
};

export const getActorDetails = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
  );
  return response.data;
};
