import MovieList from "components/Main-MainMovies/MovieList/MovieList"
import Details from "./Details/Details"

const MainMovieDetails = () => {
  return <main className="main">
    <Details />
    <section className="recomendations">
      <h2 className="recomendations__title">RECOMENDATIONS</h2>
      <MovieList movies={new Array(5).fill({
        vote_average: 8.335,
        title: 'Spider man',
        genres: ["Genre 1", "Genre 2", "Genre 3"]
      }, 0)} />
    </section>
  </main>
}

export default MainMovieDetails