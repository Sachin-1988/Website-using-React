import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carouselmain() {
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
                <div className='card-one' style={{marginLeft:'9%'}}>
                   
                        <Carousel responsive ={responsive}>
                   
                  

                        <div className='card-image' >
                
                            <img className='first-carousel-img' 
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690220193/Croma%20Assets/CMS/LP%20Page%20Banners/2023/UNBOXED/UPDATE/2407/category-icon_unboxed_e123f4.png" alt='Whats New'/>
                        </div>

                        <div className='card-image'>
                        <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png" alt='Whats New'/>
                            
                        </div>

                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-1000" alt='Whats New'/>
                            
                        </div>


                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-1000" alt='Whats New'/>
                                                   </div>


                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Ref_21Feb2023_ztynzt.png?tr=w-1000" alt='Whats New'/>
                            
                        </div>


                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700225992/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png?tr=w-1000" alt='Whats New'/>
                                                    </div>


                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709714448/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/March/Cat%20icons/6th/HP_CN_Coolers_6March2024_vroing.png?tr=w-1000" alt='Whats New'/>
                                                    </div>


                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-1000" alt='Whats New'/>
                                                   </div>

                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_HT_SB_21Feb2023_rk8ohd.png?tr=w-1000" alt='Whats New'/>
                            
                        </div>

                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-1000" alt='Whats New'/>
                           
                        </div>
                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/tablet_categoryicons_d9a5ru.png?tr=w-1000" alt='Whats New'/>
                                                  </div>

                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-1000" alt='Whats New'/>
                                                   </div>


                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281228/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/wearable_categoryicons_sl3n0l.png?tr=w-1000" alt='Whats New'/>
                            
                        </div>


                        <div className='card-image'>

                            <img className='first-carousel-img' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/kitchenappliances_categoryicons_xulmep.png?tr=w-1000" alt='Whats New'/>
                            {/* <p className='first-img'>Whats New</p> */}
                        </div>

                        <div className='card-image'>

                            <img className='first-carousel-img' src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1680608144/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/CategoryNavigation_AudioSplit_Accessories_21Feb2023_mtqgol.png?tr=w-1000" alt='Whats New'/>
                            {/* <p className='first-img'>Whats New</p> */}
                        </div>

                        <div className='card-image'>

                            <img className='first-carousel-img'
                                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709714448/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/March/Cat%20icons/6th/HP_CN_Fans_6March2024_jd6hnp.png?tr=w-1000" alt='Whats New'/>
                            {/* <p className='first-img'>Whats New</p> */}
                           
                        </div>
                        </Carousel>
                </div>
                
            </div>
        </>
    )
}
export default Carouselmain;


