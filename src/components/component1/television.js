import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Television () {
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
    <div style={{backgroundColor:'black', color:'white',marginLeft:'10%',fontSize:'25px',fontWeight:'700'}}>Television
      <div className='card-one' >

        <Carousel responsive={responsive}>



          <div className='card-image' >
            <div className='fisrt-cr' style={{ width: '250px', height: '300px', gap: '20px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px', marginRight: '20%' }}>
              
              <div style={{ marginLeft:'80%',width:'2%', height:'2px',paddingTop:'5%', color:"white"}}><FavoriteBorderIcon/></div>
                <img className='first-carousel-img' style={{ width: '180px', height: '140px', marginLeft: '25px', marginTop: '30px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709644175/Croma%20Assets/Entertainment/Television/Images/300485_0_zm8tvc.png?tr=w-480" />

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
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702668640/Croma%20Assets/Entertainment/Television/Images/274273_0_c1cnav.png?tr=w-480" />
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
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701615250/Croma%20Assets/Entertainment/Television/Images/300448_0_jin8eg.png?tr=w-480" alt='Whats New' />
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
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703767582/Croma%20Assets/Entertainment/Television/Images/251388_0_spbzr3.png?tr=w-480" alt='Whats New' />
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
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1702668881/Croma%20Assets/Entertainment/Television/Images/274146_0_ig6kum.png?tr=w-480" alt='Whats New' />
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
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689153746/Croma%20Assets/Entertainment/Television/Images/272260_0_crhub2.png?tr=w-480" alt='Whats New' />
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
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/h_300,w_300/v1666376909/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/257366_0_n79c6a.png?tr=w-480" alt='Whats New' />
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

export default Television