
// import React, { useEffect, useState } from 'react'
// import "../component1/Home.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import {useNavigate} from 'react-router-dom'
function Newcar() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }


  }



  return (
    <>
     

      <div className='cr-main'>
      <div style={{backgroundColor:'black', color:'white',marginLeft:'10%',fontSize:'25px',fontWeight:'700'}}>Deals of the Day
        <div className='card-one' >

          <Carousel responsive={responsive}>



            <div className='card-image' >
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', gap: '20px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px', marginRight: '20%' }}>
                
                <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                  <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703767747/Croma%20Assets/Large%20Appliances/Refrigerator/Images/273622_0_cjppke.png?tr=w-1000" />

                  <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                    Croma 165 Litres 2 star<br />Direct Cool Single Door...

                  </h2>
                  <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                  <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
               
              </div>
            </div>

            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708604293/Croma%20Assets/Communication/Mobiles/Images/304888_0_cipdu6.png?tr=w-480" />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>
            </div>
            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1696774817/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/301438_r3cu5s.png?tr=w-480" alt='Whats New' />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>
            </div>

            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710309651/266568_0_wzxz8q.png?tr=w-480" alt='Whats New' />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>
            </div>

            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>

                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706770632/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/303841_sb277y.png?tr=w-480" alt='Whats New' />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>
            </div>

            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1706770632/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/303841_sb277y.png?tr=w-480" alt='Whats New' />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>
            </div>

            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615212/Croma%20Assets/Communication/Wearable%20Devices/Images/301657_0_hlx469.png?tr=w-480" alt='Whats New' />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>

            </div>
            <div className='card-image'>
              <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615212/Croma%20Assets/Communication/Wearable%20Devices/Images/301657_0_hlx469.png?tr=w-480" alt='Whats New' />
                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
              </div>
            </div>



            <div className='card-image'>
            <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
              <img className='first-carousel-img'
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709714448/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/March/Cat%20icons/6th/HP_CN_Fans_6March2024_jd6hnp.png?tr=w-1000" alt='Whats New' />
              {/* <p className='first-img'>Whats New</p> */}
              <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                Croma 165 Litres 2 star<br />Direct Cool Single Door...

              </h2>
              <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
              <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>

            </div>
          </Carousel>
        </div>
</div>
      </div>
    </>
  )
}

export default Newcar

