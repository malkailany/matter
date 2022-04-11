import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Redirect } from 'react-router'
import Posts from '../../utils/posts/posts'
import './profile.css'
const Profile = () => {
  const { username } = useParams()
  const [profile, SetProfile] = useState()
  useEffect(() => {
    axios.get(`/user/profile/${username}`).then(res => {
      if (res.status !== 200) throw 'err'
      SetProfile(res.data)
      console.log('pp ', profile)
    })
  }, [])
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-8'>
          <div className='profile-container'>
            <div className='profile-bio'>
              <div className='profile-picture'>
                <img src={profile?.avatar || ''} alt='image profile' />
              </div>
              <div className='profile-info'>
                <h2 className='profile-name'>
                  {profile?.name || `'${username}' Does not exist`}
                </h2>
                <h4 className='profile-username'>
                  {`@${profile?.username}` || ``}
                </h4>
                <p>{profile?.bio || ``}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-8'>
          <h2>My posts</h2>
          <hr />
          {profile?.posts.map(postData => {
            return <Posts data={postData} profile={profile} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile
