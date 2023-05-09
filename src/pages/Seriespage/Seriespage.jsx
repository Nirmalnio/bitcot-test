import React from 'react'
import SubHeader from '../../Components/SubHeader/SubHeader'
import data from '../../fetch/data.json'
function Seriespage() {

  console.log(data,"data response");
 

  return (
    <div>
        <SubHeader title="Popular Series" />
        <div className='seriesdiv'>

        </div>
    </div>
  )
}

export default Seriespage