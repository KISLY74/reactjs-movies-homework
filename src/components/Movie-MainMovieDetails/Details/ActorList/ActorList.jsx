import ActorItem from "./ActorItem/ActorItem"

const ActorList = () => {
  return <div className="actor-list">
    {new Array(6).fill(<ActorItem />, 0)}
  </div>
}

export default ActorList