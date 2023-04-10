import { getCastByMovieId } from "store/api"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  persons: []
}

const ActorListSlice = createSlice({
  name: 'actor',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCastByMovieId.fulfilled, (state, action) => {
      state.persons = action.payload
    })
  }
})

export const ActorListReducer = ActorListSlice.reducer