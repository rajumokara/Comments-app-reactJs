import {formatDistanceToNow} from 'date-fns'

const CommentItem = ({commentDetails, likeToggle, deleteComment}) => {
  const {
    name,
    description,
    date,
    isLiked,
    id,
    initialClassName,
  } = commentDetails
  const postedTime = formatDistanceToNow(date)
  const initial = name ? name[0].toUpperCase() : ''
  const onClickLikeBtn = () => {
    likeToggle(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const activeLikeText = isLiked ? 'like-active' : 'likebtn'

  return (
    <>
      <li>
        <div className="commentsBox">
          <div className="nameDetails">
            <div>
              <div className={initialClassName}>{name[0].toUpperCase()}</div>
              <p>{name}</p>
              <p className="commentTime">{postedTime}</p>
            </div>
            <p>{description}</p>
            <button
              className="like-btn"
              onClick={onClickLikeBtn}
              data-testid="like"
            >
              <img src={likeImageUrl} alt="like" />
              <span className={activeLikeText}>Like</span>
            </button>
          </div>
          <button
            className="delete-btn"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </>
  )
}
export default CommentItem
