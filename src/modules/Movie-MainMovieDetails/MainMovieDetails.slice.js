import { getImagesByMovie, getMovieById, getRecommendations } from "store/api";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  movie: {},
  images: [],
  recommendations: [],
  loading: false
}

const MainMovieDetailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: builder => {
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.movie = action.payload
    })
    builder.addCase(getImagesByMovie.fulfilled, (state, action) => {
      state.images = action.payload
    })
    builder.addCase(getRecommendations.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getRecommendations.fulfilled, (state, action) => {
      state.loading = false
      state.recommendations = action.payload
    })
  }
})

export const MainMovieDetailsReducer = MainMovieDetailsSlice.reducer