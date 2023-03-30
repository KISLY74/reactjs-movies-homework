import "./Header.scss"
import SearchInput from "../SearchInput/SearchInput"

const Header = () => {
  return <header className="header">
    <div className="container">
      <h1 className="container__title">Main</h1>
      <div className="search-language">
        <SearchInput />
        <p className="search-language__language">EN</p>
      </div>
    </div>
  </header>
}

export default Header