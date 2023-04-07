import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { setPage } from "./Pagination.slice"

const Pagination = () => {
  const dispatch = useDispatch()
  const [pages] = useState([1, 2, 3, 4, 5])
  const pagesRef = useRef()

  function handleClickPage(elem) {
    let pages = pagesRef.current.children

    for (let i = 0; i < pages.length; i++)
      pages[i].classList.remove('pagination__page_active')

    elem.classList.add('pagination__page_active')
    dispatch(setPage(elem.textContent))
  }

  return <div className="pagination" ref={pagesRef}>
    {pages.map((page, ind) =>
      <p key={page}
        className={`pagination__page ${ind === 0 ? 'pagination__page_active' : ''}`}
        onClick={(e) => handleClickPage(e.target)}>{page}</p>)}
  </div>
}

export default Pagination