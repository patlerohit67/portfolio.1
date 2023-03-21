import React from 'react'
import './Header.css';
import Cta from './Cta';
import ME from '../imagess/rohit 01.jpg';
import Headersocial from './Headersocial';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rohit Patle</h1>
        <h5 className='text-light'> Frontend Developer</h5>
        <Cta />
        <Headersocial/>

<div className="me">
  <img src={ME} alt="is loaded" />
</div>
<a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>


    </header>
  )
}

export default Header
