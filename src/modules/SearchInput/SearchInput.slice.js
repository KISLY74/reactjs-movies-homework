import { getMoviesBySearchQuery } from "store/api"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  movies: [],
  value: ''
}

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValue(state, action) {
      state.value = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getMoviesBySearchQuery.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  }
})

export const SearchInputReducer = SearchSlice.reducer
export const { changeValue } = SearchSlice.actions
