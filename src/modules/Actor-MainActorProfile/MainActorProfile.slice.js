const { createSlice } = require("@reduxjs/toolkit")
const { getPersonById, getImagesByPerson, getCastMovieByPerson } = require("store/api")

const initialState = {
  person: {},
  images: [],
  movies_person: [],
  loading: false
}

const MainActorProfileSlice = createSlice({
  name: 'actorProfile',
  initialState,
  extraReducers: builder => {
    builder.addCase(getPersonById.fulfilled, (state, action) => {
      state.person = action.payload
    })
    builder.addCase(getImagesByPerson.fulfilled, (state, action) => {
      state.images = action.payload
    })
    builder.addCase(getCastMovieByPerson.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getCastMovieByPerson.fulfilled, (state, action) => {
      state.loading = false
      state.movies_person = action.payload
    })
  }
})

export const MainActorProfileReducer = MainActorProfileSlice.reducer 