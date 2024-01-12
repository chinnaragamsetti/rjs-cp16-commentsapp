// Write your code here

import './index.css'

const CommentItem = props => {
  const {eachDetails, afterDelete} = props
  const {id, name, comment} = eachDetails

  const onDeletelist = () => {
    afterDelete(id)
  }

  return (
    <li className="eachlist">
      <div className="pro">
        <div className="profileimage">
          <h1 className="proimagehead">{name[0]}</h1>
        </div>
        <p className="name">{name}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="likeanddeletecontainer">
        <div className="likecontainer">
          <img
            alt="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            className="likeicon"
          />
          <p className="likepara">Like</p>
        </div>
        <button type="button" onClick={onDeletelist} className="deleteButton">
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            className="deleteicon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
