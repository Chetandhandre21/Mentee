import React from 'react'
import './Css/viewmentee.css';
import {useEffect,useState} from "react"
import axios from 'axios'

const Viewmentee = () => {
   
    const[users,setUsers]=useState([])
    useEffect(()=>{
     

      axios.get('http://localhost:3001/viewmentee')
      .then(users=>setUsers(users.data))
      .catch(err=>console.log(err))
    },[])


  return (
    <>
     <div className="tbprent">
    <table className='tbchild' border="1">
      <thead>
      <tr className='thp'>
        <th className='thc'>Name</th>
        <th className='thce'>Email</th>
       
      </tr>
      </thead>
      <tbody>
      {
        users.map(user =>{
          return <tr className='tdp'>
            <td className='tdc'>{user.name}</td>
            <td className='tdce' >{user.email}</td>
            
          </tr>
          
        })
      }

      </tbody>


    </table>
    </div> 
    
    </>
  )
}

export default Viewmentee