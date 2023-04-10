import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const MovieItemSkeleton = () => {
  return <div className="item">
    <p className="item__vote-average">
      <Skeleton width={32} height={18} />
    </p>
    <Skeleton className="item__img" />
    <Skeleton className="item__title" count={2} />
    <div className="genres">
      <Skeleton width={30} height={14} />
      <Skeleton width={70} height={14} />
      <Skeleton width={70} height={14} />
      <Skeleton width={50} height={14} />
      <Skeleton width={70} height={14} />
    </div>
  </div >
}

export default MovieItemSkeleton