import CategoriesTabs from "../../modules/CategoriesTabs/CategoriesTabs"
import MovieList from "../../modules/MovieList/MovieList"

const MainMovies = () => {
  return <main className="main">
    <CategoriesTabs />
    <MovieList />
  </main>
}

export default MainMovies