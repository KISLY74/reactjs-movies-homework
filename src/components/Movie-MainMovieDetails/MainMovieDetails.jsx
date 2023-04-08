import MovieList from "modules/MovieList/MovieList"
import Details from "./Details/Details"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getImagesByMovie, getRecommendations } from "store/api"

const MainMovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state => state.details)

  useEffect(() => {
    dispatch(getImagesByMovie(id))
    dispatch(getRecommendations(id))
  }, [dispatch, id])

  return <main className="main">
    <Details />
    <section className="recomendations">
      <h2 className="recomendations__title">RECOMENDATIONS</h2>
      <MovieList details={details} />
    </section>
  </main>
}

export default MainMovieDetails