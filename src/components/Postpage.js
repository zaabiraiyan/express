import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Postpage = ({posts,handledelete,handlelike}) => {
    const {id}=useParams();
    const post=posts.find((post)=>post.id.toString()===id)
  return (
    <main>
        {post &&
        <>
        <h1>{post.title}</h1>
        <p>{post.body.length<=25?post.body:`${post.body.slice(0,25)}...`}</p>
        <button onClick={()=>handledelete(post.id)}>delete</button>
        <button onClick={()=>handlelike(post.id)}>Likes</button>
        <Link to={`/edit/${post.id}`}><button >Edit</button></Link>
        </> 
       
        
        }
    </main>
  )
}

export default Postpage