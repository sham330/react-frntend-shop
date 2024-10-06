import React from 'react'
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} />
            <p>SHOPPER</p>
        </div>
        <u1 className="footer-link">
            <li>Company</li>
            <li>Ptoducts</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </u1>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon}/>
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon}/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon}/>
            </div>
        </div>
        <div className="footer-copyright">
            <nr/>
            <p>Copyright @2024 - All rights reserved</p>
        </div>

    </div>
  )
}
