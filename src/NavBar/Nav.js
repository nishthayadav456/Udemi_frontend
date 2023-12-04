import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from '../Home/Home'
import Business from '../Categories/Business/Business'
import Communication from '../Categories/Business/Communication'
import Managements from '../Categories/Business/Managements'
import BusinessStrategy from '../Categories/Business/BusinessStrategy'
import HumanResources from '../Categories/Business/HumanResources'
import FinanceAccounting from '../Categories/Finance&Accounting/FinanceAccounting'
import Operations from '../Categories/Business/Operations'
import AccountingBookeeping from '../Categories/Finance&Accounting/AccountingBookeeping'
import Compliance from '../Categories/Finance&Accounting/Compliance'
import Economic from '../Categories/Finance&Accounting/Economic'
import Finance from '../Categories/Finance&Accounting/Finance'
import Taxes from '../Categories/Finance&Accounting/Taxes'
import ITSoftware from '../Categories/IT&Software/ITSoftware'
import ItCertification from '../Categories/IT&Software/ItCertification'
import NetworkSecurity from '../Categories/IT&Software/NetworkSecurity'
import Hardware from '../Categories/IT&Software/Hardware'
import OperatingSystem from '../Categories/IT&Software/OperatingSystem'
import OtherITsoftware from '../Categories/IT&Software/OtherITsoftware'
import GameDesign from '../Categories/Design/GameDesign'
import Design from '../Categories/Design/Design'
import Animation3D from '../Categories/Design/Animation3D'
import FashionDesign from '../Categories/Design/FashionDesign'
import OtherDesign from '../Categories/Design/OtherDesign'
import Marketing from '../Categories/Marketing/Marketing'
import DigitalMarketing from '../Categories/Marketing/DigitalMarketing'
import SocialMediaMarketing from '../Categories/Marketing/SocialMediaMarketing'
import PublicRelationship from '../Categories/Marketing/PublicRelationship'
import ContentMarketing from '../Categories/Marketing/ContentMarketing'
import ProductMarketing from '../Categories/Marketing/productMarketing'
import BeautyMakeup from '../Categories/LifeStyle/BeautyMakeup'
import FoodBeverage from '../Categories/LifeStyle/FoodBeverage'
import PetCaretraining from '../Categories/LifeStyle/PetCaretraining'
import Travel from '../Categories/LifeStyle/Travel'
import Photographyvideo from '../Categories/Photography&Video/Photographyvideo'
import DigitalPhotography from '../Categories/Photography&Video/DigitalPhotography'
import Photography from '../Categories/Photography&Video/Photography'
import VideoDesign from '../Categories/Photography&Video/VideoDesign'
import CommercialPhotography from '../Categories/Photography&Video/CommercialPhotography'
import PhotographyTools from '../Categories/Photography&Video/PhotographyTools'
import Music from '../Categories/Music&Arts/Music'
import Instruments from '../Categories/Music&Arts/Instruments'
import MusicProduction from '../Categories/Music&Arts/MusicProduction'
import Vocal from '../Categories/Music&Arts/Vocal'
import MusicSoftware from '../Categories/Music&Arts/musicSoftware'
import MusicTechniques from '../Categories/Music&Arts/MusicTechniques'
import HealthFitness from '../Categories/Health&Fitness/HealthFitness'
import Fitness from '../Categories/Health&Fitness/Fitness'
import Sports from '../Categories/Health&Fitness/Sports'
import Mentalhealth from '../Categories/Health&Fitness/Mentalhealth'
import Yoga from '../Categories/Health&Fitness/Yoga'
import Dance from '../Categories/Health&Fitness/Dance'
import Teaching from '../Categories/Teaching&Academic/Teaching'
import Engineering from '../Categories/Teaching&Academic/Engineering'
import SocialScience from '../Categories/Teaching&Academic/SocialScience'
import Science from '../Categories/Teaching&Academic/Science'
import TeacherTraining from '../Categories/Teaching&Academic/TeacherTraining'

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}/>

        <Route path="/business" element={<Business/>}/>
        <Route path="/communication" element={<Communication/>}/>
        <Route path="/management" element={<Managements/>}/>
        <Route path="/businessstrategy" element={<BusinessStrategy/>}/>
        <Route path="/operation" element={<Operations/>}/>
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

        <Route path="/design" element={<Design/>}/>
        <Route path="/webDesign" element={<WebDesign/>}/>
        <Route path="/gamedesign" element={<GameDesign/>}/>
        <Route path="/animation" element={<Animation3D/>}/>
        <Route path="/fashionDesign" element={<FashionDesign/>}/>
        <Route path="/otherDesign" element={<OtherDesign/>}/>


        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/digitalMarketing" element={<DigitalMarketing/>}/>
        <Route path="/socialMediaMarketing" element={<SocialMediaMarketing/>}/>
        <Route path="/publicRelationship" element={<PublicRelationship/>}/>
        <Route path="/contentMarketing" element={<ContentMarketing/>}/>
        <Route path="/productMarketing" element={<ProductMarketing/>}/>

        <Route path="/lifestyle" element={<Lifestyle/>}/>
        <Route path="/artCrafts" element={<ArtCrafts/>}/>
        <Route path="/beautyMakeup" element={<BeautyMakeup/>}/>
        <Route path="/foodBeverage" element={<FoodBeverage/>}/>
        <Route path="/petCaretraining" element={<PetCaretraining/>}/>
        <Route path="/travel" element={<Travel/>}/>

        <Route path="/photographyvideo" element={<Photographyvideo/>}/>
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
        <Route path="/mentalhealth" element={<Mentalhealth/>}/>
        <Route path="/yoga" element={<Yoga/>}/>
        <Route path="/dance" element={<Dance/>}/>


        <Route path="/teaching" element={<Teaching/>}/>
        <Route path="/engineering" element={<Engineering/>}/>
        <Route path="/math" element={<Math/>}/>
        <Route path="/socialScience" element={<SocialScience/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/teacherTraining" element={<TeacherTraining/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Nav
