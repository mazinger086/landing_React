import React from 'react';
import Arrow from '../images/icon-arrow-down.svg';

function Hero() {
  return (
    <div className='hero-container'>
        <h1 className='hero-title'>we are creatives</h1>
        <span><img src={Arrow} alt="" /></span>
    </div>
  )
}

export default Hero