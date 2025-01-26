
import { useEffect, useState } from 'react';
import './App.css';
import Aboutus from './components/Aboutus';
import Header from './components/Header';
import Home from './components/Home';
import Missing from './components/Missing';
import Nav from './components/Nav';
import Newpost from './components/Newpost';
import Postpage from './components/Postpage';
import { Route, Routes } from 'react-router-dom';

import Editpost from './components/Editpost';
import Recent from './components/Recent';


function App() {

  const [search,setsearch]=useState('')
  const [posts,setposts]=useState([
    {
      id:1,
      title:"app no:25",
      body:"Booked Single bedroom"

    },
    {
      id:2,
      title:"app no:26",
      body:"Booked Single bedroom"

    },
    {
      id:3,
      title:"app no:27",
      body:" Booked Villa "

    },
    {
      id:4,
      title:"app no:28",
      body:"Booked Double Bedroom"

    }
    
  ])

  const [posttitle,setposttitle]=useState('')
  const [postbody,setpostbody]=useState('')
  const handlesubmit=(e)=>{
    e.preventDefault()
    const id=posts.length?posts[posts.length-1].id+1:1
    const newpost={id,title:posttitle,body:postbody}
    const allpost=[newpost,...posts]
    setposts(allpost)
    setpostbody('')
    setposttitle('')
  }
 
  const [edittitle,setedittitle]=useState('')
  const [editbody,seteditbody]=useState('')
  const handleedit=(id)=>{
    const updatepost={id,title:edittitle,body:editbody}
    setposts(posts.map((post)=>post.id===id?{...updatepost}:post))
   seteditbody('')
   setedittitle('')


  }
  
const [likes,setlikes]=useState([{}])
  
  const handledelete=(id)=>{
    const deleteitem=posts.filter((post)=>post.id!==id)
    setposts(deleteitem)

  }

  const handlelike=(id)=>{
    const likeitem=posts.filter((post)=>post.id===id )
    
    setlikes(likeitem)
    

  }
  console.log(likes[0])
  

  const [searchitem,setsearchitem]=useState('')
  useEffect(()=>{
    const filteritems=posts.filter((post)=>post.body.includes(search.toUpperCase())||
    post.title.includes(search)
  )
  setsearchitem(filteritems.reverse())
  },[posts,search])


  return (
    <div className="App">
      
      <Header title={"Hotel Management System"}/>
      <Nav search={search} setsearch={setsearch}/>
      <Routes>
      <Route path="/" element={<Home posts={searchitem}/>}/>
      <Route path="post" >
      <Route index element={<Newpost
      posttitle={posttitle}
      setposttitle={setposttitle}
      postbody={postbody}
      setpostbody={setpostbody}
      handlesubmit={handlesubmit}
      
      
      />}/>
      <Route path="likes" element={<Postpage/>}/>
      <Route path=":id" element={<Postpage 
      posts={posts} 
      handledelete={handledelete}
      handlelike={handlelike}
      />}/>
      </Route>
      <Route path="edit/:id" element={<Editpost
      posts={posts}
      edittitle={edittitle}
      setedittitle={setedittitle}
      editbody={editbody}
      seteditbody={seteditbody}
      handleedit={handleedit}
      
      />}/>
      <Route path="*" element={<Missing/>}/>
      <Route path="about" element={<Aboutus/>}/>
      <Route path="recent" element={<Recent likes={likes}/>}/>
      
      
      
      </Routes>
      
    </div>
  );
}

export default App;
