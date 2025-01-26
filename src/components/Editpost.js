import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ({posts,edittitle,setedittitle,editbody,seteditbody,handleedit}) => {
    const {id}=useParams();
    const post=posts.find((post)=>post.id.toString()===id)

    useEffect(()=>{
        if(post){
            setedittitle(post.title)
            seteditbody(post.body)
        }
    },[post,seteditbody,setedittitle])
  return (
    <main  className="editpost-container">
        {edittitle &&
        <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input
           id='title'
            value={edittitle}
            onChange={(e)=>setedittitle(e.target.value)}
             className="editpost-input"
            />
            <textarea
            id='body'
            value={editbody}
            onChange={(e)=>seteditbody(e.target.value)}
            className="editpost-textarea"
            />
            <button onClick={()=>handleedit(post.id)}className="editpost-submit">submit</button>

        </form>
        
        </>

        }
    </main>
  )
}

export default Editpost