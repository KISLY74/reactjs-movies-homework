import image from "assets/img.webp"
import MovieList from "components/Main-MainMovies/MovieList/MovieList"

const MainActor = () => {
  return <main className="main">
    <section className="actor-info">
      <img src={image} alt="" />
      <div className="info">
        <h3 className="info__name">Actor Name</h3>
        <section className="section">
          <h5 className="section__title">Birthday:</h5>
          <p className="section__value">1959-04-15</p>
        </section>
        <section className="section">
          <h5 className="section__title">Place of birth:</h5>
          <p className="section__value">Paddington, London, England</p>
        </section>
        <section className="section">
          <h5 className="section__title">Biography:</h5>
          <p className="section__value">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </section>
        <section className="section-photos">
          <h4>Photos</h4>
          <div className="photos">
            {new Array(4).fill(<img src={image} alt="" />)}
          </div>
        </section>
      </div>
    </section>
    <section className="actor-films">
      <h2 className="actor-films__title">KNOWN BY</h2>
      <MovieList movies={new Array(10).fill({
        vote_average: 7.4,
        title: 'Spider man',
        genres: ["Genre 1", "Genre 2", "Genre 3"]
      }, 0)} />
    </section>
  </main>
}

export default MainActor