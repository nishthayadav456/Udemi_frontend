import React from 'react'
import './Cart.css'
import { MdAccessAlarms } from "react-icons/md";
import Footer from '../../Footer/Footer'
import { NavLink } from 'react-router-dom'
const Mylearning = () => {
  return (
    <div>
      <div className='myleaning-parent'>
        <div className='mylearning-child'>
        <div className='mylearn-header'>My learning</div>
        
        <div className='mylearn-content'>
            <span>All courses</span>
            <span>My Lists</span>
            <span>Wishlist</span>
            <span>Archived</span>
            <span>Learning tools</span>
        </div>
        </div>
       
      </div>
      <div className='mylearn-middle'>
        <div className='content-container'>
      
       <h2>   <MdAccessAlarms /> Schedule learning time</h2>
       <p className='learning-heading'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
       <button className='getstart'>Get Started</button>
       <button className='dismiss'> Dismiss</button>
       </div>
      </div>
      <div className='last-container'>
        <div className='last-container1'> 
        <p className='start-heading'>Start learning from over 210,000 courses today.</p>
        <p>When you purchase a course, it will appear here. <NavLink>Browse now.</NavLink></p>
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Mylearning
