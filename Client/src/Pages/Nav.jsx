// import React from 'react'
import './Css/Nav.css'
import logo from './img/menteelogo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    
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
          <Link to="/student/home" className="navbar">Home</Link>
            <Link to="/student/about" className="navbar">About</Link>
            {/* <Link to="/student/vmentor" className="navbar">View Mentor</Link> */}
            <Link to="/student/metting" className="navbar">Meetings</Link>
            
            <Link to="/student/contact" className="navbar">Contact</Link>
           
          <Link to="/student/signup" className="navbtn">Signup</Link>
          <Link to="/logout" className="navbtn">Logout</Link>
            
          </h5>
        </div>
      </div>
   </>
  )
}

export default Nav