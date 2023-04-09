import { useNavigate } from "react-router-dom"
import { IMAGE_URL } from "store/api"
import image from "assets/img.webp"

const MovieItem = (props) => {
  const history = useNavigate()

  return <div className="item" onClick={() => history(`/movie/${props.movie.id}`)}>
    <p className={`item__vote-average ${props.movie.vote_average >= 7 ? 'from-seven' : 'up-to-seven'}`}>
      {props.movie.vote_average}
    </p>
    <img 
      className="item__img"
      src={!props.movie.poster_path ? image : IMAGE_URL + props.movie.poster_path}
      alt="movie_image" />
    {!props.isHideDesc ? <>
      <h2 className="item__title">{props.movie.title}</h2>
      <div className="genres">
        {props.allGenres.map(genre => {
          return props.genres.map(id => id === genre.id ?
            <p key={genre.name}>{genre.name}</p> : null)
        })}
      </div>
    </> : false}
    <div className="item__hover-effect" />
  </div>
}

export default MovieItem