import React, { useEffect, useRef, useState } from "react";
import "./Hero2.css";
import video1 from './../assets/trailvideo2.mp4'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import aos from 'aos'
import 'aos/dist/aos.css'


const Hero2 = () => {

  const[video,setvideo]=useState(false)
   
  const player =useRef(null)
 
  useEffect(()=>{
aos.init({duration:1000})
  },[])

 const closePlayer =(e)=>{
  if(e.target === player.current){
    setvideo(false)
  }
 }



  return (
    <>
      
      <div className="hero2-container ">
      
        
        <div className="hero2">
        {
          video && <div className="video-player" ref={player} onClick={closePlayer}>
            <video src={video1} controls width='800px' autoPlay/>
  
          </div>
        }
          <div className="hero2-image">
            <div className="image1" data-aos='fade-up'></div>
            <div className="image2" data-aos='fade-down' ></div>
          </div>
          <div className="image-content" data-aos='fade-right'>
            <div className="hero2-content1">
              <h1>
                ABOUT US
              </h1>
              <h2>
                THE BEST GYM
              </h2>
            </div>
            <div className="hero2-content2">
              <p>
              Gymnasium apparatus like barbells, jumping boards, running paths, tennis-balls, cricket fields, and fencing areas are used for exercises. In safe weather, outdoor locations are the most conducive to health. Gyms were popular in ancient Greece. Their curricula included self-defense, gymnastics medica, or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping
              </p>
              <p>
              n the 18th century, Salzmann, a German clergyman, opened a workout area in Thuringia teaching bodily exercises, including running and swimming. Clias and Volker established gyms in London, and in 1825, Doctor Charles Beck, a German immigrant
              </p>
            </div>
            <div className="hero3-content3 " >
              <button className="btn1">
                READ MORE
              </button>
             
              <div className="video" onClick={()=>setvideo(true)}>
              <div className="video-icon">
              <MdOutlineSlowMotionVideo />
              </div>
              <h2>
                Video
              </h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
