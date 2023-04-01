import CategoriesTabs from "./CategoriesTabs/CategoriesTabs"
import MovieList from "./MovieList/MovieList"

const MainMovies = () => {
  return <main className="main">
    <CategoriesTabs />
    <MovieList />
  </main>
}

export default MainMovies