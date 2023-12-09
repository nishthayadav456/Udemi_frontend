import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Footer from "../../Footer/Footer"

const Math = () => {
  const[data,setData]=useState([])
  const[cartdata,setcartData]=useState([])

  useEffect(()=>{
  axios.get("https://udemi-pbit.onrender.com/api/cartfind")
  .then((response)=>setcartData(response.data))
  .catch((error)=>console.log(error))
  },[cartdata])
  
  const handleCart=async(item)=>{
  console.log(item.id)
  const handleData=cartdata.find((items)=>items.id===item.id)
  console.log(handleData)
  if(handleData){
  
    alert("Data already exists")
  }
  else{
    await axios.post("https://udemi-pbit.onrender.com/api/addtocart",item)
  }
    }
  useEffect(()=>{
      axios.get("https://udemi-pbit.onrender.com/api/searchData")
      .then((response)=>
        setData(response.data)
      )
      .catch((error)=>console.log(error))
    },[])
return (
  <>
  <div className="first-container">
   <h1>Maths Courses</h1>
  <h2>Courses to get you started</h2>
  <div className="Mostpoplar">
  <span>Most popular</span>
  <span>New</span>
  <span>Trending</span>
  </div>
  </div>
  <div className="compo-parent">

{data.filter((item)=>item.category==="teaching").map((item,index)=>{
console.log(item)
return(
 <div>

      <div key={index}>
       <div className="sub-parent">
      
    <img className="compo-image" src={item.image} alt="not found"/>
    <div className="compo-heading">{item.heading.slice(0,35)}..</div>
    <div className="compo-writer">{item.writer}</div>
    <div className="compo-rate">{item.rate}</div>
    <div className="compo-price">₹{item.price}</div>
    <button  className="bestseller1" onClick={()=>handleCart(item)}>Add to cart</button>
  </div>
</div>
</div>
)
   })}
  </div>


  <div className="second-container">
   <div className="play-con">
    <img className="play" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/play_alt-512.png" alt="not found"/>
    <p  className="learner">Learn in-demand skills with over 210,000 video courses</p>
    </div>
   <div className="star-con">
    <div ><img className="star" src="https://cdn.pixabay.com/photo/2016/12/18/11/02/star-1915449_1280.png" alt="not found"/></div>
   <p className="learner">Choose courses taught by real-world experts</p> </div>
   <div className="infinity-con">
    <div className="infinity-con"><img className="infinity" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66Nt_CxJUm6zt2Hb1iNFb3BYxo7WvWrlppw&usqp=CAU" alt="not found"/></div>
    <p className="learner">Learn at your own pace, with lifetime access on mobile and desktop</p>
    </div>
  </div>


  <div className="popular-topics">
  <h2 className="popular-top">Popular topics</h2>
  <div>
    <div className="table1">
      <div className="tr">
        <div className="td">English Language</div>
        <div className="td">Math</div>
        <div className="td">Spanish Language</div>
        <div className="td">IELTS</div>
       
      </div>
      </div>
      <div className="table1">
      <div className="tr">
        <div className="td">German Language</div>
        <div className="td">English grammar</div>
        <div className="td">French Language</div>
        <div className="td">Japanese Language</div>
      
      </div>
      </div>
    
  </div>
</div>
 <Business2/>
  </>
 
  
)
}

export default Math 

function Business2(){
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
      <h1 className="popular-inst">Popular Instructors</h1>
    <div className="popular-instructor">
    
    {data.filter((item)=>item.category==="teaching2").map((item,index)=>{
console.log(item)
return(
 <div>

      <div key={index}>
       <div className="sub-instructor">
      <div className="left-business">
    <img className="popular-image" src={item.image} alt="not found"/>
    </div>
    <div className="right-business">
    <div className="popular-heading">{item.heading.slice(0,30)}..</div>
    <div className="popular-writer">{item.writer.slice(0,40)}..</div>
    <div className="popular-rate">{item.rate}</div>
    <div className="popular-student">{item.student}  Students</div>
    <div className="popular-courses">{item.courses}  courses</div>
    </div>
  </div>
</div>
</div>
)
   })}
   </div>
   <Business3/>
    </>
  )
}
function Business3(){
return(
  <>
  <div className="All-courses">
    <h2>All Business courses</h2>
    <div className="mess-box">
      <img className="mess-alert" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKUBa1AnpqqCWPudE-oNJm9aOKRfZVDj7wIxT_oBrDNMIroHj34udwUmbdJoq8f_8EfU&usqp=CAU"alt="not found"/>
Not sure? All courses have a 30-day money-back guarantee</div>
<div className="sort-filter">
<div className="filter">
<img className="filter-icon" src="https://i.pinimg.com/564x/52/49/d2/5249d2bc62768d6049e5932e67481702.jpg" alt="not found"/>
 <div className="mess-filter">Filter</div>
 </div>
 <div className="arrow">
<div className="sort-by">
  <div>
  <div className="sort">sort by</div>
<div className="most-popular">Most Popular</div>
  </div>

<div>
<img src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png" height="20px" width="20px" alt="not found"/>
</div>
</div>
</div>

</div>
  </div>
  <Business6/>
  </>
)
}
function Business6(){
const[data,setData]=useState([])
const[cartdata,setcartData]=useState([])

useEffect(()=>{
axios.get("https://udemi-pbit.onrender.com/api/cartfind")
.then((response)=>setcartData(response.data))
.catch((error)=>console.log(error))
},[cartdata])

const handleCart=async(item)=>{
console.log(item.id)
const handleData=cartdata.find((items)=>items.id===item.id)
console.log(handleData)
if(handleData){

  alert("Data already exists")
}
else{
  await axios.post("https://udemi-pbit.onrender.com/api/addtocart",item)
}
  }

useEffect(()=>{
    axios.get("https://udemi-pbit.onrender.com/api/searchData")
    .then((response)=>
      setData(response.data)
    )
    .catch((error)=>console.log(error))
  },[])
return(
<>
<div className="parent-compo">
  <div className="sub-parentcompo1">
<div className="rating">
          <h2>Ratings</h2>
          <div className="ratestar">
            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shape_circle.png" height="20px" width="20px" alt="not found"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png" height="20px" width="100px" alt="not found"/> 
           <p className="rating-no">4.5 & up(9,014)</p> 
            </div>
          <div className="ratestar">
          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shape_circle.png" height="20px" width="20px" alt="not found"/> 
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png" height="20px" width="100px" alt="not found"/> 
            <p className="rating-no">4.0 & up(10,000)</p>
            </div>
          <div className="ratestar"> 
          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shape_circle.png" height="20px" width="20px" alt="not found"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png" height="20px" width="100px" alt="not found"/> 
            <p className="rating-no">3.5 & up(10,000)</p>
            </div>
          <div className="ratestar"> 
          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shape_circle.png" height="20px" width="20px" alt="not found"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png" height="20px" width="100px" alt="not found"/> 
            <p className="rating-no">3.0 & up(10,000)</p>
            </div>
            <div className="subcategory">
            <div className="sub-topics">
            <h2>Topics</h2>
          </div>
          <div className="sub-topics">
            <h2>Subcategory</h2>
          </div>
          <div className="sub-topics">
            <h2>Level</h2>
          </div>
          <div className="sub-topics">
            <h2>Languages</h2>
          </div>
          <div className="sub-topics">
            <h2>Price</h2>
          </div>
          <div className="sub-topics">
            <h2>Features</h2>
          </div>
          <div className="sub-topics">
            <h2>Subtitles</h2>
          </div>
          </div>
          </div>
        
          <div className="sub-parentcompo">
{data.filter((item)=>item.category==="teaching3").map((item,index)=>{
console.log(item)
return(
 

      <div className="child-compo" key={index}>
     <div className="left-coursImg">
    <img className="course-image" src={item.image} alt="not found"/>
    </div>
    <div className="right-business1">
    <div className="course-heading">{item.heading.slice(0,55)}..</div>
    <div className="course-writer">{item.writer}</div>
    <div className="course-rate">{item.rate}</div>
    <div className="addbtn">
    <button className="bestseller">BestSeller</button>
    <button  className="bestseller1" onClick={()=>handleCart(item)}>Add to cart</button>
    </div>
    </div>
    <div>
    <div className="course-price">₹{item.price}</div>
    </div>
</div>

)
   })}
  </div>
  </div>
</div>
<Footer/>
</>
)
}

