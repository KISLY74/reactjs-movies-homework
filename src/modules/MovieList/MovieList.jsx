import "./MovieList.scss"
import { useEffect } from "react"
import MovieItem from "components/Main-MainMovies/MovieItem/MovieItem"
import { useDispatch, useSelector } from "react-redux"
import { getPopularMovies, getAllGenres, getTopRatedMovies, getUpcomingMovies } from "store/api"
import MovieItemSkeleton from "components/Main-MainMovies/MovieItem/MovieItemSkeleton"

const functionsCategory = {
  "Popular": getPopularMovies,
  "Top rated": getTopRatedMovies,
  "Upcoming": getUpcomingMovies
}

const MovieList = ({ details, actorProfile }) => {
  const movie = useSelector(state => state.movie)
  const { activeCategory } = useSelector(state => state.categories)
  const { page } = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  function getMoviesItem(movies) {
    return movies.map(item => {
      return <MovieItem
        key={item.id}
        movie={item}
        allGenres={movie.genres}
        genres={item.genre_ids}
        isHideDesc={false} />
    })
  }

  useEffect(() => {
    (function () {
      for (let i in functionsCategory)
        if (activeCategory === i)
          dispatch(functionsCategory[i](page))
    }())

    dispatch(getAllGenres())
  }, [activeCategory, dispatch, page])

  return <section className="list-items">
    {movie.loading ? new Array(20).fill(<MovieItemSkeleton />) :
      details ? getMoviesItem(details.recommendations)
        : actorProfile ? getMoviesItem(actorProfile.movies_person)
          : movie.movies ? getMoviesItem(movie.movies) : null
    }
  </section>
}

export default MovieList