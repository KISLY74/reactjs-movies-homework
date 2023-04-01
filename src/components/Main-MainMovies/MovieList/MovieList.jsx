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

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let tmp = []

    for (let i = 0; i < 10; i++)
      moviesData.map(m => tmp.push(m))

    setMovies(tmp)
  }, [movies])

  return <section className="list-items">
    {movies ? movies.map(movie => {
      return <MovieItem key={movie.id} movie={movie} genres={movie.genres} />
    }) : false}
  </section>
}

export default MovieList