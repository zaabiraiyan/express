import React from 'react'

const Recent = ({likes}) => {
  return (
    <div className="recent-container">
        {likes.map((like)=><ul className="recent-item"><li><h1>{like.title}</h1></li>
        
        </ul>)}
    </div>
  )
}

export default Recent