
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import './Navbar.css'
import axios from "axios";
import Business from "../Categories/Business/Business";
import {  NavLink, Route, Routes, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import AccountingBookeeping from "../Categories/Finance&Accounting/AccountingBookeeping";
import Compliance from "../Categories/Finance&Accounting/Compliance";
import Economic from "../Categories/Finance&Accounting/Economic";
import Finance from "../Categories/Finance&Accounting/Finance";
import Taxes from "../Categories/Finance&Accounting/Taxes";
import ItCertification from "../Categories/IT&Software/ItCertification";
import NetworkSecurity from "../Categories/IT&Software/NetworkSecurity";
import Hardware from "../Categories/IT&Software/Hardware";
import OperatingSystem from "../Categories/IT&Software/OperatingSystem";
import OtherITsoftware from "../Categories/IT&Software/OtherITsoftware";
import WebDesign from "../Categories/Design/WebDesign";
import Animation3D from '../Categories/Design/Animation3D'
import FashionDesign from '../Categories/Design/FashionDesign'
import OtherDesign from '../Categories/Design/OtherDesign'
import GameDesign from '../Categories/Design/GameDesign'
import DigitalMarketing from '../Categories/Marketing/DigitalMarketing'
import SocialMediaMarketing from '../Categories/Marketing/SocialMediaMarketing'
import PublicRelationship from '../Categories/Marketing/PublicRelationship'
import ContentMarketing from '../Categories/Marketing/ContentMarketing'
import ProductMarketing from '../Categories/Marketing/ProductMarketing'
import BeautyMakeup from '../Categories/LifeStyle/BeautyMakeup'
import FoodBeverage from '../Categories/LifeStyle/FoodBeverage'
import PetCaretraining from '../Categories/LifeStyle/PetCaretraining'
import Travel from '../Categories/LifeStyle/Travel'
import ArtCrafts from '../Categories/LifeStyle/ArtCrafts'
import PhotographyTools from "../Categories/Photography&Video/PhotographyTools";
import CommercialPhotography from "../Categories/Photography&Video/CommercialPhotography";
import VideoDesign from "../Categories/Photography&Video/VideoDesign";
import DigitalPhotography from "../Categories/Photography&Video/DigitalPhotography";
import Instruments from "../Categories/Music&Arts/Instruments";
import MusicProduction from "../Categories/Music&Arts/MusicProduction";
import Vocal from "../Categories/Music&Arts/Vocal";
import MusicSoftware from "../Categories/Music&Arts/MusicSoftware";
import MusicTechniques from "../Categories/Music&Arts/MusicTechniques";
import Fitness from "../Categories/Health&Fitness/Fitness";
import Sports from "../Categories/Health&Fitness/Sports";
import MentalHealth from "../Categories/Health&Fitness/MentalHealth";
import Yoga from "../Categories/Health&Fitness/Yoga";
import Dance from "../Categories/Health&Fitness/Dance";
import Engineering from "../Categories/Teaching&Academic/Engineering";
import SocialScience from "../Categories/Teaching&Academic/SocialScience";
import Science from "../Categories/Teaching&Academic/Science";
import TeacherTraining from "../Categories/Teaching&Academic/TeacherTraining";
import Math from "../Categories/Teaching&Academic/Math";
import Cart from "../Categories/Cart/Cart";
import SeachBar from "../NavBar/SeachBar";
import Signup from "../Views/Signup";
import Login from "../Views/Login";
import Mylearning from "../Categories/Cart/Mylearning";

const NavBar = () => {
  const navi=useNavigate()
  const [Searchdata,setSearchData]=useState()
  const [count, setCount] = useState(false);
  
  const handleChange=(e)=>{
    setSearchData(e.target.value)
    
  }
// console.log(Searchdata)


const [search,setSearch]=useState()
useEffect(()=>{
  axios.get(`https://udemi-pbit.onrender.com/api/searchbar?category=${Searchdata}`)
  .then((response)=>setSearch(response.data))
  .catch((error)=>console.log(error))
},[Searchdata])
const handleSearch=()=>{
  navi('/search',{state:search})
  setSearchData('')
}

const handlelogout=()=>{
localStorage.clear()
logout()
navi('/')

}
function logout(){
  window.location.reload()
}

// const [name1,setName1]=useState("")
const token=localStorage.getItem("token")
const name=localStorage.getItem("name")
const email=localStorage.getItem("email")

  
// useEffect(()=>{
//   setName1(token)
// },[token])

  return (
  
    <div>
       
      <header>
      <div onClick={() => setCount(!count)} className="display">
            <i className={`fa-solid ${count ? 'fa-close':'fa-bars'}`}></i>
           
        </div>
       
    <NavLink to="/">
    <div id="logo">
        <img className="udemylogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"  alt="not found"/>
    </div>
    </NavLink>
    
      <div className="categories_parent">
            <ul className="navbarParent">
              <li className="categories_list">
                <div className="categories_div">Categories</div>
                <div className="outline">
                <ul className="categories_subRoute">
                  
                  
                  <div>
                    <li className="business">
                      <NavLink to="/business">
                        Business
                      </NavLink>
                      <ul className="business_subroute">
                        <div className="under_div_business">
                        
                          <li className="communication_science_container">
                            <NavLink to="/communication" className="nav">Communication</NavLink>
                       
                          </li>
                          <li className="management_development_container">
                            <NavLink to="/management" className="nav">Management</NavLink>
                            
                       
                          </li>
                          
                          <li className="Stetegy_container">
                            <NavLink to="/businessstrategy" className="nav">Bussiness Strategy</NavLink>
                         
                          </li>
                          <li className="Oprations_container">
                          <NavLink to="/operation" className="nav">Operations</NavLink>
                     
                          </li>
                         
                          <li className="Law_container">
                          <NavLink to="/hr" className="nav">Human Resources</NavLink>
                          </li>

                        </div>
                      </ul>
                    </li>
                  </div>

                  <div>
                    <li className="finance">
                      <NavLink to="/financeaccounting">
                          Finance & Accounting
                      </NavLink> 
                      <ul className="subroute_finance">
                        <div className="finance_under_div">
                          <li className=" Accounting_finance_container">
                            <NavLink to="/accountingbook" className="nav">Accounting & Book Keeping</NavLink>
                         
                          </li>
                          
                          <li className="Compliance_container">
                            <NavLink to="/compliance" className="nav">Compilance</NavLink> 
                          
                          </li>
                         
                          <li className="Economics_container">
                            <NavLink to="/economic" className="nav">Economic</NavLink>
                          </li>
                          <li className="Finance_container">
                            <NavLink to="/finance" className="nav">Finance</NavLink>
                           
                          </li>
                          <li className=" Cert_container">
                            <NavLink to="/Taxes" className="nav">Taxes</NavLink>
                        
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
             
                  <li className="it_software">
                    <NavLink to="/itsoftware">
                      IT & Software
                      </NavLink>
                    <ul className="subroute_It">
                      <div className="It_under_div">
                        <li className=" Certification_container">
                          <NavLink to="/itcertification" className="nav">IT Certification</NavLink>
                         
                        </li>
                        <li className="Network_container">
                          <NavLink to="/networkSecurity" className="nav"> Network & Security</NavLink> 

                        </li>
                        <li className="Hardware_container">
                          <NavLink to="/hardware" className="nav">Hardware</NavLink>
                        
                        </li>
                        <li className="Operating_container">
                          <NavLink to="/operatingSystem" className="nav">Operating System & Server</NavLink>
                          
                        </li>
                        <li className="Otherit_container">
                          <NavLink to="/otherITsoftware" className="nav">Other IT & Software</NavLink>
                          
                        </li>
                      </div>
                    </ul>
                  </li>
                  
                 
                  <li className="Design">
                  <NavLink to="/design">
                    Design
                    </NavLink>
                    <ul className="subroute_Design">
                      <div className="Design_under_div">
                        <li className=" Webdesign_container">
                        <NavLink to="/webDesign" className="nav">Web Design</NavLink>
                          
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/fashionDesign" className="nav">Fashion Design</NavLink> 
                        
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/animation" className="nav">3D & Animation</NavLink>
                        </li>
                        <li className=" User_container">
                        <NavLink to="/gamedesign" className="nav">Game Design</NavLink>
                       
                        </li>
                        <li className="gamedeign_container">
                        <NavLink to="/otherDesign" className="nav">Other Design</NavLink>
                      
                        </li>
                       
                      </div>
                    </ul>
                  </li>
                 
                  <li className="Marketing">
                    <NavLink to="/marketing">
                      Marketing
                    </NavLink>
                    <ul className="subroute_Marketing">
                      <div className="Marketing_under_div">
                        <li className="Digital_container">
                        <NavLink to="/digitalMarketing" className="nav">Digital Marketing</NavLink>
                       
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/contentMarketing" className="nav">Content Marketing</NavLink> 
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/socialMediaMarketing" className="nav">Social Media Marketing</NavLink>
                         
                        </li>
                        <li className=" User_container">
                        <NavLink to="/productMarketing" className="nav">Product Marketing</NavLink>
                        </li>
                        <li>
                        <NavLink to="/publicRelationship" className="nav">Public Relationship</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                 
                  <li className="LifeStyle">
                  <NavLink to="/lifestyle">
                    LifeStyle
                    </NavLink>
                    <ul className="subroute_LifeStyle">
                      <div className="LifeStyle_under_div">
                        <li className="Arts_container">
                        <NavLink to="/artCrafts" className="nav">Arts & Crafts</NavLink>
                          
                        </li>
                        <li className="Makeup_container">
                        <NavLink to="/beautyMakeup" className="nav">Beauty & Makeup</NavLink>
                          
                        </li>
                        <li className="Esoteric_container">
                        <NavLink to="/travel" className="nav">Travel</NavLink>
                         
                        </li>
                        <li className="Bevrage_container">
                        <NavLink to="/foodBeverage" className="nav"> Food & Beverage</NavLink>
                        
                        </li>
                        <li>
                        <NavLink to="/petCaretraining" className="nav">Pet care & Training</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                  
                  <li className="Video">
                    <NavLink to="/photography">
                      Photography & Video
                    </NavLink> 
                
                    <ul className="subroute_Video">
                      <div className="Video_under_div">
                        <li className="Digital_container">
                        <NavLink to="/digitalPhotography" className="nav">Digital Photography</NavLink>

                        </li>
                        <li className=" Photographysecond_container">
                        <NavLink to="/photography" className="nav">Photography</NavLink> 
                        </li>
                        <li className="Portrait_container">
                        <NavLink to="/commercialPhotography" className="nav">Commercial Photography</NavLink>
                        </li>
                        <li className="Toolsphoto_container">
                        <NavLink to="/photographyTools" className="nav">Photography Tools</NavLink>
                        </li>
                        <li className="">
                        <NavLink to="/videoDesign" className="nav">Video Design</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                 
                  <li className="Fitness">
                  <NavLink to="/healthFitness">
                        Health & Fitness
                    </NavLink>
                     
                    <ul className="subroute_Fitness">
                      <div className="Fitness_under_div">
                        <li className="Fitness_container">
                        <NavLink to="/fitness" className="nav">Fitness</NavLink>
                          
                        </li>
                        <li className=" General_container">
                        <NavLink to="/mentalhealth" className="nav">Mental Health</NavLink> 
                         
                        </li>
                        <li className="Sports_container">
                        <NavLink to="/sports" className="nav">Sports</NavLink>

                          
                        </li>
                        <li className="">
                        <NavLink to="/yoga" className="nav">Yoga</NavLink>

                        </li>
                        <li className="dance">
                        <NavLink to="/dance" className="nav">Dance</NavLink>

                        </li>
                      </div>
                    </ul>
                  </li>
                
                  <li className="music">
                  <NavLink to="/music">
                        Music
                    </NavLink> 
                    <ul className="subroute_music">
                      <div className="music_under_div">
                        <li className="Instrument_container">
                        <NavLink to="/instruments" className="nav">Instruments</NavLink>
                        </li>
                        <li className="Production_container">
                        <NavLink to="/musicProduction" className="nav">Music Production</NavLink> 
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/musicSoftware" className="nav">Music Software</NavLink>
                        </li>
                        <li className="Vocal_container">
                        <NavLink to="/vocal" className="nav">Vocal</NavLink>
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/musicTechniques" className="nav">Music Techniques</NavLink>
                        </li>
                       
                      </div>
                    </ul>
                  </li>
                  
                  <li className="Teaching">
                  <NavLink to="/Teaching">
                Teaching & Academics
                    </NavLink>
                    
                    <ul className="subroute_Teaching">
                      <div className="Teaching_under_div">
                        <li className="Engneering_container">
                        <NavLink to="/engineering" className="nav">Engineering</NavLink>
                        </li>
                        <li className="Humanities_container">
                        <NavLink to="/socialScience" className="nav">Social Science</NavLink> 
                        </li>
                        <li className="Math_container">
                        <NavLink to="/math" className="nav"> Math </NavLink>
                        </li>
                        <li className="Science_container">
                        <NavLink to="/science" className="nav">Science</NavLink>
                        </li>
                        <li>
                        <NavLink to="/teacherTraining" className="nav">Teacher Training</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                </ul>
                </div>
              </li>
            </ul>
          </div>
        
    <nav>
    <IoIosSearch className="search" onClick={handleSearch}/>
      <input type="text" id="search-input" placeholder="Search for anything" onChange={handleChange}/>
      </nav>
      <div id="heading"> 
      <NavLink to="/techonudemy" style={{textDecoration:"none"}}>
      <p className="techon">  Tech on Udemy</p></NavLink>
      <NavLink to="/addtocart" className="add">
      <MdOutlineShoppingCart id="add-to-cart"/>
      </NavLink>
     
      </div>
     
       
    
{(name)?
  <div className="learnerparent">
                     <div className="nameiconsdiv">
                       <NavLink to="/mylearning" className="mylearn">
                       <p onClick={()=>navi("/mylearning")}>My Learning</p>
                        </NavLink> 
                        <p className="nameicon">{name.slice(0,1)}</p>
                     </div>
                  
                    <div className="dropdown">
                        <div className="innerdrop">
                         
                          <div className="emailnamediv">
                          
                            <p className="Myname">
                            {name}
                            </p>
                           
                          
                            <p>
                            {email}
                            </p>
                          </div>
                        </div>
                        <p onClick={()=>navi("/mylearning")}>My Learning Cart </p>
                        <p onClick={()=>navi("/addtocart")}>Add to Cart</p>
                        <p onClick={()=>navi("/techonudemy")}>Tech on Udemy</p>
                        <p onClick={handlelogout}><NavLink to="/">Log out</NavLink></p>
                    </div>
                  </div>:

    <div id="login-signup">
      <NavLink to="/login"><button className="loginbtn">Login</button></NavLink>
     <NavLink to="/register"><button className="signupbtn">Signup</button></NavLink> 
      </div>
}
      <div className="language-icon">
    <GrLanguage className="language-icon1" />
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
    <Route path="/accountingbook" element={< AccountingBookeeping/>}/>
    <Route path="/compliance" element={<Compliance/>}/>
    <Route path="/economic" element={<Economic/>}/>
    <Route path="/finance" element={<Finance/>}/>
    <Route path="/Taxes" element={<Taxes/>}/>


    <Route path="/itsoftware" element={<ITSoftware/>}/>
    <Route path="/itcertification" element={<ItCertification/>}/>
    <Route path="/networkSecurity" element={<NetworkSecurity/>}/>
    <Route path="/hardware" element={<Hardware/>}/>
    <Route path="/operatingSystem" element={<OperatingSystem/>}/>
    <Route path="/otherITsoftware" element={<OtherITsoftware/>}/>


    <Route path="/marketing" element={<Marketing/>}/>
    <Route path="/digitalMarketing" element={<DigitalMarketing/>}/>
    <Route path="/socialMediaMarketing" element={<SocialMediaMarketing/>}/>
    <Route path="/publicRelationship" element={<PublicRelationship/>}/>
    <Route path="/contentMarketing" element={<ContentMarketing/>}/>
    <Route path="/productMarketing" element={<ProductMarketing/>}/>

    <Route path="/design" element={<Design/>}/>
    <Route path="/webDesign" element={<WebDesign/>}/>
    <Route path="/gamedesign" element={<GameDesign/>}/>
    <Route path="/animation" element={<Animation3D/>}/>
    <Route path="/fashionDesign" element={<FashionDesign/>}/>
    <Route path="/otherDesign" element={<OtherDesign/>}/>


    <Route path="/lifestyle" element={<Lifestyle/>}/>
    <Route path="/artCrafts" element={<ArtCrafts/>}/>
    <Route path="/beautyMakeup" element={<BeautyMakeup/>}/>
    <Route path="/foodBeverage" element={<FoodBeverage/>}/>
    <Route path="/petCaretraining" element={<PetCaretraining/>}/>
    <Route path="/travel" element={<Travel/>}/>


    <Route path="/photography" element={<Photography/>}/>
    <Route path="/digitalPhotography" element={<DigitalPhotography/>}/>
    <Route path="/photography" element={<Photography/>}/>
    <Route path="/videoDesign" element={<VideoDesign/>}/>
    <Route path="/commercialPhotography" element={<CommercialPhotography/>}/>
    <Route path="/photographyTools" element={<PhotographyTools/>}/>


    <Route path="/music" element={<Music/>}/>
    <Route path="/instruments" element={<Instruments/>}/>
    <Route path="/musicProduction" element={<MusicProduction/>}/>
    <Route path="/vocal" element={<Vocal/>}/>
    <Route path="/musicSoftware" element={<MusicSoftware/>}/>
    <Route path="/musicTechniques" element={<MusicTechniques/>}/>


    <Route path="/healthFitness" element={<HealthFitness/>}/>
    <Route path="/fitness" element={<Fitness/>}/>
    <Route path="/sports" element={<Sports/>}/>
    <Route path="/mentalhealth" element={<MentalHealth/>}/>
    <Route path="/yoga" element={<Yoga/>}/>
    <Route path="/dance" element={<Dance/>}/>

    <Route path="/teaching" element={<Teaching/>}/>
    <Route path="/engineering" element={<Engineering/>}/>
    <Route path="/math" element={<Math/>}/>
    <Route path="/socialScience" element={<SocialScience/>}/>
    <Route path="/science" element={<Science/>}/>
    <Route path="/teacherTraining" element={<TeacherTraining/>}/>

    <Route path="/techonudemy" element={<Techonudemy/>}/>
    <Route path="/addtocart" element={<Cart/>}/>
    <Route path="/search" element={<SeachBar/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
   <Route path="/mylearning" element={<Mylearning/>}/>
    <Route path="/footer" element={<Footer/>}/>
  </Routes>
  
{/* hamberger: */}

<div className={count ? 'hambergerlinksShows' : 'hambergerlinksHide'}>
              <ul className= {count?"navbar-listResponsive":"hambergerhide" }>
                <li className='listres'>{token ? 
             
                
              
                <NavLink onClick={() => {setCount(!count) ;handlelogout()}} to="/register" className="navlinkRes" style={({isActive})=>({color: isActive ? "black":"black"})}>
                      Logout
                  </NavLink>:
                  <>
                  <NavLink  onClick={() => setCount(!count)} to="/login" className="navlinkRes" style={({isActive})=>({color: isActive ? "black":"black"})}>Login</NavLink> 
                  
                  <div>
                  <NavLink onClick={() => setCount(!count)} to="/register" className="navlinkRes" style={({isActive})=>({color: isActive ? "black":"black"})}>Sign Up</NavLink>
                  </div>
                  </>}
                </li>
                <li  className="mostpopular">
                 
                      Most Popular
                      {/* <span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span> */}
                   
                    </li>
                <li className="business_res" >
                        <NavLink to="/business">
                          Business
                        </NavLink> 
                       <div className="bussiness_cover_res">
                       <ul className="business_subroute_res">
                          
                            
                            
                          <li className="bussiness_sub">
                            <NavLink to="/business">
                              Business
                            </NavLink><span><i  onClick={()=>navi(-1)}></i></span>
                          </li>
                          <li className="communication_science_container">
                            <NavLink to="/communication" className="nav">Communication </NavLink>
                      
                          </li>
                          <li className="management_development_container">
                            <NavLink to="/managemen" className="nav">Management</NavLink>
                            
                      
                          </li>
                          
                          <li className="Stetegy_container">
                            <NavLink to="/businessstrategy" className="nav">Bussiness Strategy</NavLink>
                        
                          </li>
                          <li className="Oprations_container">
                          <NavLink to="/operation" className="nav">Operations</NavLink>
                    
                          </li>
                        
                          <li className="Law_container">
                          <NavLink to="/hr" className="nav">Human Resources</NavLink>
                          </li>

                       
                      </ul> 
                       </div>
                      </li>      
                    
                       <li className="finance_res">
                      <NavLink to="/financeaccounting">
                          Finance & Accounting
                      </NavLink> 
                     <div className="finance_cover_res">
                     <ul className="subroute_finance_res">
                      
                      <li>
                      <NavLink to="/financeaccounting">
                      Finance & Accounting
                      </NavLink><span><i  onClick={()=>navi(-1)}></i></span> 
                      </li>
                      <li className=" Accounting_finance_container">
                        <NavLink to="/accountingbook" className="nav">Accounting & Book Keeping</NavLink>
                     
                      </li>
                      
                      <li className="Compliance_container">
                        <NavLink to="/compliance" className="nav">Compilance</NavLink> 
                      
                      </li>
                     
                      <li className="Economics_container">
                        <NavLink to="/economic" className="nav">Economic</NavLink>
                      </li>
                      <li className="Finance_container">
                        <NavLink to="/financece&acc/finance" className="nav">Finance</NavLink>
                       
                      </li>
                      <li className=" Cert_container">
                        <NavLink to="/Taxes" className="nav">Taxes</NavLink>
                    
                      </li>
                   
                    </ul>
                     </div>
                    </li>
                    <li className="it_software_res">
                    <NavLink to="/itsoftware">
                      IT & Software
                      </NavLink>
                    <div className="it_cover_res">
                    <ul className="subroute_It_res">
                      <div className="It_under_div_res">
                        <li>
                          <NavLink to="/itsoftware">
                          IT & Software
                          </NavLink><span><i  onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className=" Certification_container">
                          <NavLink to="/itcertification" className="nav">IT Certification</NavLink>
                         
                        </li>
                        <li className="Network_container">
                          <NavLink to="/networkSecurity" className="nav"> Network & Security</NavLink> 

                        </li>
                        <li className="Hardware_container">
                          <NavLink to="/hardware" className="nav">Hardware</NavLink>
                        
                        </li>
                        <li className="Operating_container">
                          <NavLink to="/operatingSystem" className="nav">Operating System & Server</NavLink>
                          
                        </li>
                        <li className="Otherit_container">
                          <NavLink to="/otherITsoftware" className="nav">Other IT & Software</NavLink>
                          
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>
                  <li className="Design_res">
                  <NavLink to="/design">
                    Design
                    </NavLink>
                    <div className="design_cover_res">
                    <ul className="subroute_Design_res">
                      <div className="Design_under_div_res">
                        <li>
                        <NavLink to="/design">
                          Design
                          </NavLink><span><i  onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className=" Webdesign_container">
                        <NavLink to="/webDesign" className="nav">Web Design</NavLink>
                          
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/fashionDesign" className="nav">Fashion Design</NavLink> 
                        
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/animation" className="nav"> Animation 3D</NavLink>
                        </li>
                        <li className=" User_container">
                        <NavLink to="/gamedesign" className="nav">Game Design</NavLink>
                       
                        </li>
                        <li className="gamedeign_container">
                        <NavLink to="/otherDesign" className="nav">Other Design</NavLink>
                      
                        </li>
                       
                      </div>
                    </ul>
                    </div>
                  </li>
                  <li className="Marketing_res">
                    <NavLink to="/marketing">
                      Marketing
                    </NavLink>
                    <div className="Marketing_cover_res">
                    <ul className="subroute_Marketing_res">
                      <div className="Marketing_under_div_res">
                        <li>
                        <NavLink to="/marketing">
                          Marketing
                        </NavLink><span><i  onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className="Digital_container">
                        <NavLink to="/digitalMarketing" className="nav">Digital Marketing</NavLink>
                       
                        </li>
                        <li className="Illustration_container">
                        <NavLink to="/contentMarketing" className="nav">Content Marketing</NavLink> 
                        </li>
                        <li className="tooldesign_container">
                        <NavLink to="/socialMediaMarketing" className="nav">Social Media Marketing</NavLink>
                         
                        </li>
                        <li className=" User_container">
                        <NavLink to="/productMarketing" className="nav">Product Marketing</NavLink>
                        </li>
                        <li>
                        <NavLink to="/publicRelationship" className="nav">Public Marketing</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>


                   {/* <li className="Fitness_res">
                  <NavLink to="/healthFitness">
                        Health & Fitness
                    </NavLink>
                    <div  className="Fitness_cover_res"> 
                    <ul className="subroute_Fitness_res">
                      <div className="Fitness_under_div_res">
                        <li>
                        <NavLink to="/healthFitness" >
                        Health & Fitness
                      </NavLink>
                        </li>
                        <li className="Fitness_container">
                        <NavLink to="/fitness" className="nav">Fitness</NavLink>
                          
                        </li>
                        <li className=" General_container">
                        <NavLink to="/mentalhealth" className="nav">Mental Health</NavLink> 
                         
                        </li>
                        <li className="Sports_container">
                        <NavLink to="/sports" className="nav">Sports</NavLink>

                          
                        </li>
                        <li className="">
                        <NavLink to="/yoga" className="nav">Yoga</NavLink>

                        </li>
                        <li className="dance">
                        <NavLink to="/dance" className="nav">Dance</NavLink>

                        </li>
                      </div>
                    </ul>
                    </div> 
                  </li>  */}
                  <li className="LifeStyle_res">
                  <NavLink to="/lifestyle">
                    LifeStyle
                    </NavLink>
                    <div className="LifeStyle_cover_res">
                    <ul className="subroute_LifeStyle_res">
                      <div className="LifeStyle_under_div_res">
                        <li>
                        <NavLink to="/lifestyle">
                          LifeStyle
                        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa-solid fa-angle-left" onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className="Arts_container">
                        <NavLink to="/artCrafts" className="nav">Arts & Crafts</NavLink>
                          
                        </li>
                        <li className="Makeup_container">
                        <NavLink to="/beautyMakeup" className="nav">Beauty & Makeup</NavLink>
                          
                        </li>
                        <li className="Esoteric_container">
                        <NavLink to="/travel" className="nav">Travel</NavLink>
                         
                        </li>
                        <li className="Bevrage_container">
                        <NavLink to="/foodBeverage" className="nav"> Food & Beverage</NavLink>
                        
                        </li>
                        <li>
                        <NavLink to="/petCaretraining" className="nav">Pet care & Training</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>
                  <li className="Video_res">
                    <NavLink to="/photography">
                      Photography & Video
                    </NavLink> 
                
                    <div className="Video_cover_res">
                    <ul className="subroute_Video_res">
                      <div className="Video_under_div_res">
                        <li>
                        <NavLink to="/photography">
                          Photography & Video
                        </NavLink><span><i  onClick={()=>navi(-1)}></i></span> 
                        </li>
                        <li className="Digital_container">
                        <NavLink to="/digitalPhotography" className="nav">Digital Photography</NavLink>

                        </li>
                        <li className=" Photographysecond_container">
                        <NavLink to="/photography" className="nav">Photography</NavLink> 
                        </li>
                        <li className="Portrait_container">
                        <NavLink to="/commercialPhotography" className="nav">Commercial Photography</NavLink>
                        </li>
                        <li className="Toolsphoto_container">
                        <NavLink to="/photographyTools" className="nav">Photography Tools</NavLink>
                        </li>
                        <li className="">
                        <NavLink to="/videoDesign" className="nav">Video Design</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                  </li>

                  <li className="music_res">
                  <NavLink to="/music">
                        Music
                    </NavLink> 
                    <div className="music_cover_res">
                    <ul className="subroute_music_res">
                      <div className="music_under_div_res">
                        <li>
                        <NavLink to="/music">
                            Music
                        </NavLink><span><i  onClick={()=>navi(-1)}></i></span> 
                        </li>
                        <li className="Instrument_container">
                        <NavLink to="/instruments" className="nav">Instruments</NavLink>
                        </li>
                        <li className="Production_container">
                        <NavLink to="/musicProduction" className="nav">Music Production</NavLink> 
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/musicSoftware" className="nav">Music Software</NavLink>
                        </li>
                        <li className="Vocal_container">
                        <NavLink to="/vocal" className="nav">Vocal</NavLink>
                        </li>
                        <li className="Musicfunda_container">
                        <NavLink to="/musicTechniques" className="nav">Music Techniques</NavLink>
                        </li>
                       
                      </div>
                    </ul>
                    </div>
                  </li> 
                  <li className="Teaching_res">
                  <NavLink to="/teaching">
                Teaching & Academics
                    </NavLink>
                    <div className="Teaching_cover_res">
                    <ul className="subroute_Teaching_res">
                      <div className="Teaching_under_div_res">
                        <li>
                        <NavLink to="/teaching">
                Teaching & Academics
                    </NavLink><span><i  onClick={()=>navi(-1)}></i></span>
                        </li>
                        <li className="Engneering_container">
                        <NavLink to="/engineering" className="nav">Engineering </NavLink>
                        </li>
                        <li className="Humanities_container">
                        <NavLink to="/socialScience" className="nav">Social Science</NavLink> 
                        </li>
                        <li className="Math_container">
                        <NavLink to="/math" className="nav">  Math </NavLink>
                        </li>
                        <li className="Science_container">
                        <NavLink to="/science" className="nav">Science</NavLink>
                        </li>
                        <li>
                        <NavLink to="/teacherTraining" className="nav">Teacher Training</NavLink>
                        </li>
                      </div>
                    </ul>
                    </div>
                   
                  </li> 
                  <li onClick={()=>navi('/mylearning')} style={{color:"black" }} className="learn_res">
                    My Learning 
                  </li>
                  <li onClick={()=>navi('/techonudemy')} style={{color:"black" }} className="learn_res">
                    Tech on Udemy
                  </li>
              </ul>
        </div>     
               
    </div>
    
    
  )
}

export default NavBar