// import Touch2Reveal from '../../node_modules/touch2reveal/Touch2Reveal.js';
// import '../../node_modules/touch2reveal/Touch2Reveal.css';
import React, { useState, useEffect } from 'react';
import ScratchCard from 'react-scratch-coupon';
import couponCover from '../images/png/blueTexture.jpg';


const ScratchableCard = () => {
    useEffect(() => {
        
     });
    
    return (
         <article className='scratch-card'>
                <ScratchCard width={300} height={300} cover={couponCover}>
                    <form className="form" >
                        <h2>Hello There!</h2>
                        <p>I am a hidden card</p>
                    </form>
                </ScratchCard>
        </article>
    );
}


export default ScratchableCard;