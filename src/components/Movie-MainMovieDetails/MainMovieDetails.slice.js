import { getMovieById } from "store/api";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  movie: {}
}

const MainMovieDetailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: builder => {
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.movie = action.payload
    })
  }
})

export const MainMovieDetailsReducer = MainMovieDetailsSlice.reducer