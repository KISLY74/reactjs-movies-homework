import { getAllGenres, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "store/api";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  movies: [],
  genres: []
}

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: builder => {
    builder.addCase(getPopularMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
    })
    builder.addCase(getTopRatedMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
    })
    builder.addCase(getUpcomingMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
    })
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload
    })
  }
})

export const MovieReducer = MovieSlice.reducer