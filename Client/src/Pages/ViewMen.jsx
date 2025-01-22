import './Css/viewment.css'
import demop from "./img/dmpro.png"
// import ment from './img/viewment.jpg'
import {useEffect,useState} from "react"
import axios from 'axios'


const ViewMen = () => {
  const[users,setUsers]=useState([])
    useEffect(()=>{
     

      axios.get('http://localhost:3001/vmentor')
      .then(users=>setUsers(users.data))
      .catch(err=>console.log(err))
    },[])


  return (
    <>
    {/* <div className="tb">
    <table border="1">
      <thead>
      <tr>
        <th>Name</th>
        <th>Qualifiaction</th>
        <th>Expiriance</th>
        <th>Mentees</th>
        <th>Id</th>
      </tr>
      </thead>
      <tbody>
      {
        users.map(user =>{
          return <tr>
            <td>{user.name}</td>
            <td>{user.qualification}</td>
            <td>{user.expirience}</td>
            <td>{user.MenteeCount}</td>
            <td>{user.menteeid}</td>
          </tr>
          
        })
      }

      </tbody>


    </table>
    </div> */}

    <div className="parentmen">
      <div className="childmen">
        {
      users.map(user =>{
          
          
          // eslint-disable-next-line react/jsx-key
          return <div className="rrp">
             <div className="mp1"  >
            <img src={demop} alt="" className="pimg" />

          </div>
          <div className="mp2">
            <div className="mname">
              <h2 className="line">Name:{user.name}</h2>

            </div>
            <div className="quali">
              <h2 className="line">Qualification:{user.qualification}</h2>
            </div>
            <div className="exp">  <h2 className="line">Experience:{user.expirience}</h2></div>
            <div className="mcount"><h2 className="line"> Mentee-Count:{user.MenteeCount}</h2></div>
            <div className="mid">  <h2 className="line">Mentee-ID:{user.menteeid}</h2></div>

          </div>


          </div>

         
          
         }) 
      
      } 


      </div>
    </div>

    </>
  )
}

export default ViewMen

