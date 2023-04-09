import { configureStore } from "@reduxjs/toolkit";
import { CategoriesTabsReducer } from "modules/CategoriesTabs/CategoriesTabs.slice";
import { MovieReducer } from "modules/MovieList/MovieList.slice.js"
import { PaginationReducer } from "modules/Pagination/Pagination.slice";
import { MainMovieDetailsReducer } from "components/Movie-MainMovieDetails/MainMovieDetails.slice";
import { ActorListReducer } from "components/Movie-MainMovieDetails/Details/ActorList/ActorList.slice";
import { MainActorProfileReducer } from "modules/Actor-MainActorProfile/MainActorProfile.slice";
import { SearchInputReducer } from "modules/SearchInput/SearchInput.slice";

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    categories: CategoriesTabsReducer,
    pagination: PaginationReducer,
    details: MainMovieDetailsReducer,
    actor: ActorListReducer,
    actorProfile: MainActorProfileReducer,
    search: SearchInputReducer
  }
})