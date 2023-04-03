import image from "assets/img.webp"

const ActorItem = () => {
  return <div className="actor-item">
    <img src={image} alt="actor_image" />
    <p className="actor-item__name">Actor Name</p>
    <p className="actor-item__character">Played Character</p>
  </div>
}

export default ActorItem