import React from "react";
import "./Footer.css";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="footer-container">
        <h1>CONTACT SECTION</h1>
        <div className="boxs">
          <div className="company" data-aos="fade-up">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Why us</li>
              <li>Security</li>
              <li>Partnership</li>
            </ul>
          </div>
          <div className="categories" data-aos="fade-down">
            <h2>Categories</h2>
            <ul>
              <li>Basic Yoga</li>
              <li>Strength Traning</li>
              <li>Body Buliding</li>
              <li>Weight Loss</li>
            </ul>
          </div>
          <div className="help" data-aos="fade-up">
            <h2>Help</h2>
            <ul>
              <li>Account</li>
              <li>Support Center</li>
              <li>Privacy Policy</li>
              <li>Terms& Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
