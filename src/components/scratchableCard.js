// import Touch2Reveal from '../../node_modules/touch2reveal/Touch2Reveal.js';
// import '../../node_modules/touch2reveal/Touch2Reveal.css';
import React, { useState, useEffect } from 'react';
import ScratchCard from 'react-scratch-coupon';
import couponCover from '../images/png/logo.png';


const ScratchableCard = () => {
    useEffect(() => {
        
     });
    
    return (
         <article className='scratch-card'>
                <div id="hiddenScratchCard">
                <ScratchCard  cover={couponCover}>
                    <form className="" >
                        <h2>Hello There!</h2>
                        {/* <h1><code>Coupon code : 1651613335</code></h1>
                        <div>
                            <input type="text" name="code" placeholder="Coupon Code"></input>
                        </div>
                        <div>
                            <input type="submit" value="Submit"></input>
                        </div> */}
                    </form>
                </ScratchCard>
                </div>
        </article>
    );
}


export default ScratchableCard;