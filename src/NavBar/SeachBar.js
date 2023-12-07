import React from 'react'
import { useLocation } from 'react-router-dom'

const SeachBar = () => {
    const location=useLocation()
    const data=location.state
    console.log(data)
  return (
    <div>
     <div>
            {data.map((item,index)=>{
                    return(
                        <div key={index}>
                            
                            <img src={item.image} alt="not found"/>
                            <div>
                            <h5 style={{width:"40%"}}>{item.heading.slice(0,20)}</h5>
                        
                            </div>
                           
                  <h2 className="price">{ item.price}</h2>
                        </div>
                    )
                })
            }
           </div>
    </div>
  )
}

export default SeachBar
