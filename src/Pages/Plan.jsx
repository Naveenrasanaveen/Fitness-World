import React, { useState } from 'react'
import './Plan.css'
import Monthly from './Monthly'
import Annuvel from './Annuvel'

const Plan = () => {
  const [plans,setPlans]=useState(true)
  return (
    <>
     <div className="paln-container">
        <h1>Choose The Best Plan</h1>
        <p>Choose a plan thats right far tour growing team Simple pricing &No hidden charges</p>
         <div className="button">
            <button onClick={()=>setPlans(true)}>
                Monthly
            </button>
            <button onClick={()=>setPlans(false)}>
                Annual
            </button>
         </div>
    </div>
    <div className='plans-gym'>
    {
      plans?<Monthly/>:<Annuvel/>
     }
    </div>
     
    </>
  )
}

export default Plan