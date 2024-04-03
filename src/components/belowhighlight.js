import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Belowhighlight() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
      
        <div className='card-one' >

          <Carousel responsive={responsive}>



            <div className='card-image'  style={{display:'flex'}}>
              <div className='fisrt-cr' style={{marginTop:'10px' }}>
                
               
                  <img className='first-carousel-img' style={{ width: '430px', height: '220px',marginLeft:'150px',borderRadius:'5px' }}
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707934034/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Wedding%20Special/wedding_highlight_14feb_kephg4.png?tr=w-720" />

               
              </div>
            </div>

            <div className='card-image' style={{marginTop:'10px' }}>
              {/* <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}> */}
             
                <img className='first-carousel-img' style={{ width: '430px', height: '220px',marginLeft:'100px',borderRadius:'5px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1711527026/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Deals%20Corner/March/27th/HP%20Highlights/HP_Highlights_DealsCorner_27March2024_cidri3.jpg?tr=w-720" />
                
              {/* </div> */}
            </div>
            <div className='card-image' style={{marginTop:'10px' }}>
              {/* <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}> */}
             
                <img className='first-carousel-img' style={{ width: '430px', height: '220px',marginLeft:'55px',borderRadius:'5px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710953047/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Croma%20OL/Mar/20th%20March/Homepage/HPHighlights/HPHighlight_CromaOL_20March2024_tkrhti.png?tr=w-720" alt='Whats New' />
               
               
              {/* </div> */}
            </div>

            <div className='card-image' style={{marginTop:'10px' }}>
              {/* <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}> */}
             
                <img className='first-carousel-img' style={{ width: '430px', height: '220px',marginLeft:'60px',borderRadius:'5px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710953047/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Croma%20OL/Mar/20th%20March/Homepage/HPHighlights/HPHighlight_CromaOL_20March2024_tkrhti.png?tr=w-720" alt='Whats New' />
                
                
              {/* </div> */}
            </div>

           
            
           



            
          </Carousel>
        </div>
          </div>
      






    
        </>
  )
}

export default Belowhighlight