import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Topbrands() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

  return (
    <>

    <div className='cr-main'>
        <div className='card-one' style={{marginLeft:'9%' ,color:'white',fontSize:'25px',fontWeight:'700',marginTop:'50px'}}>Top Brands
           
                <Carousel responsive ={responsive}>
           
          

                <div className='card-image' >
        
                    <img className='first-carousel-img' 
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1654848447/Croma%20Assets/CMS/Brand%20Logos/apple_xmf55t.png?tr=w-720" alt='Whats New'/>
                </div>

                <div className='card-image'>
                <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260853/Croma%20Assets/CMS/Brand%20Logos/samsung_tmmzob.png?tr=w-720" alt='Whats New'/>
                    
                </div>

                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260852/Croma%20Assets/CMS/Brand%20Logos/philips_lv4l0t.png?tr=w-720" alt='Whats New'/>
                    
                </div>


                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1653914556/Croma%20Assets/CMS/Brand%20Logos/HP_CromaLogo_yxeuuz.png?tr=w-720" alt='Whats New'/>
                                           </div>


                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/hp_co1yuv.png?tr=w-720" alt='Whats New'/>
                    
                </div>


                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/hp_co1yuv.png?tr=w-720" alt='Whats New'/>
                                            </div>


                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1654848448/Croma%20Assets/CMS/Brand%20Logos/sony_fa0aon.png?tr=w-720" alt='Whats New'/>
                                            </div>


                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1654848447/Croma%20Assets/CMS/Brand%20Logos/Lg_duygz8.png?tr=w-720" alt='Whats New'/>
                                           </div>

                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1654848446/Croma%20Assets/CMS/Brand%20Logos/dell_nagdmt.png?tr=w-720" alt='Whats New'/>
                    
                </div>

                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260853/Croma%20Assets/CMS/Brand%20Logos/vivo_sqsnbm.png?tr=w-720" alt='Whats New'/>
                   
                </div>
                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260852/Croma%20Assets/CMS/Brand%20Logos/oppo_zdscdn.png?tr=w-720" alt='Whats New'/>
                                          </div>

                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/jbl_prjtcv.png?tr=w-720" alt='Whats New'/>
                                           </div>


                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/Lenovo_dxvgyb.png?tr=w-720" alt='Whats New'/>
                    
                </div>


                <div className='card-image'>

                    <img className='first-carousel-img' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260850/Croma%20Assets/CMS/Brand%20Logos/amazon_ujwvcg.png?tr=w-720" alt='Whats New'/>
                    {/* <p className='first-img'>Whats New</p> */}
                </div>

                <div className='card-image'>

                    <img className='first-carousel-img' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260853/Croma%20Assets/CMS/Brand%20Logos/panasonic_g5ubsn.png?tr=w-720" alt='Whats New'/>
                    {/* <p className='first-img'>Whats New</p> */}
                </div>

                <div className='card-image'>

                    <img className='first-carousel-img'
                        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1652260852/Croma%20Assets/CMS/Brand%20Logos/realme_m8q5py.png?tr=w-720" alt='Whats New'/>
                    {/* <p className='first-img'>Whats New</p> */}
                   
                </div>
                </Carousel>
        </div>
        
    </div>
</>
  )
}

export default Topbrands