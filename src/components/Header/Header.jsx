import "./Header.scss"
import SearchInput from "../SearchInput/SearchInput"
import { Provider } from "react-redux"
import { store } from "store"

const Header = ({ title }) => {
  return <header className="header">
    <div className="container">
      <h1 className="container__title">{title}</h1>
      <div className="search-language">
        {title === 'Main' ? <Provider store={store}>
          <SearchInput />
        </Provider> : null}
        <p className="search-language__language">EN</p>
      </div>
    </div>
  </header>
}

export default Header