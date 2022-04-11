import React, { useState, useEffect } from 'react'
import Posts from '../../utils/posts/posts'
import axios from 'axios'
import './social.css'
import CreatePost from './createPost'

function SocialPage () {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    //get posts
    axios
      .get('/api/post')
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const updatePosts = newPost => {
    setPosts(prevState => [newPost, ...prevState])
  }
  const removePost = id => {
    setPosts(posts.filter(post => post._id != id))
  }

  return (
    <>
      <div className='container my-5'>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <CreatePost onSubmit={updatePosts} />
            <hr />
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <h2>What others are saying</h2>
            <div className='row'>
              <div className='col-12'>
                {posts.map(postData => {
                  return <Posts data={postData} removePost={removePost} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialPage
