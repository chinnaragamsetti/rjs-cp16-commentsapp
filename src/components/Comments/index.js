import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const initialCommentsList = []

class Comments extends Component {
  state = {
    inputName: '',
    inputComment: '',
    commentsCount: 0,
    commentsList: initialCommentsList,
  }

  onChangename = event => {
    this.setState({inputName: event.target.value})
  }

  onChangecomment = event => {
    this.setState({inputComment: event.target.value})
  }

  onAddcomment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state
    const profileBackground =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]

    const newComment = {
      id: uuidv4(),
      name: {inputName},
      comment: {inputComment},
      date: new Date().toLocaleString(),
      profileClassname: profileBackground,
      isLiked: false,
    }
    console.log(newComment.id)

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      commentsCount: prevState.commentsCount + 1,
      inputName: '',
      inputComment: '',
    }))
  }

  afterDelete = id => {
    const {commentsList} = this.state
    const afterdDeletelist = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: afterdDeletelist,
      commentsCount: prevState.commentsCount - 1,
    }))
  }

  onChangeLikeStatus = id => {
    //  const {commentsList} = this.state
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {inputName, inputComment, commentsCount, commentsList} = this.state

    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <div className="inputscontainer">
            <h1 className="heading">Comments</h1>
            <p className="para">Say something and 4.0 Technologies</p>
            <form className="form" onSubmit={this.onAddcomment}>
              <input
                type="text"
                onChange={this.onChangename}
                className="inputname"
                value={inputName}
                placeholder="Your Name"
              />
              <textarea
                className="inputcomment"
                onChange={this.onChangecomment}
                rows="4"
                cols="25"
                value={inputComment}
                placeholder="Your Comment"
              >
                {inputComment}
              </textarea>
              <button type="submit" className="addcommentbutton">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image"
            alt="comments"
          />
        </div>

        <hr className="hrline" />

        <div className="commentcountcontainer">
          <div className="commentcount">
            <h1>{commentsCount}</h1>
          </div>
          <p className="para">Comments</p>
        </div>
        <ul className="commentslist">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              eachDetails={eachComment}
              afterDelete={this.afterDelete}
              onChangeLikeStatus={this.onChangeLikeStatus}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
