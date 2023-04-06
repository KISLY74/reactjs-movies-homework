import CategoriesTabs from "modules/CategoriesTabs/CategoriesTabs"
import MovieList from "modules/MovieList/MovieList"
import Pagination from "modules/Pagination/Pagination"

const MainMovies = () => {
  return <main className="main">
    <CategoriesTabs />
    <MovieList />
    <Pagination />
  </main>
}

export default MainMovies