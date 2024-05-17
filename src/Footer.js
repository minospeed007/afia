import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
      <footer className='footer-div'>
         <div className='footer-link'>
        <Link className="foot" to="/">
            <h3 className='home-link'>Home</h3>  
            </Link>
            <br />
            <Link className="foot" to="/cart">
             <h3 className='home-link'> Cart</h3>
            </Link>
            </div>
        <div className='footer-link-div'>
       
            <div className='icon-div'>
             
              <XIcon className='social-icon'/>
              <p className='p-icons'><FacebookIcon/></p>
              <p className='p-icons'><LinkedInIcon/></p>
          </div>
          </div>
        <div className="footer">
         
          <div className="footer-info">
              <div className='info-div'>
                 <h3>Afia onLine</h3> 
                 <p>
                  A one stop shop for all you online shopping.
                  Get quality products at an affordable prices.
                 </p>
                  </div>
                  <div className='info-div'>
                   <h3> Products  </h3>
                   
                      <p>Mobile Phones</p>
                      <p>Wrist Watches</p>
                      <p>Clothes</p>
                      <p>Shoes</p>
                   
                  </div>
                  <div className='info-div'>
                      <h3>Useful Links</h3>
                      <p>Pricing</p>
                      <p>Settings</p>
                      <p>Return Policy</p>
                      <p>Orders</p>
                      <p>Help</p>
                  </div>
                  <div className='info-div'>
                      
                      <h3>Contact</h3>
                      <p><div className='p-icon'> <HomeIcon/>24, Bank Rd, Nnewi, Anambra State</div></p> 
                      <p><div  className='p-icon'><PhoneIcon/> +234804567970</div></p>
                     <p> <div className='p-icon'><EmailIcon/>afia@info.com</div></p>
  
                  </div>
           
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;