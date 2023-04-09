import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveCategory } from "./CategoriesTabs.slice"
import { changeValue } from "modules/SearchInput/SearchInput.slice"

const CategoriesTabs = () => {
  const dispatch = useDispatch()
  const { activeCategory } = useSelector(state => state.categories)

  const categoriesRef = useRef()
  const categoryNames = ["Popular", "Top rated", "Upcoming"]

  function handleClickCategory(elem) {
    dispatch(changeValue(''))
    let categories = categoriesRef.current.children

    for (let i = 0; i < categories.length; i++)
      categories[i].classList.remove('filter-list__item_active')

    elem.classList.add('filter-list__item_active')

    dispatch(setActiveCategory(elem.textContent))
  }

  useEffect(() => {
    let categories = categoriesRef.current.children

    for (let i = 0; i < categories.length; i++) {
      if (activeCategory === categories[i].textContent)
        categories[i].classList.add('filter-list__item_active')
    }
  }, [activeCategory])

  return <div className="filter-list" ref={categoriesRef}>
    {categoryNames.map(name => {
      return <p
        key={name}
        className="filter-list__item"
        onClick={(e) => handleClickCategory(e.target)}>{name}</p>
    })}
  </div>
}

export default CategoriesTabs