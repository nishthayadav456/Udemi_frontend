
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import './Navbar.css'

import Business from "../Categories/Business/Business";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Communication from "../Categories/Business/Communication";
import Design from "../Categories/Design/Design";
import Operations from "../Categories/Business/Operations";
import Managements from "../Categories/Business/Managements";
import BusinessStrategy from "../Categories/Business/BusinessStrategy";
import HumanResources from "../Categories/Business/HumanResources";
import FinanceAccounting from "../Categories/Finance&Accounting/FinanceAccounting";
import Techonudemy from "./Techonudemy";
import Footer from "../Footer/Footer";
import ITSoftware from "../Categories/IT&Software/ITSoftware";
import Marketing from "../Categories/Marketing/Marketing";
import Lifestyle from "../Categories/LifeStyle/Lifestyle";
import Photography from "../Categories/Photography&Video/Photography";
import Music from "../Categories/Music&Arts/Music";
import HealthFitness from "../Categories/Health&Fitness/HealthFitness";
import Teaching from "../Categories/Teaching&Academic/Teaching";



const NavBar = () => {
  return (
  
    <div>
       <BrowserRouter>
      <header>
    <NavLink to="/">
    <div id="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png" height="30px" width="100px" alt="not found"/>
    </div>
    </NavLink>
     <div className="dropdown">
    
      <p className="category">Categories </p>
      <div className="dropdown-content">
      <NavLink to="/business">Business
      <div className="dropdown-content1">
      <NavLink to="/communication">Communication </NavLink>
        </div>
      </NavLink>
      <NavLink to="/financeaccounting">Finance&Accounting </NavLink>
      <NavLink to="/itsoftware">IT &Software </NavLink>
      <NavLink to="/design">Design</NavLink>
      <NavLink to="/marketing">Marketing</NavLink>
      <NavLink to="/lifestyle">LifeStyle</NavLink>
      <NavLink to="/photography">Photography &video</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/healthFitness">Health&fitness </NavLink>
      <NavLink to="/Teaching">Teaching&Academics </NavLink>
      </div>
     </div>
        
    <nav>
    <IoIosSearch className="search"/>
      <input type="text" id="search-input" placeholder="Search for anything"   />
      </nav>
      <div id="heading"> 
      <NavLink to="/techonudemy" style={{textDecoration:"none"}}>
      <p className="techon">  Tech on Udemy</p></NavLink>
      <MdOutlineShoppingCart id="add-to-cart"/>
      </div>
     
       
    

    <div id="login-signup">
      <button className="loginbtn">Login</button>
      <button className="signupbtn">Signup</button>
      <div className="language-icon">
    <GrLanguage className="language-icon1" />
    </div>
    </div>
    
  </header>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/business" element={<Business/>}/>
    <Route path="/communication" element={<Communication/>}/>
    <Route path="/operation" element={<Operations/>}/>
    <Route path="/management" element={<Managements/>}/>
    <Route path="/businessstrategy" element={<BusinessStrategy/>}/>
    <Route path="/hr" element={<HumanResources/>}/>

    <Route path="/financeaccounting" element={<FinanceAccounting/>}/>

    <Route path="/itsoftware" element={<ITSoftware/>}/>

    <Route path="/marketing" element={<Marketing/>}/>

    <Route path="/design" element={<Design/>}/>
    
    <Route path="/lifestyle" element={<Lifestyle/>}/>
    
    <Route path="/photography" element={<Photography/>}/>

    <Route path="/music" element={<Music/>}/>

    <Route path="/healthFitness" element={<HealthFitness/>}/>

    <Route path="/teaching" element={<Teaching/>}/>
    <Route path="/techonudemy" element={<Techonudemy/>}/>
    <Route path="/footer" element={<Footer/>}/>
  </Routes>
  </BrowserRouter> 

    </div>
    
    
  )
}

export default NavBar
