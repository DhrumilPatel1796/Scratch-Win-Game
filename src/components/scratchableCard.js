// import Touch2Reveal from '../../node_modules/touch2reveal/Touch2Reveal.js';
// import '../../node_modules/touch2reveal/Touch2Reveal.css';
import React, { useState, useEffect } from 'react';
// import ScratchCard from 'react-scratch-coupon';
import couponCover from '../images/png/blueTexture.jpg';
import couponBack from '../images/png/scratchcard.jpg';
import brush from '../images/png/brush.png';
import {ScratchCard, SCRATCH_TYPE} from 'scratchcard-js'


const ScratchableCard = () => {
    useEffect(() => {
        const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.BRUSH,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  brushSrc: brush,
  imageForwardSrc: couponCover,
  imageBackgroundSrc: couponBack,
  htmlBackground: '',
  clearZoneRadius: 0,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    alert('Now the window will reload !')
    window.location.reload()
  }
})

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});
     });
    
    return (
         <article className='scratch-card'>
                {/* <ScratchCard width={'100%'} height={300} cover={couponCover}>
                    <form className="form" >
                        <h2>Hello There!</h2>
                        <p>I am a hidden card</p>
                    </form>
                </ScratchCard> */}
                <div className="sc__wrapper">

                    <div id="js--sc--container" className="sc__container">

                    </div>

                    <div className="sc__infos">

                    </div>
</div>
        </article>
    );
}


export default ScratchableCard;