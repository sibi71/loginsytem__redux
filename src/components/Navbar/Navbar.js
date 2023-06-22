import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__left'>
                <h1>Logo</h1>
            </div>
            <div className='navbar__right'>
                <Link to="/">Home</Link>
                <Link to = "/">About</Link>
                <Link to = "/">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar