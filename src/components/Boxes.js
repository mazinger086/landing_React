import React from 'react';
import Egg  from '../images/mobile/image-transform.jpg';
import StandOut from '../images/mobile/image-stand-out.jpg';

function Boxes() {
  return (
    <div className='box-container'>
        <div className="row">
            <div className='box'>
                <p className='box-title'>Transform your brand</p>
                <p className='box-text'>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through completing visuals that do most of the marketing for you.</p>
                <p className='box-link'>Learn more</p>
            </div>

            <div className='box-img'>
                <img src={Egg} alt="" />
            </div>
        </div>      

        <div className="row2">
            <div className='box'>
                <p className='box-title'>Stand out to the right audience</p>
                <p className='box-text'>Using collaborative formula of designers, researchers, photographers, videographers, we'll build and extend your brand in digital places</p>
                <p className='box-link'>Learn more</p>
            </div>

            <div className='box-img'>
                <img src={StandOut} alt="" />
            </div>
        </div> 

        <div className="row">
            <div className='box2 cherry'>

                <div className='box-text-container'>
                    <p className='box-title'>Graphic design</p>
                    <p className='box-text'>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through completing visuals that do most of the marketing for you.</p> 
                </div>             
            </div>

            <div className='box2 orange'>
                
                <div className='box-text-container'>
                    <p className='box-title'>Photography</p>
                    <p className='box-text'>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through completing visuals that do most of the marketing for you.</p> 
                </div>
                
            </div>
        </div> 

    </div>
  )
}

export default Boxes