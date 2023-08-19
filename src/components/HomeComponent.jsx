import React from 'react'
import PostStatus from './common/Post_update'
import "../Sass/HomeComponent.scss"


function HomeComponent({currentUser}) {
  return<>
  <PostStatus currentUser={currentUser} />
  </>
}

export default HomeComponent