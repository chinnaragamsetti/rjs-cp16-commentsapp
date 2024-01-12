import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'

/* const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
*/
// Write your code here

const initialcommentslist = []

class Comments extends Component {
  state = {
    inputName: '',
    inputComment: '',
    commentsCount: 0,
    commentsList: initialcommentslist,
  }

  onChangename = event => {
    this.setState({inputName: event.target.value})
  }

  onChangecomment = event => {
    this.setState({inputComment: event.target.value})
  }

  onAddcomment = () => {
    const {inputName, inputComment, commentsList} = this.state
    const newComment = {
      id: uuidv4(),
      name: {inputName},
      comment: {inputComment},
    }
    this.setState(prevState => ({
      commentsList: [...commentsList, newComment],
      commentsCount: prevState.commentsCount + 1,
      inputName: '',
      inputComment: '',
    }))
  }

  afterDelete = id => {
    const {commentsList} = this.state
    const afterdDeletelist = commentsList.filter(each => each.id === id)
    this.setState({commentsList: afterdDeletelist})
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
                placeholder="Your Comment"
              >
                {inputComment}
              </textarea>
              <button
                onClick={this.onAddcomment}
                type="submit"
                className="addcommentbutton"
              >
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
              afterDelete={this.afterDelete()}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
