import React from 'react';
import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-hamburger.svg'


function Header() {

  const Show = () => {
    console.log('click..');
  }

  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img className='main-logo' src={Logo} alt=''/>
        </div>
        <div className='menu-container'>           
            <p className='btn'>About</p>
            <p className='btn'>Services</p>
            <p className='btn'>Projects</p>
            <p className='btn contact'>Contact</p>           
        </div>

        <div className="menu-mobile" onClick={Show}>
            <img src={Hamburger} alt="" />

            <div className='menu-mobile-content'>
                <div className='btn'>About</div>
                <div className='btn'>Services</div>
                <div className='btn'>Projects</div>
                <div className='btn contact'>Contact</div>
            </div>
        </div>

       
    </div>
  )
}

export default Header;