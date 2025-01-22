import React from 'react'
import profilePic from './img/profile.webp';  // Replace with your actual profile picture
import './Css/mprofile.css'; 

const Mprofile = () => {
  
    
  return (
    <>
    <div className="proparent">
     <div className="prochild">
      <div className="proname">
        <input type="text" className="proval" />
      </div>
      <div className="quali">

       <input type="text" className="proquali" />
      </div>
      <div className="mtcount">
       <input type="text" className="procnt" />
      </div>
      <div className="mid">
       <input type="text" className="proid" />
      </div>
      <div className="menxp">
        <input type="text" className="proexp" />

      </div>
      <div className="prosav">
        <button className="proup">
          Save Data
        </button>
      </div>

     </div>


    </div>
    
   
    </>
  )
}

export default Mprofile