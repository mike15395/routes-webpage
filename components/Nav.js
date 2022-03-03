import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    <div className='nav'> 
          <Link to='/' style={{textDecoration: "none", color: "black" }}>Home</Link>
          <Link to='/about' style={{textDecoration: "none", color: "black" }}>About</Link>
          <Link to='/dashboard' style={{textDecoration: "none", color: "black" }}>Dashboard</Link>
    </div>
  )
}

export default Nav