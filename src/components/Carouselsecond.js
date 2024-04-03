// import React from 'react'
// import "../styles/Carouselsecond.css";
// const Carouselsecond = () => {
//   return (
//     <>
//    <div className='carousel-1'>
//     <div className='carousel-2'>
//      <h1 style={{color:"white"}}>
//         Deals of the Day
//      </h1>
//     </div>
//    </div>

//     </>
//   )
// }

    import styled from '@emotion/styled';
    import React from 'react'
    import 'react-slideshow-image/dist/styles.css';
    
    import {Fade, Zoom, Slide } from 'react-slideshow-image';
    
    const secondsliderimage=[
        {
          id:11,
        
          url:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705921289/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/245684_0_ng4sza.png?tr=w-480"
        
        },
        {
          id:12,
        
        
        url:"https://www.croma.com/godrej-5-in-1-convertible-1-5-ton-3-star-inverter-split-ac-with-active-carbon-filter-copper-condenser-sic-18ttc3wwa-/p/303927"
        },
        
        {
        id:13,
        
        url:"https://www.croma.com/vivo-v30-5g-8gb-ram-128gb-andaman-blue-/p/305301"
        },
        {
          id:14,
        
        
        url:"https://www.croma.com/croma-205-litres-3-star-direct-cool-single-door-refrigerator-with-inverter-compressor-crlr206did250503-bloom-wine-red-/p/300735"
        },
        {
          id:15,
        
        
        url:"https://www.croma.com/tcl-p635-pro-108-cm-43-inch-4k-ultra-hd-led-google-tv-with-dolby-audio-2023-model-/p/272121"
        },
        {
          id:16,
        
        
        url:"https://www.croma.com/boat-aavante-bar-raga-100w-bluetooth-soundbar-with-remote-surround-sound-2-2-channel-pitch-black-/p/265338"
        },
        ];
    const divsecond={
        display:'flex',
        alignitem:'center',
        width:'100%',
        height:'50px'
    }

    function carouselSec() {
      return (
        <div className='secondcarousel-main-container' style={{width:'100%',backgroundColor:'black'}}>
         <fade>
            {secondsliderimage.map((image,index)=>(
                <div key={index}>
                    <div style={{...divsecond,backgroundImage:`url(${image.url})`}}>

                    </div>

                </div>
            )

            )

            }
         </fade>
        </div>
      )
    }
    
    export default carouselSec



// export default Carouselsecond