
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

const NavBar = () => {
  const navi=useNavigate()
  const [Searchdata,setSearchData]=useState()

  const handleChange=(e)=>{
    setSearchData(e.target.value)
    
  }
// console.log(Searchdata)


const [search,setSearch]=useState()
useEffect(()=>{
  axios.get(`http://localhost:4005/api/searchbar?category=${Searchdata}`)
  .then((response)=>setSearch(response.data))
  .catch((error)=>console.log(error))
},[Searchdata])
const handleSearch=()=>{
  navi('/search',{state:search})
  setSearchData('')
}
  return (
  
    <div>
       
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
            <NavLink to="/operation">Operation </NavLink>
            <NavLink to="/management">Management </NavLink>
            <NavLink to="/businessstrategy">Business Strategy </NavLink>
            <NavLink to="/hr">Human Resources </NavLink>
          </div>
      </NavLink>
      <NavLink to="/financeaccounting">Finance&Accounting
      <div className="dropdown-content1">
      <NavLink to="/accountingbook">Accounting & Bookkeeping</NavLink>
      <NavLink to="/compliance">Compliance</NavLink>
      <NavLink to="/economic">Economic</NavLink>
      <NavLink to="/finance" >Finance</NavLink>
      <NavLink to="/Taxes">Taxes</NavLink>
          </div>
       </NavLink>
      <NavLink to="/itsoftware">IT &Software 
      <div className="dropdown-content1">
      <NavLink to="/itcertification">IT Certification</NavLink>
      <NavLink to="/networkSecurity">Network Security</NavLink>
      <NavLink to="/hardware">Hardware</NavLink>
      <NavLink to="/operatingSystem">Operating System</NavLink>
      <NavLink to="/otherITsoftware">Other IT Software</NavLink>
      </div>
     </NavLink>

      <NavLink to="/design">Design
      <div className="dropdown-content1">
      <NavLink to="/webDesign">Web Design</NavLink>
      <NavLink to="/gamedesign">Game Design</NavLink>
      <NavLink to="/animation">3D Animation</NavLink>
      <NavLink to="/fashionDesign">Fashion Design</NavLink>
      <NavLink to="/otherDesign">Other Design</NavLink>
      </div>
      </NavLink>

      <NavLink to="/marketing">Marketing
      <div className="dropdown-content1">
      <NavLink to="/digitalMarketing">Digital Marketing</NavLink>
      <NavLink to="/socialMediaMarketing">Social Media Marketing</NavLink>
      <NavLink to="/publicRelationship">Public Relationship</NavLink>
      <NavLink to="/productMarketing">Product Marketing</NavLink>
      <NavLink to="/contentMarketing">Content Marketing</NavLink>
      </div>
      </NavLink>

      <NavLink to="/lifestyle">LifeStyle
      <div className="dropdown-content1">
      <NavLink to="/artCrafts">Art & Crafts</NavLink>
      <NavLink to="/beautyMakeup">Beauty & Makeup</NavLink>
      <NavLink to="/foodBeverage">Food & Beverage</NavLink>
      <NavLink to="/petCaretraining">Pet Care & Training</NavLink>
      <NavLink to="/travel">Travel</NavLink>
      </div>
      </NavLink>

      <NavLink to="/photography">Photography &video
      <div className="dropdown-content1">
      <NavLink to="/digitalPhotography">Digital Photography</NavLink>
      <NavLink to="/photography">Photography</NavLink>
      <NavLink to="/videoDesign">Video Design</NavLink>
      <NavLink to="/commercialPhotography">Commercial Photography</NavLink>
      <NavLink to="/photographyTools">Photography Tools</NavLink>
      </div>
      </NavLink>

      <NavLink to="/music">Music
      <div className="dropdown-content1">
      <NavLink to="/instruments">Instruments</NavLink>
      <NavLink to="/musicProduction">Music Production</NavLink>
      <NavLink to="/vocal">Vocal</NavLink>
      <NavLink to="/musicSoftware">Music Software</NavLink>
      <NavLink to="/musicTechniques">Music Techniques</NavLink>
      </div>
      </NavLink>
      <NavLink to="/healthFitness">Health&fitness 
      <div className="dropdown-content1">
      <NavLink to="/fitness">Fitness</NavLink>
      <NavLink to="/sports">Sports</NavLink>
      <NavLink to="/mentalhealth">Mental Health</NavLink>
      <NavLink to="/yoga">Yoga</NavLink>
      <NavLink to="/dance">Dance</NavLink>
      </div>
      </NavLink>

      <NavLink to="/Teaching">Teaching&Academics 
      <div className="dropdown-content1">
      <NavLink to="/engineering">Engineering</NavLink>
      <NavLink to="/math">Math</NavLink>
      <NavLink to="/socialScience">Social Science</NavLink>
      <NavLink to="/science">Science</NavLink>
      <NavLink to="/teacherTraining">Teacher Training</NavLink>
      </div>
      </NavLink>
      </div>
     </div>
        
    <nav>
    <IoIosSearch className="search" onClick={handleSearch}/>
      <input type="text" id="search-input" placeholder="Search for anything" onChange={handleChange}/>
      </nav>
      <div id="heading"> 
      <NavLink to="/techonudemy" style={{textDecoration:"none"}}>
      <p className="techon">  Tech on Udemy</p></NavLink>
      <NavLink to="/addtocart">
      <MdOutlineShoppingCart id="add-to-cart"/>
      </NavLink>
     
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

    <Route path="/footer" element={<Footer/>}/>
  </Routes>
  

    </div>
    
    
  )
}

export default NavBar
