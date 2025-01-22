import React from 'react'
import { Link } from 'react-router-dom'
import './Css/login.css'
import loginimg from './img/loginimg.jpg'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Mlogin = () => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const navigate=useNavigate()
  const CallSubmit=(e)=>{  
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,pass})
    .then(result=>{console.log(result)
        if(result.data=== "Sucess")
        {
            navigate('/mentor/mentor')
            // alert("Login Sucessfully")
        }
      
          else if(result.pass!==pass)
          {
            alert("Invalid Password")

          }
          
        else{
          alert("Invalid User")

        }

    }
)
    .catch(err=>console.log(err))
  }
  return (
    <>

<div className="logp">
      <div className="par">
        <div className="two">
          <div className="one1">
            <div className="hed90">
                <h3 className="hedee15">Login Mentor</h3>
                
            </div>        <form id="signupForm" onSubmit={CallSubmit}>
            
            <div className="id">
                <input type="email" name="email"placeholder="Enter  Email" className="idn" onChange={(e)=>setEmail(e.target.value)} />

            </div>
            <div className="pass">
                <input type="password"name="pass" placeholder="Enter Password"className="passe" onChange={(e)=>setPass(e.target.value)}/>

            </div>
            <div className="btnl33"> <button type="submit" className="login22">LOG IN</button> </div></form> <div className="cap">
            <Link to="/mentor/signup">
            <h5 className="caption35">Dont have an Account?</h5>
            </Link>

            </div>
           
          </div>
          <div className="one11">
            {/* <!-- <div className="hedo1"> <h3 className="hed11">Welcome!</h3></div>
            --> */}
            <img src={loginimg} alt="" className="oneimg"/>
          </div>
          
        </div>
      </div>
    </div>
   </>
  )
}

export default Mlogin