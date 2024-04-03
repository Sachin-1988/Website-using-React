import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Topcategories() {
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
                            <div className='title-wrap' style={{backgroundColor:'black',border:'1px solid', width:'300px',borderTopColor:'black',color:'grey',borderRadius:'10px'}}>
                                <img className='first-carousel-img' style={{width:'300px',height:'220px',borderRadius:'10px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1628240750/Croma%20Assets/CMS/top_category/Home_Appliances_31_kfl0o8.jpg?tr=w-480" alt='Whats New'/>
                           
                            <p>
                              <span style={{color:'white',marginLeft:'80px',fontWeight:'bold',fontSize:'20px'}}>Accessories</span>
                            </p>
                           </div>
                           
                            </div>
                            
                            
                            <div className='card-image' >
                            <div className='title-wrap' style={{backgroundColor:'black',border:'1px solid', width:'300px',borderTopColor:'black',color:'grey',borderRadius:'10px'}}>
                            <img className='first-carousel-img' style={{width:'300px',height:'220px',borderRadius:'10px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1628240750/Croma%20Assets/CMS/top_category/Computers._tablets_40_so61uj.jpg?tr=w-480" alt='Whats New'/>
                                       <p>
                              <span style={{color:'white',marginLeft:'80px',fontWeight:'bold',fontSize:'20px'}}>Home Appliances</span>
                            </p>
                           </div>                   
                                                          
                                                           </div>
                            
    
                            <div className='card-image'>
                            <div className='title-wrap' style={{backgroundColor:'black',border:'1px solid', width:'300px',borderTopColor:'black',color:'grey',borderRadius:'10px'}}>
                                <img className='first-carousel-img' style={{width:'300px',height:'220px',borderRadius:'10px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1628240750/Croma%20Assets/CMS/top_category/Kitchen_Appliances_22_moahza.jpg?tr=w-480" alt='Whats New'/>
                                <p>
                              <span style={{color:'white',marginLeft:'60px',fontWeight:'bold',fontSize:'20px'}}>Computers & Tablets</span>
                            </p>
                           </div>
                            </div>
    
    
                            <div className='card-image'>
                            <div className='title-wrap' style={{backgroundColor:'black',border:'1px solid', width:'300px',borderTopColor:'black',color:'grey',borderRadius:'10px'}}>
                                <img className='first-carousel-img' style={{width:'300px',height:'220px',borderRadius:'10px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1628240750/Croma%20Assets/CMS/top_category/Phones_Wearables_43_hc3kui.jpg?tr=w-480" alt='Whats New'/>
                                      <p>
                              <span style={{color:'white',marginLeft:'60px',fontWeight:'bold',fontSize:'20px'}}>Kitchen Appliances</span>
                            </p>
                           </div>                
                                                      
                            </div>
    
    
                            <div className='card-image'>
                            <div className='title-wrap' style={{backgroundColor:'black',border:'1px solid', width:'300px',borderTopColor:'black',color:'grey',borderRadius:'10px'}}>
                                <img className='first-carousel-img' style={{width:'300px',height:'220px',borderRadius:'10px'}}
                                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1628240750/Croma%20Assets/CMS/top_category/Audio_Video_19_qhxzxm.jpg?tr=w-480" alt='Whats New'/>
                               <p>
                              <span style={{color:'white',marginLeft:'70px',fontWeight:'bold',fontSize:'20px'}}>Accessories</span>
                            </p>
                           </div> 
                            </div>
    
                           
                            </Carousel>
                    </div>
                    
                </div>
    
        
    
        </>
  )
}

export default Topcategories