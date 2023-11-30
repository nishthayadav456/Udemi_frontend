
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import './Navbar.css'

import Business from "../Categories/Business/Business";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Communication from "../Categories/Business/Communication";
import Design from "../Categories/Design/Design";
import Operations from "../Categories/Business/Operations";
import Managements from "../Categories/Business/Managements";
import BusinessStrategy from "../Categories/Business/BusinessStrategy";



const NavBar = () => {
  return (
  
    <div>
      <header>
    <div id="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png" height="30px" width="100px" alt="not found"/>
    </div>
  
     <div>
      <p>Categories </p>
     </div>
        
    <nav>
    <IoIosSearch />
      <input type="text" id="search-input" placeholder="Search for anything"/>
      </nav>
      <div id="heading"> 
        <p>Udemy Bussiness</p>
      <p> Tech on Udemy</p>
      </div>
     
       <MdOutlineShoppingCart id="add-to-cart"/>
    

    <div id="login-signup">
      <button className="loginbtn">Login</button>
      <button className="signupbtn">Signup</button>
    </div>
  </header>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/business" element={<Business/>}/>
    <Route path="/communication" element={<Communication/>}/>
    <Route path="/operation" element={<Operations/>}/>
    <Route path="/management" element={<Managements/>}/>
    <Route path="businessstrategy/" element={<BusinessStrategy/>}/>
    <Route path="/design" element={<Design/>}/>
  </Routes>
  </BrowserRouter>
 
    </div>
    
  )
}

export default NavBar
