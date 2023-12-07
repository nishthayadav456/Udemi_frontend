import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

const SeachBar = () => {
    const location=useLocation()
    const data=location.state
    console.log(data)
  return (
    <div>
    <div className="All-courses">
    <h2>Search Results</h2>
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
  {data.map((item,index)=>{
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
<div><button className="bestseller">BestSeller</button></div>
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
  </div>
  )
}

export default SeachBar
