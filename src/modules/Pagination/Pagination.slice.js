const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  page: 1
}

const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload
    }
  }
})

export const { setPage } = PaginationSlice.actions
export const PaginationReducer = PaginationSlice.reducer