import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>
        <header className='headerDiv'>
            <div className='headerLogo'>
                DEMO Streaming
            </div>

            <div className='header-option'>
             <span className='header-login'>Login</span>

             <button className='header-btn'>Start Your free trial</button>
            </div>

          
        </header>
    </div>
  )
}

export default Header