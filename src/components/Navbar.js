import React from 'react'
import "../styles/Navbar.css";
import "../styles/Carouselsecond.css";
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Carouselmain from './component1/Carouselmain';
import Newcar from './component1/Newcar';
import Highlight from './component1/highlight';
import Belowhighlight from './belowhighlight';
import Toptrendingdeal from './component1/toptrendingdeal';
import Bestsellingdeal from './component1/bestsellingdeal';
import Appleatchroma from './component1/appleatchroma';
import Applecrouser from './component1/applecrouser';
import Newatcromo from './component1/newatcromo';
import Belownewcroma from './component1/belownewcroma';
import Relateditem from './component1/relateditem';
import Mobilephones from './component1/mobilephones';
import Aircondition from './component1/aircondition';
import Recommended from './component1/recommended';
import Television from './component1/television';
import Kitchenappliances from './component1/kitchenappliances';
import Personalcareappliances from './component1/personalcareappliances';
import Audiopage from './component1/audio';
import Dealsonaudio from './component1/dealsonaudio';
import Cromoexclusive from './component1/cromoexclusive';
import Cromocrouser from './component1/cromocrouser';
import Refigrators from './component1/refigrators';
import Laptop from './component1/laptop';
import Dealsonlaptop from './component1/dealsonlaptop';

import Parts from './component1/parts';
import Dealspart from './component1/dealspart';
import Bestdeal from './component1/bestdeal';
import Tablets from './component1/tablets';
import Washingmachine from './component1/washingmachine';
import Microwave from './component1/microwave';
import Popularproducts from './component1/popularproducts';
import Topbrands from './component1/topbrands';
import Topcategories from './component1/topcategories';
import Tataadvantage from './component1/tataadvantage';
import Footter from './footter';



const Navbar = () => {
  return (
    <>
    <div style={{backgroundColor:'black'}}>
      <nav className='main-nav'>
        <div className='part-one'>
          <div className='nav-div>' style={{ display: "flex", gap: "10%" }}>

            <div className="d1" style={{ marginLeft: "50%" }}>CROMA</div>
            <div className='d2'>Menu</div>
            <div>
              <p className='d3'>What are you looking for</p>
            </div>

            <p className='p1'><EditLocationIcon/>Mumbai,400049</p>
            <div className='p2'><PersonIcon/></div>
            <div className='p3'><ShoppingCartIcon/></div>

          </div>

        </div>
      </nav>
     
                

      <div className='second-div'></div>
            <div className='black-div' style={{backgroundColor:"black",height:"20vh",display :"flex"}}>
           
        <div>
        
          <img className='img-div' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707906724/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/Jan/BAU/Revised%20-%20Fri%2C%20Sat%2C%20Sun%20-14th%20Feb/Sun%20-%20Federal_OneCard_HSBC/HP_2split_Fedrel_HSBC_OC_13Feb24_jw25rb.png?tr=w-1024'/>
        </div>
        <div >
          <img className='img-div1' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707888979/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/Feb/Zipcare/D_HP_2Split_14Feb2024_nqreg5.png?tr=w-1000'/>
        </div>
        
      </div>
      <Carouselmain/>
      <Newcar />
      <Highlight />
      <Belowhighlight />
      <Toptrendingdeal />
      <Bestsellingdeal />
      <Appleatchroma />
      <Applecrouser />
      <Newatcromo />
      <Belownewcroma />
      <Relateditem />
      <Mobilephones />
      <Aircondition />
      <Recommended />
      <Television />
      <Kitchenappliances />
      <Personalcareappliances />
      <Audiopage />
      <Dealsonaudio />
      <Cromoexclusive />
      <Cromocrouser />
      <Refigrators />
      <Laptop />
      <Dealsonlaptop />
      <Parts />
      <Dealspart />
      <Bestdeal />
      <Tablets />
      <Washingmachine />
      <Microwave />
      <Popularproducts />
      <Topbrands />
      <Topcategories />
      <Tataadvantage />
      <Footter />
      
      
      
      
     </div>
      </>             
    
  );
};

export default Navbar