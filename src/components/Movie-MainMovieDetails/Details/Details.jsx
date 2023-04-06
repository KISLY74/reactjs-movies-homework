import MovieItem from "components/Main-MainMovies/MovieItem/MovieItem"
import ActorList from "./ActorList/ActorList"
import image from "assets/img.webp"

const Details = () => {
  return <section className="details">
    <section className="info">
      <MovieItem
        movie={{
          vote_average: 8.335,
          title: 'Spider man'
        }}
        genres={["Genre 1", "Genre 2", "Genre 3"]}
        isHideDesc={true} />
      <div className="info-container">
        <div className="title">
          <h4>Title:</h4>
          <p className="title__value">Movie Title</p>
        </div>
        <div className="overview">
          <h4>Overview:</h4>
          <p className="overview__value">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="date">
          <h4>Release date:</h4>
          <p className="date__value">2021-05-26</p>
        </div>
        <div className="revenue">
          <h4>Revenue:</h4>
          <p className="revenue__value">$ 42 600 000</p>
        </div>
        <div className="duration">
          <h4>Duration:</h4>
          <p className="duration__value">2:14</p>
        </div>
        <div className="genres">
          <p>Genre 1</p>
          <p>Genre 2</p>
          <p>Genre 3</p>
        </div>
        <section className="cast">
          <div className="cast-up-container">
            <h4>Top Billed Cast:</h4>
            <p>Show all</p>
          </div>
          <ActorList />
        </section>
        <section className="images">
          <h4>Images:</h4>
          <div className="images-content">
            {new Array(8).fill(<img src={image} alt="" />)}
          </div>
        </section>
      </div>
    </section>
  </section >
}

export default Details