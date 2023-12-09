import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Footer from "../Footer/Footer"


const Techonudemy = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
  return (
    <div>
      {data.filter((item)=>item.category==="techudemy").map((item,index)=>{
console.log(item)
return(
 <div>
<div key={index}>
 <div className="tech-udemyparent">
<img className="tech-firstimg" src={item.image} alt="not found"/>
</div>

</div>
</div>
)
   })}
   <Techudemy1/>
    </div>
  )
}

export default Techonudemy

function Techudemy1(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
    return(
        <div>
<div className="tech-heading">
    <h1 className="tech-pageheading">So many reasons to start</h1>
    </div>
    <div className="tech-udemyparent1">
    {data.filter((item)=>item.category==="techudemy1").map((item,index)=>{
console.log(item)
return(
 <div>
    
<div key={index}>
<div className="techsub-parent">
<img className="tech-firstimg1" src={item.image} alt="not found"/>
<div className="tech-title">{item.title}</div>
<div className="techudemy-heading">{item.heading}</div>
</div>

</div>
</div>

)
   })}
   </div>
   <Techudemy2/>
        </div>
        
    )
}
function Techudemy2(){
    return(
        <>
        <div className="center-div">
            <div >
        <div className="subcenter-div" >62M</div>
        <div className="centerdiv-heading">Students</div>
        </div>
       
        <div >
        <div className="subcenter-div">75+</div>
        <div  className="centerdiv-heading">Languages</div>
        </div>
        <div >
        <div className="subcenter-div">830M</div>
        <div  className="centerdiv-heading">Enrollments</div>
        </div>
        <div >
        <div className="subcenter-div">180+</div>
        <div  className="centerdiv-heading">Countries</div>
        </div>
        <div>
        <div className="subcenter-div">15,000+</div>
        <div  className="centerdiv-heading">Enterprise customers</div>
        </div>
       
        </div>
        <Techudemy3/>
        </>
    )
}
function Techudemy3(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
    return(
        <div>
<div className="tech-heading">
    <h1 className="tech-pageheading">How to begin</h1>
    </div>
    <div className="plan-heading">
        <span>Plan your curriculum</span>
        <span>Record your video</span>
        <span>Launch your course</span>
        </div>
    {data.filter((item)=>item.category==="techudemy5").map((item,index)=>{
console.log(item)
return(
 <div>
<div key={index}>
<div className="tech-middle">
    <div className="tech-middlepara">
        <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
           The way that you teach — what you bring to it — is up to you.</p>
           <div>
        <b>How we help you</b>
         <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
         </div>
        </div>
    <img  src={item.image} alt="not found"/>
   </div>
  </div>
  </div>
  )
   })}
   <Techudemy4/>
        </div>
         )
}

function Techudemy4(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
    return(
        <div>
 {data.filter((item)=>item.category==="techudemy3").map((item,index)=>{
console.log(item)
return(
 <div>
<div key={index}>
<div className="tech-middle1">
<img className="tech-middleimg" src={item.image} alt="not found"/>
    <div className="tech-middlepara1">
        <p>“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
           <div>
        <b className="frank">Frank Kane</b>
         <p className="data-heading">Data Science & IT Certifications</p>
         </div>
        </div>
       </div>
      </div>
     </div>
)
   })}
   <Techudemy5/>
  </div>
)
}

function Techudemy5(){
  return(
    <>
    <div className="tech-middle3">
<img className="two-img" src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="not found"/>
<div className="tech-container">
    
    <h1  className="tech-pageheading1">You won’t have to do it alone</h1>
    <p className="last-header1">Our <b>Instructor Support Team </b>is here to answer your questions and review your test video, while our <b>Teaching Center</b> gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <b>online community</b> .</p>
   <NavLink><p className="need-more">Need more details before you start?learn more.</p></NavLink>
</div>
<img className="two-img" src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="not found"/>
    </div>
    <Techudemy6/>
    </>
  )
}
function  Techudemy6(){
    return(
        <>
        <div className="tech-middle2">
            <h1 className="tech-pageheading">Become an instructor today</h1>
            <p className="last-header">Join one of the world’s largest online learning marketplaces.</p>
            <button className="getstarted">Get Started</button>
        </div>
      <Techonudemy7/>
        </>
    )
    
}
function Techonudemy7(){
  return(
    <>
    <div className="tech-footer">
      <Footer/>
    </div>
    </>
  )
}
