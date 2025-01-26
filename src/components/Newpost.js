import React from 'react'

const Newpost = ({posttitle,setposttitle,postbody,setpostbody,handlesubmit}) => {
  return (
    <main className="newpost-container">
        <form onSubmit={handlesubmit} className="newpost-form">
            <input
            type='text'
            placeholder='App No'
            value={posttitle}
            onChange={(e)=>setposttitle(e.target.value)}
             className="newpost-input"
            />
            <textarea
            type='text'
            placeholder='Room Type'
            value={postbody}
            onChange={(e)=>setpostbody(e.target.value)}
            className="newpost-textarea"

            
            
            />
            <button type="submit" className="newpost-submit">submit</button>


        </form>
    </main>
  )
}

export default Newpost