import { configureStore } from "@reduxjs/toolkit";
import { CategoriesTabsReducer } from "modules/CategoriesTabs/CategoriesTabs.slice";
import { MovieReducer } from "modules/MovieList/MovieList.slice.js"

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    categories: CategoriesTabsReducer
  }
})