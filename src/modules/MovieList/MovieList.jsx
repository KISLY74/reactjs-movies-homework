import "./MovieList.scss"
import { useEffect } from "react"
import MovieItem from "components/Main-MainMovies/MovieItem/MovieItem"
import { useDispatch, useSelector } from "react-redux"
import { getPopularMovies, getAllGenres, getTopRatedMovies, getUpcomingMovies } from "store/api"

const functionsCategory = {
  "Popular": getPopularMovies,
  "Top rated": getTopRatedMovies,
  "Upcoming": getUpcomingMovies
}

const MovieList = () => {
  const movie = useSelector(state => state.movie)
  const { activeCategory } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    (function () {
      for (let i in functionsCategory)
        if (activeCategory === i)
          dispatch(functionsCategory[i]())
    }())

    dispatch(getAllGenres())
  }, [activeCategory, dispatch])

  return <section className="list-items">
    {!movie.loading &&
      movie.movies ?
      movie.movies.map(item => {
        return <MovieItem
          key={item.id}
          movie={item}
          allGenres={movie.genres}
          genres={item.genre_ids}
          isHideDesc={false} />
      }) : null}
  </section>
}

export default MovieList