// import React from 'react'
import Nav from './Pages/Nav'
import Mennav from './Pages/Mennav'
import About from './Pages/About'
import Home from './Pages/Home'
import Logout from './Pages/Logout'
import  Schedulemeet from './Pages/Schedulemeet'

import Contact from './Pages/Contact'

import Mprofile from './Pages/Mprofile'
import Signup from './Pages/Signup'
import Msignup from './Pages/Msignup'
import Mlogin from './Pages/Mlogin'
import Mentor from './Pages/Mentor'
import Login from './Pages/Login'
import ViewMen from './Pages/ViewMen'
import Viewmentee from './Pages/Viewmentee'
import RoleSelection from './Pages/RoleSelection'
// import Mentor from './Pages/Mentor'




import { Route, Routes, useLocation } from 'react-router-dom';
import Meetings from './Pages/Meetings'


  

const App = () => {
  const location = useLocation();

  // Determine the user role from the URL path
  const isMentor = location.pathname.includes('/mentor');
  const NavComponent = isMentor ? Mennav : Nav;
  // const location = useLocation();
  // const NavComponent = location.pathname.includes('') ? Nav : Mennav;
  return (
  <>
 {/* <Nav/> */}
 {location.pathname !== '/' && <NavComponent />}
  <Routes>
  <Route path="/" element={<RoleSelection />} />

  {/* student Routes */}
    <Route path='/student/home'element={<Home/>}></Route>
    <Route path='/student/about'element={<About/>}></Route>
    {/* <Route path='/mentor'element={<Mentor/>}></Route> */}
  
    <Route path='/student/contact'element={<Contact/>}></Route>
    <Route path='/student/signup'element={<Signup userType="student" />}></Route>
    <Route path='/student/vmentor'element={<ViewMen/>}></Route>
    <Route path='/student/login'element={<Login userType="student" />}></Route>
    <Route path='/student/metting'element={<Meetings/>}></Route>
    {/* Mentor routes */}
    <Route path='/mentor/signup'element={<Msignup userType="mentor" />}></Route>
    <Route path='/mentor/mentor'element={<Mentor/>}></Route>
    <Route path='/mentor/schedulemeet'element={<Schedulemeet/>}></Route>
    <Route path='/mentor/viewmentee'element={<Viewmentee/>}></Route>
    <Route path='/mentor/mprofile'element={<Mprofile/>}></Route>
    <Route path='/mentor/login'element={<Mlogin userType="mentor" />}></Route>
    <Route path="/logout" element={<Logout />} />

    <Route></Route>
    
  </Routes>
  </>
  )
}

export default App 