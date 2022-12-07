import React from 'react'
import { posts } from '../../Assets/Data/Data'
import Post from '../Posts/Post'
import ShareComponent from '../ShareComponents/ShareComponent'
import './feed.scss'



const Feed = () => {
  return (
    <div className='Feed'>
      <div className="feedWrapper">
        <ShareComponent></ShareComponent>
        {posts.map((post)=> <Post key={post.id} {...post} />
         
        )}
        
       
      </div>
    </div>
  )
}

export default Feed