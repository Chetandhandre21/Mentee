import pic from './img/menthome.png'
import './Css/mentorh.css'


const Mentor = () => {
  return (
   <>
   <div className="Main-div">
    <div className="subd1">
      <img src={pic} alt="" className="menh" />

    </div>
    <div className="subd2">
      <div className="hmen">
        <h2 className="giv">
          Welcome to Mentor's Home
        </h2>

      </div>
      <div className="hhp">
        <p className="cc">"Welcome to your Mentor Dashboard! Here, you’ll find all the tools and insights needed to guide and manage your mentees effectively. This platform is designed to streamline communication and foster a supportive learning environment, providing you with real-time chat, posts, and notifications that keep you up-to-date with your group’s progress. Whether it’s sharing resources, setting goals, or tracking your mentees' achievements, everything you need is organized in one place. We’re excited to support you in making a meaningful impact on each student's journey!"</p>
        <button className="mmo">Read More</button>

      </div>

    </div>


       
     
    </div>
   </>
  )
}

export default Mentor