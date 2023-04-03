import "./MovieDetails.scss"
import Header from "components/Header/Header"
import MainMovieDetails from "components/Movie-MainMovieDetails/MainMovieDetails"

const MovieDetails = () => {
  return <>
    <Header title={"Movie Details"} />
    <MainMovieDetails />
  </>
}

export default MovieDetails