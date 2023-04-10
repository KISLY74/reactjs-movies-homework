import CategoriesTabs from "modules/CategoriesTabs/CategoriesTabs"
import MovieList from "modules/MovieList/MovieList"
import Pagination from "modules/Pagination/Pagination"
import { useSelector } from "react-redux"
import NoResultsFound from "./NoResultsFound/NoResultsFound"

const MainMovies = () => {
  const { movies, value } = useSelector(state => state.search)

  return <main className="main">
    <CategoriesTabs />
    {value.trim() !== '' ? movies.length !== 0 ? <MovieList searchMovies={movies} />
      : <NoResultsFound />
      : <MovieList />}
    <Pagination />
  </main>
}

export default MainMovies