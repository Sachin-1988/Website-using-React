import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Highlight() {

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
      <div style={{backgroundColor:'black', color:'white',marginLeft:'10%',fontSize:'25px',fontWeight:'700'}}>Highlights
        <div className='card-one' >

          <Carousel responsive={responsive}>



            <div className='card-image' >
              <div className='fisrt-cr' style={{marginTop:'10px' }}>
                
               
                  <img className='first-carousel-img' style={{ width: '430px', height: '220px',borderRadius:'5px' }}
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701503911/Croma%20Assets/CMS/Homepage%20Banners/Highlights/2023/02-12-2023/Croma_banner1_sleex7.png?tr=w-720" />

               
              </div>
            </div>

            <div className='card-image' style={{marginTop:'10px' }}>
              {/* <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}> */}
             
                <img className='first-carousel-img' style={{ width: '430px', height: '220px',borderRadius:'5px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690220194/Croma%20Assets/CMS/LP%20Page%20Banners/2023/UNBOXED/UPDATE/2407/Unboxed_banner_24July23_njx30f.png?tr=w-720" />
                
              {/* </div> */}
            </div>
            <div className='card-image' style={{marginTop:'10px' }}>
              {/* <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}> */}
             
                <img className='first-carousel-img' style={{ width: '430px', height: '220px',borderRadius:'5px' }}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700058607/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gift%20Card/HP_Highlights_GiftCard_29March2023_hkbb2t.jpg?tr=w-720" alt='Whats New' />
               
               
              {/* </div> */}
            </div>

            <div className='card-image' style={{marginTop:'10px' }}>
              {/* <div className='fisrt-cr' style={{ width: '210px', height: '300px', marginTop: '20px', backgroundColor: '#001a00', borderRadius: '10px' }}> */}
             
                <img className='first-carousel-img' style={{ width: '430px', height: '220px' ,borderRadius:'5px'}}
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700058607/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gift%20Card/HP_Highlights_GiftCard_29March2023_hkbb2t.jpg?tr=w-720" alt='Whats New' />
                
                
              {/* </div> */}
            </div>

           
            
           



            
          </Carousel>
        </div>
</div>
      </div>






    {/* <div className='highlightmain'>
        <div className='highlightsmsg' style={{ backgroundColor:'black',marginLeft:'10%',color:'white',fontSize:'25px',fontWeight:'25px' }}>Highlights
         
        <Carousel responsive={responsive}>
       <div className='highlight-display' style={{display:'flex',gap:'20px',marginTop:'20px'}}>
        <div className='highlight-main'>
            <img style={{width:'400px',height:'250px'}} src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701503911/Croma%20Assets/CMS/Homepage%20Banners/Highlights/2023/02-12-2023/Croma_banner1_sleex7.png?tr=w-720'></img>
        </div>

        <div className='highlight-main'>
            <img style={{width:'400px',height:'250px'}} src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1690220194/Croma%20Assets/CMS/LP%20Page%20Banners/2023/UNBOXED/UPDATE/2407/Unboxed_banner_24July23_njx30f.png?tr=w-720'></img>
        </div>

        <div className='highlight-main'>
            <img style={{width:'400px',height:'250px'}} src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700058607/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gift%20Card/HP_Highlights_GiftCard_29March2023_hkbb2t.jpg?tr=w-720'></img>
        </div>

        <div className='highlight-main'>
            <img style={{width:'400px',height:'250px'}} src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701503911/Croma%20Assets/CMS/Homepage%20Banners/Highlights/2023/02-12-2023/Croma_banner1_sleex7.png?tr=w-720'></img>
        </div>

        </div>
        </Carousel>
        </div>
        
        </div> */}
        </>
   
  )
}

export default Highlight