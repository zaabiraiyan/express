import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main><div > 
  
    </div>
      <div>
        {
            posts.length?(
                <Feed posts={posts}/>
            ):(
                <p>no post Found</p>
            )
        }
        </div>
    </main>
  )
}

export default Home