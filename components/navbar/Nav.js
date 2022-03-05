import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import {useAuth0} from '@auth0/auth0-react'

function Nav() {

  const { logout } = useAuth0();
  return (
    <div className='nav'> 
          <Link to='/' style={{textDecoration: "none", color: "black" }}>Home</Link>
          <Link to='/about' style={{textDecoration: "none", color: "black" }}>About</Link>
      <Link to='/dashboard' style={{ textDecoration: "none", color: "black" }}>Dashboard</Link>
      <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default Nav