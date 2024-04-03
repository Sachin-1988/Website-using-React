import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Federal() {
    const responsive ={
        superLargeDesktop:{
            breakpoint:{ max: 4000, min:3000 },
            items:5
        },
        desktop: {
            breakpoint:{ max: 3000, min: 1024},
            items:4
        },
        tablet:{
            breakpoint:{ max: 1024, min: 464 },
            items:5
        },
        mobile:{
            breakpoint:{ max:464, min: 0},
            items:1
        }

    }
  return (
    <>

    <div className='cr-main'>
                    <div className='card-one' style={{marginLeft:'9%',gap:'10px'}}>
                       
                            <Carousel responsive ={responsive}>
                       
                      
    
                            <div className='card-image' >
                    
                                <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707906725/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/Jan/BAU/Revised%20-%20Fri%2C%20Sat%2C%20Sun%20-14th%20Feb/Sun%20-%20Federal_OneCard_HSBC/HP_Sun_382x506_13Feb2024_ubq7ap.png?tr=w-480" alt='Whats New'/>
                            </div>
    
                            <div className='card-image' >
                            <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683729468/Croma%20Assets/CMS/Homepage%20Banners/Updated%20Banners%20-%2010th%20May/HP_4Split_EasyEMI_8May2023_o7cpca.jpg?tr=w-480" alt='Whats New'/>
                                
                            </div>
    
                            <div className='card-image'>
    
                                <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683729468/Croma%20Assets/CMS/Homepage%20Banners/Updated%20Banners%20-%2010th%20May/HP_4Split_NEUCoin_8May2023_kunbf4.jpg?tr=w-480" alt='Whats New'/>
                                
                            </div>
    
    
                            <div className='card-image'>
    
                                <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711775614/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/30032024/HP_382x506_M14_30Mar2024_ltiswb.png?tr=w-480" alt='Whats New'/>
                                                       </div>
    
    
                            <div className='card-image'>
    
                                <img className='first-carousel-img' style={{width:'280px',height:'280px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711775612/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/30032024/HP_382x506_F14_30Mar2024_fvojoz.png?tr=w-480" alt='Whats New'/>
                                
                            </div>
    
                           
                            </Carousel>
                    </div>
                    
                </div>
    
        
    
        </>
  )
}

export default Federal