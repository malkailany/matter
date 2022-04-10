import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import axios from 'axios'
const CreatePost = ({onSubmit}) => {
  const token = useSelector(state => state.token)
  const [post, setPost] = useState('')
  const submitPost = () => {
    if (post.length === 0) {
      console.log('nothing has been written')
      return
    }
    axios
      .post(
        'api/post/new',
        {
          post
        },
        {
          headers: { Authorization: token }
        }
      )
      .then(res => {
        if (!res.status === 200) {
          console.log('error!')
        }
        onSubmit(res.data.post)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div class='mb-3'>
      <label for='exampleFormControlTextarea1' class='form-label'>
        <h2>Share your thoughts...</h2>
      </label>
      <textarea
        class='form-control'
        id='exampleFormControlTextarea1'
        rows='3'
        onChange={e => {
          setPost(e.target.value)
        }}
      ></textarea>
      <button
        className='btn btn-lg btn-primary rounded-0 rounded-bottom '
        onClick={submitPost}
      >
        Share!
      </button>
    </div>
  )
}

export default CreatePost
