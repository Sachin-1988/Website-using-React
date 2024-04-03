import React, { Component } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Grid, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footter.css';


function Footter() {
  return (
    <>
    <div className='footer-outer'>
        <div className='footer-outer-wrap' style={{width:'100%',height:'400px',backgroundColor:'black'}}>
         <div className='footer-outer-msg'><p style={{fontSize:'15PX',color:'white',marginLeft:'120px'}}>
            CONNECT WITH US<br/> 

            <div className='input-box' style={{display:"flex"}}>
            <input type='text' placeholder='Enter Email Id' style={{width:'300px',height:'50px',borderRadius:'10px'}}/>
           
            </div>

           
           <div className='social-link-outer'>
            <div>
              <a href='https://www.youtube.com/user/CromaRetail' target='blank' className='social-cromaretail'>
              <YouTubeIcon />
              </a>
            </div>

           
           
           
            <div>
              <a href='https://www.facebook.com/CromaRetail' target='blank' className='social-cromaretailss'>
                <FacebookIcon />
              </a>
            </div>

           
           
            <div>
              <a href='https://www.instagram.com/CromaRetail' target='blank' className='social-cromaretailsss'>
                <InstagramIcon />
              </a>
            </div>

           
           
            <div>
              <a href='https://www.linkedin.com' target='blank' className='social-cromaretailssss'>
                <LinkedInIcon />
              </a>
            </div>
            </div>
          
           

           
         </p>

         </div>
         <div>
            {/* <div style={{color:'white',marginLeft}}>
           <YouTubeIcon />
            </div> */}

          
         </div>
        </div>

    </div>
    </>
  )
}

export default Footter



