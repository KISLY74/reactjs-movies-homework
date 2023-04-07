import MovieList from "modules/MovieList/MovieList"
import Details from "./Details/Details"

const MainMovieDetails = () => {
  return <main className="main">
    <Details />
    <section className="recomendations">
      <h2 className="recomendations__title">RECOMENDATIONS</h2>
      <MovieList />
    </section>
  </main>
}

export default MainMovieDetails