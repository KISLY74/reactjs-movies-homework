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

export const getMovieById = createAsyncThunk(`movieById`, (id) => {
  return axios.get(BASE_URL + `movie/${id}`, config).then(res => res.data)
})

export const getCastByMovieId = createAsyncThunk(`castByMovieId`, (id) => {
  return axios.get(BASE_URL + `movie/${id}/credits`, config).then(res => res.data.cast)
})

export const getPersonById = createAsyncThunk(`personById`, (id) => {
  return axios.get(BASE_URL + `person/${id}`, config).then(res => res.data)
})

export const getImagesByPerson = createAsyncThunk(`imagesByPerson`, (id) => {
  return axios.get(BASE_URL + `person/${id}/images`, config).then(res => res.data.profiles)
})

export const getImagesByMovie = createAsyncThunk(`imagesByMovie`, (id) => {
  return axios.get(BASE_URL + `movie/${id}/images`, config).then(res => res.data.backdrops)
})

export const getRecommendations = createAsyncThunk(`recommendations`, (id) => {
  return axios.get(BASE_URL + `movie/${id}/recommendations`, config).then(res => res.data.results)
})

export const getCastMovieByPerson = createAsyncThunk(`castMoviesByPerson`, (id) => {
  return axios.get(BASE_URL + `person/${id}/movie_credits`, config).then(res => res.data.cast)
})