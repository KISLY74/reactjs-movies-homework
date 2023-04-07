import { useParams } from "react-router-dom"
import ActorItem from "./ActorItem/ActorItem"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCastByMovieId } from "store/api"

const ActorList = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { persons } = useSelector(state => state.actor)

  useEffect(() => {
    dispatch(getCastByMovieId(id))
  }, [dispatch, id])

  return <div className="actor-list">
    {persons.map(person => <ActorItem person={person} />)}
  </div>
}

export default ActorList