
import './Css/metting.css'
import Meet from './img/meet.png'
import { useEffect, useState } from "react"
import axios from 'axios'


const Meetings = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {


    axios.get('http://localhost:3001/metting')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="parent">
   

       
        <div className="child">
          <div className="hedmeet">
            <h3 className="hh22">Upcoming Mettings</h3>
          </div>
          
      
         
          <div className="upcoming">
          {
            users.map(user =>{

            // eslint-disable-next-line react/jsx-key
            return <div className="ucard1">
              <div className="mimg">
                <img src={Meet} alt="" className="im" />
              </div>
              <div className="mdata">
                <div className="na">
                  <p className="name11">{user.agenda}</p>
                </div>
                <div className="da">
                  <p className="date">{user.date}</p>
                </div>
                <div className="ti">
                  <p className="time">{user.time}</p>
                </div>
                {/* <div className="bt"><button className="att">Attend</button></div> */}
              </div>
            </div>
            
          }) 
      
        } 
          </div>
          
        </div>
           
         
      </div>
      
    </>
  )
}

export default Meetings