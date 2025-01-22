// import React from 'react'
import './Css/about.css'
import about from './img/about.jpg'
import './Css/Nav.css'

const About = () => {
  return (
    <>
     <div className="abcontent">
        <div className="abtext">
            <h2 className="abhed">Lets Introduce <span>About us</span> </h2>
            <p className="abpara">


The Mentee Information System is dedicated to fostering impactful mentor-mentee relationships that drive personal and academic growth. We provide a streamlined platform where mentors can guide, motivate, and track their mentees’ progress effectively. With tools for communication, goal-setting, and performance tracking, we make mentorship accessible and productive, empowering students to reach their potential while building strong, supportive connections. Our mission is to simplify the mentorship journey, ensuring that every mentee receives the guidance they need for a successful future.</p>
             <button className="btnab">Know More</button>
        </div>
        <div className="abimg">
            <img className="aim" src={about}/>

        </div>
    </div>
    </>
  )
}

export default About