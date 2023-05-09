import React from 'react'
import SubHeader from '../../Components/SubHeader/SubHeader'
import "./Homepage.css"
import { Link } from 'react-router-dom'
function Homepage() {
    
  return (
    <div>
        <SubHeader title="Popular Titles"/> 
        <div className='home-bodyDiv'> 

        <div className='cardsdiv'>
              <Link to="/seriespage" className='tilecards'> 
              <div >
                   <b>Series</b>
               </div>
              </Link>
               <span>popular series</span>
        </div>

         <div className='cardsdiv'>
          <Link to="/moviespage"  className='tilecards'>
          <div>
           <b>Movies</b>
           </div>
           </Link>
           <span>popular movies</span>
         </div>
          
        </div>
    </div>
  )
}

export default Homepage

