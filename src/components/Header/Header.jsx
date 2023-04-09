import "./Header.scss"
import SearchInput from "../../modules/SearchInput/SearchInput"

const Header = ({ title }) => {
  return <header className="header">
    <div className="container">
      <h1 className="container__title">{title}</h1>
      <div className="search-language">
        <SearchInput />
        <p className="search-language__language">EN</p>
      </div>
    </div>
  </header>
}

export default Header