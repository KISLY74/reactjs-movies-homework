import { useEffect, useRef, useState } from "react"

const Pagination = () => {
  const [pages] = useState([1, 2, 3, 4, 5])
  const pagesRef = useRef()

  useEffect(() => {
    pagesRef.current.children[0].classList.add('pagination__page_active')
  }, [])

  return <div className="pagination" ref={pagesRef}>
    {pages.map(page => <p key={page} className="pagination__page">{page}</p>)}
  </div>
}

export default Pagination