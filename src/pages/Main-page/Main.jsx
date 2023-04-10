import './Main.scss'
import Header from "components/Header/Header"
import MainMovies from "components/Main-MainMovies/MainMovies"

const Main = () => {
  return <div className="main-container">
    <Header title={"Main"} />
    <MainMovies />
  </div>
}

export default Main