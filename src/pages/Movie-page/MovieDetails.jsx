import "./MovieDetails.scss"
import Header from "components/Header/Header"
import MainMovieDetails from "modules/Movie-MainMovieDetails/MainMovieDetails"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getMovieById } from "store/api"

const MovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieById(id))
  }, [dispatch, id])

  return <>
    <Header title={"Movie Details"} />
    <MainMovieDetails />
  </>
}

export default MovieDetails