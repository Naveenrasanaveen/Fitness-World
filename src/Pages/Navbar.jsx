import React, { useState } from "react";
import "./Navbar.css";
import { MdSportsGymnastics } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

const Navbar = ({ setLogin }) => {
  const [menubar, setMenuBar] = useState(false);

  return (
    <div className="container flex">
      <div className="logo-content flex">
        <div className="logo">
          <MdSportsGymnastics />
        </div>
        <h2>Fitness-world</h2>
      </div>
      <div className="nav-content flex">
        <div className="navigation flex">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Support</li>
            <li>Course</li>
          </ul>
        </div>
        <div className="signup" onClick={() => setLogin(true)}>
          <h3>Sign up</h3>
        </div>
      </div>

      <div className={`side-menu1 ${menubar?"menu-bar":""}`}>
        <div className="signup" onClick={() => setLogin(true)}>
          <h3>Sign up</h3>
        </div>
         <button onClick={()=>setMenuBar(false)}>X</button>
        <div>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Support</li>
            <li>Course</li>
          </ul>
        </div>
      </div>

      <div className="menu-bar" onClick={() => setMenuBar(true)}>
        <TfiMenu />
      </div>
    </div>
  );
};

export default Navbar;
