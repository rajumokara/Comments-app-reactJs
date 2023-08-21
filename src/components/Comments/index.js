import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
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

class Comments extends Component {
  state = {name: '', description: '', commentsList: []}

  onChangeInputName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({description: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {name, description, commentsList} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    // console.log(initialContainerBackgroundClassNames.length - 1)

    const updatedCommentsList = {
      id: uuidv4(),
      name,
      description,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, updatedCommentsList],
      name: '',
      description: '',
    }))
  }

  likeToggle = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    console.log(id)
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  render() {
    const {name, description, commentsList} = this.state

    console.log(commentsList)

    // const nameSlice = name
    // const nameResult = nameSlice.slice(0, 1)

    return (
      <>
        <div className="commentsContainer">
          <div className="commentsBoxContainer">
            <div className="formSubmit">
              <h1>Comments</h1>
              <p>Say something about 4.0 technologies</p>
              <form onSubmit={this.formSubmit}>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeInputName}
                  value={name}
                  placeholder="Your Name"
                />
                <textarea
                  className="form-control"
                  rows="6"
                  value={description}
                  onChange={this.onChangeComment}
                  placeholder="Your Comment"
                />
                <button type="submit">Add Comment</button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              width="300px"
            />
          </div>

          <div className="commentsDetailsContainer">
            <p>
              <span className="commentsCount">{commentsList.length}</span>{' '}
              Comments
            </p>
            <ul>
              {commentsList.map(eachComment => (
                <CommentItem
                  commentDetails={eachComment}
                  key={eachComment.id}
                  likeToggle={this.likeToggle}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Comments
