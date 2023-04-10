import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '5216e3c10482369f5b2914500256cc13'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const config = { params: { api_key: API_KEY } }

export const getPopularMovies = createAsyncThunk(`moviesPopular`, async (page) => {
  config.params.page = page
  return axios.get(BASE_URL + `movie/popular`, config).then(res => res.data.results)
})

export const getTopRatedMovies = createAsyncThunk(`moviesTopRated`, async (page) => {
  config.params.page = page
  return axios.get(BASE_URL + 'movie/top_rated', config).then(res => res.data.results)
})

export const getUpcomingMovies = createAsyncThunk(`moviesUpcoming`, async (page) => {
  config.params.page = page
  return axios.get(BASE_URL + 'movie/upcoming', config).then(res => res.data.results)
})

export const getAllGenres = createAsyncThunk(`allGenres`, () => {
  return axios.get(BASE_URL + 'genre/movie/list', config).then(res => res.data.genres)
})