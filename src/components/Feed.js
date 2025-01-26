import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <main>
        {
            posts.map((post)=><Post post={post} key={post.id}/>)
        }
    </main>
  )
}

export default Feed