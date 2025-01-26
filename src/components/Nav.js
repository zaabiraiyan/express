import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setsearch}) => {
  return (
    <nav>
        <form onSubmit={(e)=>e.preventDefault()}>
            <label>Search</label>
            <input
            type="text"
            placeholder='Search Room'
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            required
            
            ></input>
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="post">Room booking</Link></li>
            <li><Link to="about">About us</Link></li>
            <li><Link to="recent">Liked Rooms</Link></li>
        </ul>
    </nav>
  )
}

export default Nav