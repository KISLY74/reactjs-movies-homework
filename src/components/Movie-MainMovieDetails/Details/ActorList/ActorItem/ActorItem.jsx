import { useNavigate } from "react-router-dom"
import { IMAGE_URL } from "store/api"
import image from "assets/img.webp"

const ActorItem = ({ person }) => {
  const history = useNavigate()

  return <div className="actor-item" onClick={() => history(`/person/${person.id}`)}>
    <img src={!person.profile_path ? image : IMAGE_URL + person.profile_path} alt="actor_image" />
    <p className="actor-item__name">{person.name}</p>
    <p className="actor-item__character">{person.character}</p>
  </div>
}

export default ActorItem