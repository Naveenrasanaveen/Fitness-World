import React from "react";
import hero1 from "./../assets/pexels-cesar-galeao-1673528-3253501.jpg";
import "./Hero1.css";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Logo from "./Logo";

const Hero1 = ({login,setLogin}) => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  console.log(login);
  return (

    <>
      {
        login && <Logo setLogin={setLogin}/>
      }
      <div className="hero-image">
        <div className="hero-content" data-aos="fade-right">
          <div className="hero-content1">
            <h1>
              FITNE <span>SS</span>
            </h1>
            <h3>GET HEALTHY BODY</h3>
          </div>
          <div className="hero-content2">
            <p>
              We offer as well hardcore strenght machinces curve
              treadmills,boxing,Studio,TRX and spinning Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus, iusto.
            </p>
          </div>
          <button>Join know</button>
        </div>
      </div>
    </>
  );
};

export default Hero1;
