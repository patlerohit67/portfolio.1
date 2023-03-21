import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

function Headersocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rohit-patle-267597229/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/patlerohit67" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default Headersocial
