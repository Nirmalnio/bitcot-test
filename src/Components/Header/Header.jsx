import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {


  return (
    <div>
        <header className='headerDiv'>
           <Link to="/" className='headerLogo'>
            <div>
                DEMO Streaming
            </div>
            </Link>
            <div className='header-option'>
             <span className='header-login'>Login</span>

             <button className='header-btn'>Start Your free trial</button>
            </div>

          
        </header>
    </div>
  )
}

export default Header