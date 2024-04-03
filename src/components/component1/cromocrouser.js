import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Cromocrouser() {
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
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711431435/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/26032024/HP_4split_CE_coolers_26march24_vqhbdl.png?tr=w-720" alt='Whats New'/>
                        </div>

                        <div className='card-image' >
                        <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711346696/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/25032024/HP_4split_CE_CAcc_25march24_opuilh.png?tr=w-720" alt='Whats New'/>
                            
                        </div>

                        <div className='card-image'>

                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711775644/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/30032024/HP_4split_CE_Ref_30march24_jur30d.png?tr=w-720" alt='Whats New'/>
                            
                        </div>


                        <div className='card-image'>

                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711346524/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/25032024/HP_4split_CE_CA_25march24_pdt5v1.png?tr=w-720" alt='Whats New'/>
                                                   </div>


                        <div className='card-image'>

                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711775644/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/30032024/HP_4split_CE_Ref_30march24_jur30d.png?tr=w-720" alt='Whats New'/>
                            
                        </div>

                       
                        </Carousel>
                </div>
                
            </div>

    

    </>
  )
}

export default Cromocrouser