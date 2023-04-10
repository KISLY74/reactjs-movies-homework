const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  activeCategory: 'Popular'
}

const CategoriesTabsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload
    }
  }
})

export const CategoriesTabsReducer = CategoriesTabsSlice.reducer
export const { setActiveCategory } = CategoriesTabsSlice.actions