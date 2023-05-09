import React from 'react'
import "./SubHeader.css"

function SubHeader({title}) {
  return (
    <div className='subheaderDiv'>
    {title}
    </div>
  )
}

export default SubHeader