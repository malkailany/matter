import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './social.css'
import axios from 'axios'

const Post = ({ data, removePost}) => {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const { user, isAdmin } = auth
  const [EditMode, setEditMode] = useState(false)
  const [NewPost, setNewPost] = useState(data.post)
  const [PostUpdated, setUpdate] = useState(false)

  const EditPost = async e => {
    await axios
      .patch(
        '/api/post/edit',
        {
          data,
          post: NewPost
        },
        {
          headers: { Authorization: token }
        }
      )
      .then(res => {
        if (res.status !== 200) throw 'err'
        setEditMode(false)
        setUpdate(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const DeletePost = async e => {
    await axios.delete('/api/post/delete', {
      headers: { Authorization: token },
      data: { data }
    })
    .then(res => {
      if (res.status !== 200) throw 'err'
      removePost(data._id)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='meet-container'>
      <div className='meet-profile-picture'>
        <img
          src={
            data.publisher?.avatar ||
            '/static/media/default-user-image.d7f90b83.png'
          }
        />
      </div>
      <div className='meet-post w-100'>
        <div className='meet-profile-name'>
          <a href={`/user/${data.publisher?.username || 'doesntExist'}`}>
            {data.publisher?.name || 'Anonymous'}
          </a>
        </div>
        <div className='meet-post-blog'>
          {EditMode ? (
            <>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                onChange={e => {
                  setNewPost(e.target.value)
                }}
              >
                {NewPost}
              </textarea>
              <button
                className='btn btn-primary rounded-0 rounded-bottom '
                onClick={EditPost}
              >
                Save
              </button>
              <button
                className='btn  btn-danger rounded-0 rounded-bottom '
                onClick={() => {
                  setEditMode(false)
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <p>{PostUpdated ? NewPost : data.post}</p>
          )}
        </div>
        <div className='meet-post-footer'>
          <div className='meet-post-date'>
            <p>{new Date(data.createdAt).toUTCString()}</p>
          </div>
          <div className='meet-post-actions '>
            {user._id == data.publisher._id ? (
              <>
                <button
                  className='btn btn-secondary'
                  onClick={() => {
                    setEditMode(true)
                  }}
                >
                  ✎
                </button>
              </>
            ) : null}
            {isAdmin || user._id == data.publisher._id ? (
              <>
                <button className='btn btn-danger' onClick={DeletePost}>
                  &#128465;
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
