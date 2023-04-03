import "./MovieList.scss"
import { useEffect, useState } from "react"
import MovieItem from "./MovieItem/MovieItem"

const moviesData = [
  {
    vote_average: 9,
    title: 'Spider man',
    genres: ["Genre 1", "Genre 2", "Genre 3"]
  },
  {
    vote_average: 6,
    title: 'Hitman',
    genres: ["Genre 1", "Genre 2", "Genre 3", "Genre 4", "Genre 5"]
  }
]

const MovieList = (props) => {
  const [movies, setMovies] = useState([])

  function getMovies() {
    let tmp = []

    for (let i = 0; i < 10; i++)
      moviesData.map(m => tmp.push(m))

    setMovies(tmp)
  }

  useEffect(() => {
    if (!props.movies)
      getMovies()
    else
      setMovies(props.movies)
  }, [])

  return <section className="list-items">
    {movies ? movies.map(movie =>
      <MovieItem
        key={movie.id}
        movie={movie}
        genres={movie.genres}
        isHideDesc={false} />
    ) : false}
  </section>
}

export default MovieList