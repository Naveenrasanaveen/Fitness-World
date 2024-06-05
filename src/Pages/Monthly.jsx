import React from 'react'
import './Monthly.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Monthly = () => {
    useEffect(()=>{
      aos.init({duration:1000})
    },[])
  return (
    <div className="monthly-plan">
       <div>
        <p>DISCOVER</p>
        <p><span>$99</span>/per month</p>
        <ul>
            <li>5 classes per month</li>
            <li>4 Group class monthly</li>
            <li>Online class access</li>
        </ul>
        <button>
            Choose Plan
        </button>
       </div>
       <div>
        <p>ENTERPRISE</p>
        <p><span>$299</span>/per month</p>
        <ul>
            <li>10 classes per month</li>
            <li>8 Group class monthly</li>
            <li>Online class access</li>
            <li>E-book fitness guide</li>
            <li>7 Extra fitness training</li>
        </ul>
        <button>
            Choose Plan
        </button>
       </div>
       <div>
        <p>PROFESSIONAL</p>
        <p><span>$199</span>/per month</p>
        <ul>
            <li>7 classes per month</li>
            <li>6 Group class monthly</li>
            <li>Online class access</li>
            <li>E-Book fitness guide</li>
        </ul>
        <button>
            Choose Plan
        </button>
       </div>
    </div>
  )
}

export default Monthly