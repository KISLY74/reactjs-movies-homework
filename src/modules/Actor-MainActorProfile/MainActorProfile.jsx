import MovieList from "modules/MovieList/MovieList"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { IMAGE_URL, getCastMovieByPerson, getImagesByPerson, getPersonById } from "store/api"

const MainActorProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const actorProfile = useSelector(state => state.actorProfile)

  useEffect(() => {
    dispatch(getPersonById(id))
    dispatch(getImagesByPerson(id))
    dispatch(getCastMovieByPerson(id))
  }, [dispatch, id])

  return <main className="main">
    <section className="actor-info">
      <img src={IMAGE_URL + actorProfile.person.profile_path} alt="" />
      <div className="info">
        <h3 className="info__name">{actorProfile.person.name}</h3>
        <section className="section">
          <h5 className="section__title">Birthday:</h5>
          <p className="section__value">{actorProfile.person.birthday}</p>
        </section>
        <section className="section">
          <h5 className="section__title">Place of birth:</h5>
          <p className="section__value">{actorProfile.person.place_of_birth}</p>
        </section>
        <section className="section">
          <h5 className="section__title">Biography:</h5>
          <p className="section__value">{actorProfile.person.biography}</p>
        </section>
        <section className="section-photos">
          <h4>Photos</h4>
          <div className="photos">
            {actorProfile.images.map(im => <img src={IMAGE_URL + im.file_path} alt="" />)}
          </div>
        </section>
      </div>
    </section>
    <section className="actor-films">
      <h2 className="actor-films__title">KNOWN BY</h2>
      <MovieList actorProfile={actorProfile} />
    </section>
  </main>
}

export default MainActorProfile