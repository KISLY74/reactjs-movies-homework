import ActorProfile from "pages/Actor-page/ActorProfile"
import Main from "pages/Main-page/Main"
import MovieDetails from "pages/Movie-page/MovieDetails"
const { BrowserRouter, Routes, Route } = require("react-router-dom")

const AppRouter = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/person/:id" element={<ActorProfile />} />
    </Routes>
  </BrowserRouter>
}

export default AppRouter