import React, { useEffect } from 'react'
import moment from "moment"

const ExpEduBox = ({title , data}) => {

  return (
    <>
    <h1 id="feel" style={{textAlign:"center"}}>{title} </h1>
    {data?.map((ele=>{
        console.log(ele?.startDate);
        
        return (
            <div className='expDetail'  key={ele.id}>

            <div className='experineceInner'>
            <p className='time'>{ele?.startdate} - {ele?.enddate ? ele?.enddate : "Present"}</p>
    
    <img className='expImg' src={ele?.image} alt='img'/>

                <div className='exp'>
 
                <div>
                <h1>{ele?.role || ele?.school}</h1>
                <h2 style={{opacity: 0.6}}>{ele?.company || ele?.specialization}</h2>
                <ul className='description'>
                {Array.isArray(ele?.description) ? (
    <ul>
        {ele.description.map((desc, index) => (
            <li key={index}>{desc}</li> 
        ))}
    </ul>
) : (
    <li>{ele?.description}</li> 
)}
                </ul>
                </div>
                </div>
                
            </div>
           
        </div>
        )
    }))}
 
    </>
  )
}

export default ExpEduBox