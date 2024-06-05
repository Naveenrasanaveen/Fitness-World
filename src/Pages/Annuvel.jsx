import React from 'react'
import './Annuvel.css'

const Annuvel = () => {
  return (
   <div className="annuvel-plan">
      <div>
        <p>DISCOVER</p>
        <p><span>$1099</span>/one year</p>
        <ul>
            <li>5 classes per month</li>
            <li>4 Group class monthly</li>
            <li>Online class access</li>
            <li>More Subcription</li>
        </ul>
        <button>
            Choose Plan
        </button>
       </div>
       <div>
        <p>ENTERPRISE</p>
        <p><span>$2099</span>/Two Years</p>
        <ul>
            <li>10 classes per month</li>
            <li>8 Group class monthly</li>
            <li>Online class access</li>
            <li>E-book fitness guide</li>
            <li>7 Extra fitness training</li>
            <li>More subcription</li>
            <li>Offine class access</li>
        </ul>
        <button>
            Choose Plan
        </button>
       </div>
       <div>
        <p>PROFESSIONAL</p>
        <p><span>$509</span>/Six month</p>
        <ul>
            <li>7 classes per month</li>
            <li>6 Group class monthly</li>
            <li>Online class access</li>
            <li>E-Book fitness guide</li>
            <li>Two Subcription</li>

        </ul>
        <button>
            Choose Plan
        </button>
       </div>
    
   </div>
  )
}

export default Annuvel