import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMoviesBySearchQuery } from "store/api"
import { changeValue } from "./SearchInput.slice"

const SearchInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const page = useSelector(state => state.pagination.page)

  function send(key) {
    if (key === 'Enter') {
      dispatch(changeValue(value))
      dispatch(getMoviesBySearchQuery({ value: value, page: page }))
    }
  }

  useEffect(() => {
    value.trim() !== '' && dispatch(getMoviesBySearchQuery({ value: value, page: page }))
  }, [dispatch, page, value])

  return <input
    className="search-language__search"
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    onKeyDown={(e) => send(e.key)}
    placeholder="Movies, person, movie theaters" />
}

export default SearchInput