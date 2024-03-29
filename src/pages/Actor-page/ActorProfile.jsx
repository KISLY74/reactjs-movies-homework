import "./ActorProfile.scss"
import MainActorProfile from "modules/Actor-MainActorProfile/MainActorProfile"
import Header from "components/Header/Header"

const ActorProfile = () => {
  return <>
    <Header title="Actor profile" />
    <MainActorProfile />
  </>
}

export default ActorProfile