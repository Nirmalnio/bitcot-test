import React from 'react'
import SubHeader from '../../Components/SubHeader/SubHeader'
import data from '../../fetch/data.json'
import Card from '../../Components/Cards/Card';
import "./Moviespage.css"

function Moviespage() {

  const protype = data?.entries.filter((item)=>item?.programType==="movie")
  const filteredata = protype?.filter((item)=>item?.releaseYear>=2010)
  const alphafilter =  filteredata.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }));

  return (
    <div>
        <SubHeader title="Popular Movies" />
        <div className='seriesdiv'>
        {alphafilter?.map((items,i)=>{
          return(
            <Card data={items} key={i}/>
          )
        })
        }
        </div>
    </div>
  )
}

export default Moviespage