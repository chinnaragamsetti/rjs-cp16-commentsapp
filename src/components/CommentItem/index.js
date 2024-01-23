// Write your code here

import './index.css'

const CommentItem = props => {
  const {eachDetails, afterDelete, onChangeLikeStatus} = props
  const {id, name, comment, date, profileClassname, isLiked} = eachDetails
  // const time = date.getMinutes()
  const onDeletelist = () => {
    afterDelete(id)
  }

  const onLike = () => {
    onChangeLikeStatus(id)
  }
  const islikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const islikeClass = isLiked ? 'islikedPara' : 'islikePara'
  return (
    <li className="eachlist">
      <div className="pro">
        <div className={`profileimage ${profileClassname}`}>
          <h1 className="proimagehead">{name.inputName[0]}</h1>
        </div>
        <p className="name">{name.inputName}</p>
        <p className="date">{date} minutes ago</p>
      </div>
      <p className="comment">{comment.inputComment}</p>
      <div className="likeanddeletecontainer">
        <div className="likecontainer">
          <img alt="like" src={islikeImage} className="likeicon" />
          <button
            type="button"
            onClick={onLike}
            className={` likebutton ${islikeClass}`}
          >
            <p>Like</p>
          </button>
        </div>
        <button type="button" onClick={onDeletelist} className="deleteButton">
          <img
            alt="delete"
            data-testid="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            className="deleteicon"
          />
        </button>
      </div>
      <hr className="hrline" />
    </li>
  )
}

export default CommentItem
