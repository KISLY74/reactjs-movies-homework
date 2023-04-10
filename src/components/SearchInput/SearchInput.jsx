import { useState } from "react"

const SearchInput = () => {
  const [value, setValue] = useState()

  return <input
    className="search-language__search"
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Movies, person, movie theaters" />
}

export default SearchInput