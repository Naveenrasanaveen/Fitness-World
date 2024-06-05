import React from 'react'
import './Course.css'
import one from './../assets/weightTraining.jpg'
import two from './../assets/heros1.jpg'
import three from './../assets/bodybuilding.jpg'
import four from './../assets/yoga.jpg'
import five from './../assets/pexels-cesar-galeao-1673528-3253501.jpg'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Course = () => {
  
    useEffect(()=>{
      aos.init({duration:1000})
    },[])

  return (
    <div className="course-container"  >
        <h1 data-aos='fade-right'>OUR COURSES</h1>
        <p data-aos='fade-right'>
        popular in ancient Greece. Their curricula included self-defense, gymnastics medica, or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping
        </p>
        <div className="courses">
          <ul>
            <li>
                <div className="slider">
                    <img src={one}alt="" />
                    <div>
                        <h3>
                            Strength Training
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nesciunt id consequuntur officiis ratione ducimus placeat quae neque nulla obcaecati.
                        </p>
                        <button>
                            Learn more
                        </button>
                    </div>
                </div>
            </li>
            <li>
                <div className="slider">
                    <img src={two}alt=""/>
                    <div>
                        <h3>
                            Weight Loss
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nesciunt id consequuntur officiis ratione ducimus placeat quae neque nulla obcaecati.
                        </p>
                        <button>
                            Learn more
                        </button>
                    </div>
                </div>
            </li>

            <li>
                <div className="slider">
                    <img src={three}alt="" />
                    <div>
                        <h3>
                            Boudybuliding
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nesciunt id consequuntur officiis ratione ducimus placeat quae neque nulla obcaecati.
                        </p>
                        <button>
                            Learn more
                        </button>
                    </div>
                </div>
            </li>

            <li>
                <div className="slider">
                    <img src={four}alt=""  />
                    <div>
                        <h3>
                            Basic Yogo
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nesciunt id consequuntur officiis ratione ducimus placeat quae neque nulla obcaecati.
                        </p>
                        <button>
                            Learn more
                        </button>
                    </div>
                </div>
            </li>

            <li>
                <div className="slider">
                    <img src={five}alt=""  />
                    <div>
                        <h3>
                            Gymastic
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nesciunt id consequuntur officiis ratione ducimus placeat quae neque nulla obcaecati.
                        </p>
                        <button>
                            Learn more
                        </button>
                    </div>
                </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Course