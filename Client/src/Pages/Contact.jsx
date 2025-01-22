// import React from 'react'
import './Css/contact.css'
import contact from './img/contact.png'

const Contact = () => {
  return (
   <>
   <div className="pccon">
        <div className="pchild1">
            <div className="cnimg">
                <img src={contact} alt="" className="conpng"/>

            </div>

        </div>
        <div className="pchild2">
            <div className="cnhed">
                <h2 className="ched">Get In Touch</h2>
            </div>
            <div className="name">
                
                <input type="text" className="fname" placeholder="Enter name"/>

            </div>
            <div className="emai">
                <input type="text" placeholder="Enter email"className="ema1"/>
            </div>
            <div className="msg">
                <textarea  className="msgp" placeholder="Enter your message" rows="5" cols="20"></textarea>
            </div>
            <div className="btn">
                <button className="send">Send</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Contact