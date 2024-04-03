import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Personalcareappliances() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
     

    <div className='cr-main' style={{marginTop:'100px'}}>
    <div style={{backgroundColor:'black', color:'white',marginLeft:'10%',fontSize:'25px',fontWeight:'700'}}>Personal Care Appliances
      <div className='card-one' >

        <Carousel responsive={responsive}>



          <div className='card-image' >
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', gap: '20px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px', marginRight: '20%' }}>
              
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '180px', height: '140px', marginLeft: '25px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698933127/Croma%20Assets/Small%20Appliances/Grooming/Images/273464_0_hysbqf.png?tr=w-480" />

                <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                  Croma 165 Litres 2 star<br />Direct Cool Single Door...

                </h2>
                <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
                <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
             
            </div>
          </div>

          <div className='card-image'>
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
            <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
              <img className='first-carousel-img' style={{ width: '180px', height: '140px', marginLeft: '25px', marginTop: '30px' }}
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/h_300,w_300/v1709122942/Croma%20Assets/Communication/Mobiles/Images/305038_i2brcq.png?tr=w-480" />
              <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                Croma 165 Litres 2 star<br />Direct Cool Single Door...

              </h2>
              <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
              <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
            </div>
          </div>
          <div className='card-image'>
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
            <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
              <img className='first-carousel-img' style={{ width: '180px', height: '140px', marginLeft: '25px', marginTop: '30px' }}
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698934342/Croma%20Assets/Small%20Appliances/Grooming/Images/250726_0_w0qakt.png?tr=w-480" alt='Whats New' />
              <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                Croma 165 Litres 2 star<br />Direct Cool Single Door...

              </h2>
              <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
              <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
            </div>
          </div>

          <div className='card-image'>
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
            <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
              <img className='first-carousel-img' style={{ width: '180px', height: '140px', marginLeft: '25px', marginTop: '30px' }}
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/h_300,w_300/v1709122842/Croma%20Assets/Communication/Mobiles/Images/305041_i5rm5i.png?tr=w-480" alt='Whats New' />
              <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                Croma 165 Litres 2 star<br />Direct Cool Single Door...

              </h2>
              <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
              <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
            </div>
          </div>

          <div className='card-image'>
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
            <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>

              <img className='first-carousel-img' style={{ width: '180px', height: '140px', marginLeft: '25px', marginTop: '30px' }}
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698935826/Croma%20Assets/Small%20Appliances/Grooming/Images/235240_0_iv58sg.png?tr=w-480" alt='Whats New' />
              <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                Croma 165 Litres 2 star<br />Direct Cool Single Door...

              </h2>
              <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
              <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
            </div>
          </div>

          <div className='card-image'>
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}>
            <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
              <img className='first-carousel-img' style={{ width: '140px', height: '140px', marginLeft: '45px', marginTop: '30px' }}
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697020547/Croma%20Assets/Small%20Appliances/Health%20Care/Images/270790_0_zbkaqu.png?tr=w-480" alt='Whats New' />
              <h2 style={{ fontSize: '16px', marginLeft: '20px', color: 'white' }}>
                Croma 165 Litres 2 star<br />Direct Cool Single Door...

              </h2>
              <div style={{ fontSize: '16px', marginLeft: '20px', color: "white" }}>10,490.00</div>
              <div style={{ fontSize: '14px', padding: '5px', marginLeft: '20px', color: "white" }}>*****</div>
            </div>
          </div>

          
        
        </Carousel>
      </div>
</div>
    </div>
  </>
  )
}

export default Personalcareappliances