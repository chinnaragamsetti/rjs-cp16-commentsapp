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
    inputname: '',
    inputcomment: '',
    commentscount: 0,
    commentslist: initialcommentslist,
  }

  onChangename = event => {
    this.setState({inputname: event.target.value})
  }

  onChangecomment = event => {
    this.setState({inputcomment: event.target.value})
  }

  onAddcomment = () => {
    const {inputname, inputcomment, commentscount, commentslist} = this.state
    const newcomment = {
      id: uuidv4(),
      name: {inputname},
      comment: {inputcomment},
    }
    this.setState(prevState => ({
      commentslist: [...commentslist, newcomment],
      commentscount: prevState.commentscount + 1,
      inputname: '',
      inputcomment: '',
    }))
  }

  render() {
    const {inputname, inputcomment, commentcount, commentslist} = this.state

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
                value={inputname}
                placeholder="Your Name"
              />
              <textarea
                className="inputcomment"
                onChange={this.onChangecomment}
                rows="8"
                cols="25"
                placeholder="Your Comment"
              >
                {inputcomment}
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
            <h1>{commentcount}</h1>
          </div>
          <p className="para">Comments</p>
        </div>
        <ul className="commentslist">
          {commentslist.map(eachcomment => (
            <CommentItem key={eachcomment.id} eachdetails={eachcomment} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
