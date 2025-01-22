
import { useState } from 'react';
import './Css/schedulemeet.css';

import axios from 'axios'

// import { Link } from 'react-router-dom'

const Schedulemeet = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [agenda, setAgenda] = useState('');
    const MeetSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/schedulemeet', { date, time, agenda })
            .then(result => {
                console.log(result)
                alert("Inserted")



            }
            )
            .catch(err => console.log(err))
    }




    return (
        <>
            <div className="containermm">
                <form id='meet' onSubmit={MeetSubmit}>
                <h2 className='yyt'>Schedule Meeting</h2>

                <label className='gglabel' htmlFor="date">Date:</label>
                <input className='ffg'
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />

                <label className='gglabel' htmlFor="time">Time:</label>
                <input className='ffg'
                    type="time"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />

                <label className='gglabel' htmlFor="agenda">Agenda:</label>
                <input className='ffg'
                    type="text"
                    id="agenda"
                    placeholder="Enter agenda"
                   name="agenda"
                    onChange={(e) => setAgenda(e.target.value)}
                    required
                />
                <div>
                    <button className='meetbt' id="scheduleBtn" >Schedule Meeting</button>
                     </div></form>

            </div>

       
    </>
  )
}

export default Schedulemeet