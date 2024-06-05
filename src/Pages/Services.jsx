import React from "react";
import "./Services.css";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import image1 from "./../assets/pexels-anush-1229356 (1).jpg";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);


  return (
    <div className="services-container">
      <div className=" services " data-aos='fade-left'>
        <h1>Why should people choose fitnesxia services</h1>
        <div className="personal  flexs" >
          <div className="box">
            <IoCheckmarkDoneCircle />
            <h4>Personal Training</h4>
          </div>
          <p>
            Our personal trainers can help you create a personalized fitness
            plan and track your progress
          </p>
        </div>
        <div className="expert flexs " >
          <div className="box">
            <IoCheckmarkDoneCircle />
            <h4>Expert Trainer</h4>
          </div>
          <p>
            Oyr grm is proud to offer a team of highly akilled and certified
            trainer help achieve your health & fitness goals
          </p>
        </div>

        <div className="flexible flexs" >
          <div className="box">
            <IoCheckmarkDoneCircle />
            <h4>Flexible Time</h4>
          </div>
          <p>
            Our personal trainers can help you create a personalized fitness
            plan and track your progress
          </p>
        </div>
      </div>
      <div className="servies-image" data-aos="fade-right">
        <img src={image1} alt="" width="500px" />
      </div>
    </div>
  );
};

export default Services;
