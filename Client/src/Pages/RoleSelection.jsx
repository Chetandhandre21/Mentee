import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/roleselect.css'
import rolimg from './img/Role.png'

const RoleSelection = () => {
    const navigate = useNavigate();

  const handleSelectRole = (role) => {
    navigate(`/${role}/login`);
  };
  return (
    <>
<div className="role-selection">
      <div className="role1">
        <h2 className="imghh">Welcome to <span className='rolespan'>Mentee System..!</span></h2>
        <img src={rolimg} alt="" className="roleimg" />

      </div>
      <div className="role2">
        <h2 className="rolehed">Select Your Role</h2>
        <div className="btpr">
        <button className='rolebtn' onClick={() => handleSelectRole('student')}>Student</button>
      <button className='rolebtn'  onClick={() => handleSelectRole('mentor')}>Mentor</button></div>
      

        </div>
      
    </div>
    
    </>

  )
}

export default RoleSelection