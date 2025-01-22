import React from 'react'
import './Css/Nav.css'
import logo from './img/menteelogo.png'
import { Link } from 'react-router-dom'

const Mennav = () => {
  return (
    <>
    <div className="nav">
    <div className="logop">
    <div className="logo1">
          <img src={logo} alt="" className="logo" />
          {/* <h4 className="logotxt">Mentee's here</h4> */}
        </div>
        <div className="logotx">
          <h3 className="tx">MentaLink</h3>
        </div>

    </div>
      
        <div className="bar">
          <h5>
          <Link to="/mentor/mentor" className="navbar">Home</Link>
         
           
           
            <Link to="/mentor/schedulemeet" className="navbar">Schedule Meet</Link>
                     
            <Link to="/mentor/viewmentee" className="navbar">View Mentees</Link>
            {/* <Link to="/mentor/mprofile" className="navbar">Profile</Link> */}
           
           
          <Link to="/mentor/signup" className="navbtn">Signup</Link>
          <Link to="/logout" className="navbtn">Logout</Link>
            
          </h5>
        </div>
      </div>
    </>
  )
}

export default Mennav