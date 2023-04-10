import MovieItem from "components/Main-MainMovies/MovieItem/MovieItem"
import { useSelector } from "react-redux"
import ActorList from "modules/Movie-MainMovieDetails/ActorList/ActorList"
import { IMAGE_URL } from "store/api"
import { useState } from "react"

const Details = () => {
  const { movie, images } = useSelector(state => state.details)
  const [isHide, setIsHide] = useState(true)

  const handleClickShowHide = () => isHide ? setIsHide(false) : setIsHide(true)

  return <section className="details">
    <section className="info">
      <MovieItem
        movie={movie}
        genres={["Genre 1", "Genre 2", "Genre 3"]}
        isHideDesc={true} />
      <div className="info-container">
        <div className="title">
          <h4>Title:</h4>
          <p className="title__value">{movie.title}</p>
        </div>
        <div className="overview">
          <h4>Overview:</h4>
          <p className="overview__value">{movie.overview}</p>
        </div>
        <div className="date">
          <h4>Release date:</h4>
          <p className="date__value">{movie.release_date}</p>
        </div>
        <div className="revenue">
          <h4>Revenue:</h4>
          <p className="revenue__value">$ {movie.revenue}</p>
        </div>
        <div className="duration">
          <h4>Duration:</h4>
          <p className="duration__value">{movie.runtime} min</p>
        </div>
        <div className="genres">
          {movie?.genres?.map(genre => <p>{genre.name}</p>)}
        </div>
        <section className="cast">
          <div className="cast-up-container">
            <h4>Top Billed Cast:</h4>
            <p className="cast-up-container__show-hide" onClick={() => handleClickShowHide()}>
              {isHide ? "Show all" : "Hide all"}
            </p>
          </div>
          <ActorList isHide={isHide} />
        </section>
        <section className="images">
          <h4>Images:</h4>
          <div className="images-content">
            {images.map(im => <img src={IMAGE_URL + im.file_path} alt="" />)}
          </div>
        </section>
      </div>
    </section>
  </section >
}

export default Details