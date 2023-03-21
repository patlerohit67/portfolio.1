import React from 'react';
import { FaFacebookF,FaInstagram ,FaTwitter} from "react-icons/fa";
import './Footer.css';
import IMA from '../imagess/logo.jpg';


function Footer() {
  return (
    <footer>
      <a href="" className='footer__logo'>
        <img  className="imag_one" src={IMA} alt="" />
      </a>
      <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skill">Skill</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#contacte">Contacte</a></li>
      </ul>
     
     <div className="footer__social">
      <a href="#" target=" _blank" ><FaFacebookF/></a>
      <a href="#" target="_blank"><FaInstagram/></a>
      <a href="#" target=" _blank"><FaTwitter/></a>
     </div>
     <div className="footer__copyright">
      <small>
        &copy; All rights reserved
      </small>
     </div>
    </footer>
  )
}

export default Footer
