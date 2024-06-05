import React, { useRef, useState } from 'react'
import './Logo.css'

const Logo = ({setLogin}) => {
    const[signin,setSignin]=useState(false)
 
    const loginPage=useRef(null)

    const closeLogin=(e)=>{
        if(e.target === loginPage.current){
            setLogin(false)
          }
    }
    
    
  return (
      <div className="logo-container" onClick={closeLogin} ref={loginPage}>
         <div className="logo-page">
            <form>
                {
                    signin?<h3>Login In</h3>:<h3>Sign Up</h3> 
                }
                {
                    signin?<></>:<div>
                         <label htmlFor="">Username</label>
                    <input type="text" placeholder='Enter your name' />
                    </div>
                }
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter your email' />
                <label htmlFor="">Password</label>
                <input type="password" />
                {
                    signin?<></>:<div>
                    <input type="checkbox" />
                     <p>please check the box</p>
                    </div>
                }
                 <p>{signin?"New User?":"Already have Acoount?"}<span onClick={()=>setSignin(true)}>{signin?"Sign Up":"Login In"}</span></p>
            </form>
         </div>
      </div>
  )
}

export default Logo