// Write your code here

import './index.css'

const CommentItem = props => {
  const {eachDetails, afterDelete, onChagelikestatus} = props
  const {id, name, comment, date, profileClassname, isLiked} = eachDetails

  const onDeletelist = () => {
    afterDelete(id)
  }
  const onLike = () => {
    onChagelikestatus(id)
  }
  const islikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const islikeClass = isLiked ? 'islikedpara' : 'islikepara'
  return (
    <li className="eachlist">
      <div className="pro">
        <div className={`profileimage ${profileClassname}`}>
          <h1 className="proimagehead">{name[0]}</h1>
        </div>
        <p className="name">{name}</p>
        <p className="date">{date}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="likeanddeletecontainer">
        <div className="likecontainer">
          <button type="button" onClick={onLike} className="likebutton">
            <img alt="like" src={islikeImage} className="likeicon" />
            <p className={islikeClass}>Like</p>
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
    </li>
  )
}

export default CommentItem
