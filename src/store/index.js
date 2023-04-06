import { configureStore } from "@reduxjs/toolkit";
import { CategoriesTabsReducer } from "components/Main-MainMovies/CategoriesTabs/CategoriesTabs.slice";
import { MovieReducer } from "components/Main-MainMovies/MovieList/MovieList.slice.js"

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    categories: CategoriesTabsReducer
  }
})