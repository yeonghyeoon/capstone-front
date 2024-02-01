import React from 'react'
import '../Footer/Footer.scss';
import facebook from '../../assets/Icons/Icon-facebook.svg';
import instagram from '../../assets/Icons/Icon-instagram.svg';
import xLogo from '../../assets/Icons/x-social-media-logo-icon.webp';
// import xLogo from '../../assets/Icons/x-logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-subscribe'>
            <p>Subscribe to my Newsletter</p>
            <div className='footer-subscribe-container'>
                <input className='footer-subscribe-input' name='email' type='email' placeholder='Enter your email here'></input>
                <button className='footer-subscribe-btn'>Join</button>
            </div>
        </div>

        <div className='footer-Info'>
            <div className='footer-Info-contact' id='contact'>
                <p>Elevate</p>
                <p>Tel 123-456-7890</p>
                <p>Email info@website.com</p>
                <div className='footer-contactInfo-icons'>
                    {/** facebook, instagram, youtube or twitter */}
                    <img className='footer-contactInfo-icons--facebook' src={facebook} alt="facebook" />
                    <img className='footer-contactInfo-icons--instagram' src={instagram} alt="instagram" />
                    <img className='footer-contactInfo-icons--xLogo' src={xLogo} alt="x" />
                </div>
            </div>
            <div className='footer-Info-detail'>
                <p>FAQ</p>
                <p>Shipping & Returns</p>
                <p>Store Policy</p>
                <p>Payments</p>
            </div>    
        </div>
        
    </div>
  )
}

export default Footer