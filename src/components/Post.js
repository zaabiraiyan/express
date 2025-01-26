import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <main>
      <div className="post-card">
        <Link to={`/post/${post.id}`} className="post-title"><h1>{post.title}</h1></Link>
        <p>{post.body.length<=25?post.body:`${post.body.slice(0,25)}...`}</p>
        </div>
    </main>
  )
}

export default Post