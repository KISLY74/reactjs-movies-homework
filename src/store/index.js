import { configureStore } from "@reduxjs/toolkit";
import { CategoriesTabsReducer } from "modules/CategoriesTabs/CategoriesTabs.slice";
import { MovieReducer } from "modules/MovieList/MovieList.slice.js"
import { PaginationReducer } from "modules/Pagination/Pagination.slice";

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    categories: CategoriesTabsReducer,
    pagination: PaginationReducer
  }
})