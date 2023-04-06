import CategoriesTabs from "./CategoriesTabs/CategoriesTabs"
import MovieList from "./MovieList/MovieList"
import Pagination from "./Pagination/Pagination"

const MainMovies = () => {
  return <main className="main">
    <CategoriesTabs />
    <MovieList />
    <Pagination />
  </main>
}

export default MainMovies