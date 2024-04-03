import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Applecrouser() {

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

<div className='cr-main'>
                <div className='card-one' style={{marginLeft:'9%',gap:'10px'}}>
                   
                        <Carousel responsive ={responsive}>
                   
                  

                        <div className='card-image' >
                
                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710651945/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/17032024/HP_4Split_Appleatcroma_iphone15pro_17march2024_wsneyd.png?tr=w-720" alt='Whats New'/>
                        </div>

                        <div className='card-image' >
                        <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711085307/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/22032024/HP_4Split_Appleatcroma_Watch9_22march2024_nnnruw.png?tr=w-720" alt='Whats New'/>
                            
                        </div>

                        <div className='card-image'>

                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710911271/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/20032024/HP_4Split_Appleatcroma_iPads_20march2024_u4joer.png?tr=w-720" alt='Whats New'/>
                            
                        </div>


                        <div className='card-image'>

                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710312724/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/13032024/HP_4Split_Appleatcroma_AirpodsPro2_13march24_tojcc7.png?tr=w-720" alt='Whats New'/>
                                                   </div>


                        <div className='card-image'>

                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710568539/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/16032024/HP_4Split_Appleatcroma_macbook_16march2024_ojaowj.png?tr=w-720" alt='Whats New'/>
                            
                        </div>

                       
                        </Carousel>
                </div>
                
            </div>

    

    </>
  )
}

export default Applecrouser