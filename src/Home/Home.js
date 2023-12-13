import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Footer from "../Footer/Footer"


const Home = () => {
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
        <div className='image-container'>
      <img className="firstimg" src="https://img-c.udemycdn.com/notices/home_carousel_slide/image_responsive/721b2fbd-ad67-429b-8a19-e2a6d6959521.jpeg" alt="not found"/>
      </div>
      <div className='Middle-container'>
      <div className="top-heading">Trusted by over 15,000 companies and millions of learners around the world</div>
      <div className="middle-text" >
    {data.filter((item)=>item.category==="home").map((item,index)=>{
     console.log(item)
     return(
     
        <div  className="Middle1" key={index}>
         <div>
         <img className="logos" src={item.image} alt="not found"/>
            </div>
            </div>
        
)

     })}
</div>
      </div>
      <Middle/>
    </div>
 )
}

export default Home

function Middle(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
return(
    <>
    <div>
        <div className="broad-selection">
       <h1 className="broad-heading">A broad selection of courses</h1>
       <p className="headline-subtext">Choose from over 210,000 online video courses with new additions published every month</p> 
       <div className="languages">
       <span>python</span>
       <span>Excel</span>
       <span>Web Development</span>
       <span>JavaScript</span>
       <span>Data Science</span>
       <span>Amazon AWS</span>
       <span>Drawing</span>
       </div>
        </div>
        <div className="parent-container">
<div>
    <h1 className="broad-heading">Analyze and visualize data with python</h1>
    <p className="headline-subtext2" >Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
    <button className="btn1">Explore Python</button>
</div>
        
<div className="container2">
{data.filter((item)=>item.category==="home1").map((item,index)=>{
  console.log(item)
return(
   <div>
        <div key={index}>
         <div className="Middle2">
       
      <img className="home-image"src={item.image} alt="not found"/>
      <div className="home-heading">{item.heading.slice(0,40)}..</div>
      <div className="home-writer">{item.writer.slice(0,30)}..</div>
      <div className="home-rate">{item.rate}</div>
      <div className="home-price">₹{item.price}</div>

    </div>
 </div>
</div>
)
     })}
    </div>
    </div>
    <Middle2/>
    </div>
    </>
)
}
function Middle2(){
    return(
        <>
        <div className="broad-heading2">
        <h2 >How learners like you are achieving their goals</h2>
        </div>

<div className="container3">
   <div className="Middle3">
    <div className="heading2">
    <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" height="20px" width="20px"/>
    <p className="main-content">I am proud to say that after a few months of taking this course...<b>I passed my exam and am now an AWS Certified Cloud Practitioner!</b> This content was exactly what the CCP exam covered.</p>
   <div className="user-profile-small">
   <div className="circle">WA</div> <div className="name">Will A</div>
   </div>
   <div className="user-content">
   <span><img src="https://p1.hiclipart.com/preview/713/1014/506/button-ui-app-one-white-and-purple-play-icon-art-png-clipart-thumbnail.jpg" height="20px" width="20px" alt="not found"/></span>
   <span className="user-header">[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02</span>
   </div>
    
   
    </div>
    <div className="heading2">
    <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" height="20px" width="20px"/>
    <p  className="main-content">This course helped me <b>freshen up on my product manager skills and land a job at Facebook! </b> Thanks guys :</p>
    <div className="user-profile-small">
   <div className="circle">RF</div> <div className="name">Ron F</div>
   </div>
   <div className="user-content">
    <span><img src="https://p1.hiclipart.com/preview/713/1014/506/button-ui-app-one-white-and-purple-play-icon-art-png-clipart-thumbnail.jpg" height="20px" width="20px" alt="not found"/></span>
    
   <span className="user-header">Become a product Manager| Learn the Skills & get the Job</span>
   </div>
    </div>
<div className="heading2" >
<img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" height="20px" width="20px"/>
<p className="main-content">One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. <b>Would help anyone become a better manager.</b></p>
<div className="user-profile-small">
   <div className="circle">PW</div> <div className="name">Phillip W</div>
   </div>
   <div className="user-content">
    <span><img src="https://p1.hiclipart.com/preview/713/1014/506/button-ui-app-one-white-and-purple-play-icon-art-png-clipart-thumbnail.jpg" height="20px" width="20px" alt="not found"/></span>
   <span className="user-header">Leadership:Practical Leadership Skills</span>
   </div>
</div>
<div className="heading2" >
<img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" height="20px" width="20px"/>
<p className="main-content" > I highly <b>recommend this course for all budding data scientists.</b>  Even people with no prior knowledge of any visualization tools can become a master after completing this course.</p>
<div className="user-profile-small">
   <div className="circle">SM</div> <div className="name">Surya M</div>
   </div>
   <div className="user-content">
    <span><img src="https://p1.hiclipart.com/preview/713/1014/506/button-ui-app-one-white-and-purple-play-icon-art-png-clipart-thumbnail.jpg" height="20px" width="20px" alt="not found"/></span>
   <span className="user-header">Tableau 2022 A-Z:hands-on Tableau Training for Data Science</span>
   </div>
</div>



</div>
</div>
<Middle3/>
        </>
    )
}
function Middle3(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
return(
    <>
    <div>
        <div className="unit-title">
       <h2 className="ud-title">Learners are viewing</h2>
       </div>
<div className="container4">
{data.filter((item)=>item.category==="home2").map((item,index)=>{
  console.log(item)
return(
   <div>
     <div key={index}>
    <div className="Middle4">
     <img className="ud-image" src={item.image} alt="not found"/>
      <div className="ud-heading">{item.heading.slice(0,40)}..</div>
      <div className="ud-writer">{item.writer.slice(0,35)}..</div>
      <div className="ud-rate">{item.rate}</div>
      <div className="ud-price">₹{item.price}</div>
      <div><button className="bestseller">BestSeller</button></div>
       </div>
 </div>
</div>
)
     })}
    </div>
    </div>
    <Middle5/>
    </>
)
}
function Middle5(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://udemi-pbit.onrender.com/api/searchData")
        .then((response)=>
          setData(response.data)
        )
        .catch((error)=>console.log(error))
      },[])
    return(
        <>
        <div>
        <div className="unit-title">
       <h2>Top Categories</h2>
       </div>
        <div className="container5">
{data.filter((item)=>item.category==="home3").map((item,index)=>{
  console.log(item)
return(
   <div>
    <div key={index}>
    <div className="Middle5">
    <img className="category-card" src={item.image} alt="not found"/>
      <div className="card-heading" >{item.heading}</div>
      </div>
 </div>
</div>
)
    })}
    </div>
    </div>
    <Middle6/>
        </>
    )
}
function Middle6(){
    return(
        <>
        <div>
          <div  className="unit-title1" >
          <h2>Featured topics by category</h2>
          </div>
     
        <div className="container6">
       
        <div className="table">
            <div className="tr1">
                <div className="td1">Development</div>
                <div className="td1">Business</div>
                <div className="td1">IT and Software</div>
                <div className="td1">Design</div>
                 </div>
                 </div>
                 <div className="table">
                 <div className="tr1">
                 <div className="td1">
                  <NavLink>Python </NavLink>
                  <p className="learners">36,354,994 learners</p>
                 </div>
                <div className="td1">
                <NavLink>Financial Analysis</NavLink>
                <p className="learners">1,195,282 learners</p>
                </div>
                
                <div className="td1">
                <NavLink>Amazon AWS</NavLink>
               <p className="learners">6,123,456 learners</p>
                </div>
                <div className="td1">
                  <NavLink>Photoshop</NavLink>
                <p className="learners">10,909,736 learners</p>
                </div>
              
                    </div>
                </div>
               
               <div className="table">
                 <div className="tr1">
                    <div className="td1">
                    <NavLink>Web Development</NavLink>
                    <p className="learners">11,415,615 learners</p>
                    </div>
                    <div className="td1">
                     <NavLink>SQL</NavLink>
                      <p className="learners">5,977,561 learners</p>
                     </div>
                    <div className="td1">
                    <NavLink>Ethical Tracking</NavLink>
                     <p className="learners">10,931,066 learners</p>
                    </div>
                    <div className="td1">
                    <NavLink>Graphic Design</NavLink>
                    <p className="learners">3,381,052 learners</p>
                    </div>
                 </div>
                
                  </div>

                <div className="table">
                 <div className="tr1">
                    <div className="td1">
                    <NavLink>Machine Learning</NavLink>
                  <p className="learners">7,070,015 learners</p>
                    </div>
                    <div className="td1">
                    <NavLink>PMP</NavLink>
                   <p className="learners">1,733,398 learners</p>
                    </div>
                    <div className="td1">
                    <NavLink>Cyber Security</NavLink>
                   <p className="learners">3,998,037 learners</p>
                    </div>
                    <div className="td1">
                   <NavLink> Drawing</NavLink>
                  <p className="learners">2,410,849 learners</p>
                    </div>
                 </div>
                </div>
       
        </div>
        <div className="explore-more"><button className="btn2">Explore more topics</button></div>
        </div>
        <Middle7/>
        </>
    )
}
function Middle7(){
    return(
        <>
        <div className="container7">
          <div className="right-container">
          <div id="logo">
        <img  id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsI9FDCQkZZesQcRWjycq0SCXa9Z8IPYG1ho3Ppynt&s" alt="not found"/>
    </div>
    <h1 className="broad-heading">Upskill your team with Udemy Business</h1>
    <ul className="ul">
        <li className="li">Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
        <li className="li">International course collection in 14 languages</li>
        <li className="li">Top certifications in tech and business</li>
    </ul>
    <button className="btn3">Get udemy Business</button>
    <button className="btn4">Learn more</button>
          </div>
          <div >
            <img className="left-container"src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="not found"/>
          </div>
        </div>
        <Middle8/>
        </>
    )
}
function Middle8(){
    return(
        <>
        <div className="parent-con">
        <div className="container9">
            
       <div className="leftbox">
       <img  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" height="20px" width="20px"/>
        <p className="middle-content">Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its ,<b>data scientists, with highly relevant and in-demand tech skills </b>that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.</p>
       </div>
       <div className="rightbox">
        <img className="img1" src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg" alt="not found"/>
        <h3>Jim hemgen</h3>
        <p className="principal">Principal</p>
        <p>Booz Allen Hamilton</p>
       </div>
      
        </div>
        
      
        </div>
        <Middle9/>
        </>
    )
}
function Middle9(){
return(
    <>
     <div className="container8">
        <div className="rightcon">
<img className="lst-img" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="not found"/>
        </div>
        <div className="leftcon">
<h1 className="broad-heading">Become an instructor</h1>
<p className="lower-heading">Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.
</p>
<button className="btn5">Start teaching today</button>
        </div>
     </div>
<Footer/>
    </>
)
}
