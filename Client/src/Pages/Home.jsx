// import React from 'react'
import  home1 from './img/home1.png'
import  home2 from './img/home2.png'
import './Css/Nav.css'

const Home = () => {
  return (
  <>
  <div className="home">
     
     <div className="hcontent">
       <div className="homtext">
         <h2 className="hedtxt">Hello ,Welcome to <span>Mentee</span> System</h2>
         <p className="hpara">
         Welcome to the Mentee Information System, your dedicated platform for streamlined mentor-mentee collaboration. This system is designed to enhance academic and personal growth by fostering strong, supportive relationships between mentors and mentees. Whether you are setting goals, tracking achievements, or providing feedback, the Mentee Information System simplifies the journey to success. Start exploring today and experience a new level of mentorship!
         </p>
         <button className="pbtn">Learn More</button>
       </div>
       <div className="homimg">
         <img src={home1} alt="" className="himg" />
       </div>
     </div>
     
      
       <div className="home2">
           <div className="hm1">
            <img src={home2} alt="" className="h2img"/>
           </div>
           <div className="hm2">
               <h2 className="hed2text">Why Meettings are important ?</h2>
                   <p className="h2text">
                   Meetings are crucial for fostering effective communication, alignment, and teamwork within any organization or project. They provide an essential platform for team members to exchange ideas, discuss progress, address challenges, and make collaborative decisions. Regular meetings keep everyone on the same page, ensuring that objectives are clear and that each team member understands their role in achieving them.
                   </p>
              
           </div>
          
              


       </div>

   </div>
  </>
  )
}

export default Home