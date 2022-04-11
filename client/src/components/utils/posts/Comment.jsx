import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Comment = ({ postId, isCommenting = false, commentData }) => {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const { user } = auth
  console.log(commentData, 'hello')
  const submitComment = e => {
    axios.post(
      '/api/post/comment/new',
      { postId, comment: e.target.value },
      {
        headers: { Authorization: token }
      }
    )
  }
  return (
    <div className='comment-container'>
      <div className='meet-profile-picture'>
        <img src={isCommenting ? user.avatar : commentData.publisher.avatar} />
      </div>
      {isCommenting ? (
        <input
          type='text'
          className='form-control rounded-pill'
          id='comment'
          aria-describedby='commentHelp'
          placeholder='Write something...'
          onKeyPress={e => {
            if (e.key === 'Enter') submitComment(e)
          }}
        />
      ) : (
        <div className='comment-data'>
          <p className="comment-data-name">{commentData.publisher.name}</p>
          <p>{commentData.comment}</p>
        </div>
      )}
    </div>
  )
}

export default Comment
