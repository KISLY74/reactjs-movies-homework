import image from "assets/img.webp"

const MovieItem = ({ movie, genres, isHideDesc }) => {
  return <div className="item">
    <p className={`item__vote-average ${movie.vote_average >= 7 ? 'from-seven' : 'up-to-seven'}`}>
      {movie.vote_average}
    </p>
    <img className="item__img" src={image} alt="movie_image" />
    {!isHideDesc ? <>
      <h2 className="item__title">{movie.title}</h2>
      <div className="genres">{genres.map(genre => <p>{genre}</p>)}</div>
    </> : false}
  </div>
}

export default MovieItem