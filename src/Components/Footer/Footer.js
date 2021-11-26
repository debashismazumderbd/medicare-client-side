import React from 'react';
import './Footer.css';


const Footer = () => {
    
    return (
        <div className='p-5 mt-5 text-white bg-dark footer'>
            {/* link use for footer */}
<div>
        <a className="footer-a"  href="https://web.facebook.com/">Facebook </a>
         <a className="footer-a"  href="https://mail.google.com/">Email </a>
         <a className="footer-a" href="https://www.linkedin.com/feed/">linkedIn</a>
</div>
            <p>@2021,All Rights Reserved By dm-medicare</p>
        </div>
    );
};

export default Footer;