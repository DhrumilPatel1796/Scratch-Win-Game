import React, { useState, useEffect } from 'react';
import couponCover from '../images/png/coins-w-blur.png';
import brush from '../images/png/brush.png';
import {ScratchCard, SCRATCH_TYPE} from 'scratchcard-js'

const prizes = [20];
function createPrizeCard(prizes, setResults){
    let cardNumbers = [];
    for (let i = 0; i < 3; i++) {
        cardNumbers.push(prizes[Math.floor(Math.random() * prizes.length)])
    }
    console.log(`${cardNumbers[0]}:${cardNumbers[1]}:${cardNumbers[2]}`);
    if(cardNumbers[0] === cardNumbers[1] && cardNumbers[1] === cardNumbers[2]){
        console.log('Should be winning');
        
        setResults(true, cardNumbers[0]);
    }
    else{
        setResults(false, 0);
    }
    return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="scratch-card-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"         y="0px" viewBox="0 0 886 350" style="enable-background:new 0 0 886 350;" xml:space="preserve">     <style type="text/css">         .st0{fill:url(#scratch-bg_00000009587973416215273440000014370953611773108127_);}         .st1{fill:url(#scratch-outer-border_00000173126968724685511910000002901378915968400319_);}         .st2{fill:none;stroke:url(#scratch-inner-border_00000139257161929603502390000003365964912774545072_);}         .st3{fill:#E29110;}         .st4{fill:#FFDB2C;}         .st5{opacity:0.5;}         .st6{fill:#FFFFFF;}         .st7{font-family:'AlwynNewRounded-Bold';}         .st8{font-size:48px;}         .st9{letter-spacing:-2;}     </style>     <linearGradient id="scratch-bg_00000000180918990658051790000008113393226862969785_" gradientUnits="userSpaceOnUse" x1="315.6929" y1="583.3415" x2="572.1444" y2="-239.2348" gradientTransform="matrix(1 0 0 -1 0 350)">         <stop  offset="0" style="stop-color:#C4C4C4"/>         <stop  offset="1.000000e-04" style="stop-color:#00FFFF"/>         <stop  offset="1" style="stop-color:#FF00FF"/>     </linearGradient>     <rect id="scratch-bg" x="3" y="3" style="fill:url(#scratch-bg_00000000180918990658051790000008113393226862969785_);" width="880" height="344"/>     <linearGradient id="scratch-outer-border_00000022555211028552896750000010558056852423240848_" gradientUnits="userSpaceOnUse" x1="-11.785" y1="462.138" x2="773.6425" y2="-33.758" gradientTransform="matrix(1 0 0 -1 0 350)">         <stop  offset="0" style="stop-color:#E900EE"/>         <stop  offset="0.4062" style="stop-color:#BA96FF;stop-opacity:0.27"/>         <stop  offset="0.5781" style="stop-color:#7B7FEA;stop-opacity:0.3"/>         <stop  offset="1" style="stop-color:#18B2DE"/>     </linearGradient>     <path id="scratch-outer-border" style="fill:url(#scratch-outer-border_00000022555211028552896750000010558056852423240848_);" d="         M3,3V0H0v3H3z M883,3h3V0h-3V3z M883,347v3h3v-3H883z M3,347H0v3h3V347z M3,6h880V0H3V6z M880,3v344h6V3H880z M883,344H3v6h880V344z          M6,347V3H0v344H6z"/>     <linearGradient id="scratch-inner-border_00000107556779191381455460000014780077004677354428_" gradientUnits="userSpaceOnUse" x1="-22.2788" y1="328.8201" x2="700.1014" y2="-163.0729" gradientTransform="matrix(1 0 0 -1 47 219)">         <stop  offset="0" style="stop-color:#E900EE"/>         <stop  offset="0.4062" style="stop-color:#BA96FF;stop-opacity:0.27"/>         <stop  offset="0.5781" style="stop-color:#7B7FEA;stop-opacity:0.3"/>         <stop  offset="1" style="stop-color:#18B2DE"/>     </linearGradient>     <path id="scratch-inner-border" style="fill:none;stroke:url(#scratch-inner-border_00000107556779191381455460000014780077004677354428_);" d="         M20,22h846v306H20V22z"/>     <g id="coin3_00000142170109008883469940000003689094143659764874_">         <rect x="601" y="183.2" class="st3" width="226.5" height="9.1"/>         <g>             <circle class="st3" cx="715" cy="192.3" r="114"/>         </g>         <g>             <circle class="st4" cx="715" cy="183.2" r="114"/>         </g>         <g class="st5">             <path class="st6" d="M715,69.2c-42.2,0-79,22.9-98.7,57c19.7,34.1,56.5,57,98.7,57s79-22.9,98.7-57                 C794.1,92.1,757.2,69.2,715,69.2z"/>         </g>         <g>             <circle class="st4" cx="715" cy="183.2" r="97.3"/>             <path class="st3" d="M715,87.4c52.8,0,95.8,43,95.8,95.8s-43,95.8-95.8,95.8s-95.8-43-95.8-95.8S662.2,87.4,715,87.4 M715,84.4                 c-54.5,0-98.8,44.3-98.8,98.8c0,54.5,44.3,98.8,98.8,98.8s98.8-44.3,98.8-98.8C813.8,128.7,769.5,84.4,715,84.4L715,84.4z"/>         </g>         <g>             <path class="st3" d="M715,93.5c52.9,0,96.3,41.9,98.7,94.2c0.1-1.5,0.1-3,0.1-4.6c0-54.5-44.3-98.8-98.8-98.8                 s-98.8,44.3-98.8,98.8c0,1.5,0,3,0.1,4.6C618.7,135.4,662.1,93.5,715,93.5z"/>         </g><text id="coin-num3" transform="matrix(1 0 0 1 651.4091 198.6873)" class="st3 st7 st8 st9">${cardNumbers[0]}</text>     </g>     <g id="coin2_00000172412396648369543650000015805727498319506869_">         <rect x="328.8" y="183.2" class="st3" width="226.5" height="9.1"/>         <g>             <circle class="st3" cx="442.8" cy="192.3" r="114"/>         </g>         <g>             <circle class="st4" cx="442.8" cy="183.2" r="114"/>         </g>         <g class="st5">             <path class="st6" d="M442.8,69.2c-42.2,0-79,22.9-98.7,57c19.7,34.1,56.5,57,98.7,57s79-22.9,98.7-57                 C521.8,92.1,485,69.2,442.8,69.2z"/>         </g>         <g>                              <ellipse transform="matrix(0.1602 -0.9871 0.9871 0.1602 191.0441 590.8658)" class="st4" cx="442.8" cy="183.2" rx="97.3" ry="97.3"/>             <path class="st3" d="M442.8,87.4c52.8,0,95.8,43,95.8,95.8s-43,95.8-95.8,95.8S347,236,347,183.2S390,87.4,442.8,87.4 M442.8,84.4                 c-54.5,0-98.8,44.3-98.8,98.8c0,54.5,44.3,98.8,98.8,98.8s98.8-44.3,98.8-98.8C541.6,128.7,497.2,84.4,442.8,84.4L442.8,84.4z"/>         </g>         <g>             <path class="st3" d="M442.8,93.5c52.9,0,96.3,41.9,98.7,94.2c0.1-1.5,0.1-3,0.1-4.6c0-54.5-44.3-98.8-98.8-98.8                 S344,128.7,344,183.2c0,1.5,0,3,0.1,4.6C346.5,135.4,389.8,93.5,442.8,93.5z"/>         </g>         <text id="coin-num2" transform="matrix(1 0 0 1 379.1471 198.6873)" class="st3 st7 st8 st9">${cardNumbers[1]}</text>     </g>     <g id="coin1">         <rect x="56.5" y="183.2" class="st3" width="226.5" height="9.1"/>         <g>             <circle class="st3" cx="170.5" cy="192.3" r="114"/>         </g>         <g>             <circle class="st4" cx="170.5" cy="183.2" r="114"/>         </g>         <g class="st5">             <path class="st6" d="M170.5,69.2c-42.2,0-79,22.9-98.7,57c19.7,34.1,56.5,57,98.7,57s79-22.9,98.7-57                 C249.5,92.1,212.7,69.2,170.5,69.2z"/>         </g>         <g>             <circle class="st4" cx="170.5" cy="183.2" r="97.3"/>             <path class="st3" d="M170.5,87.4c52.8,0,95.8,43,95.8,95.8s-43,95.8-95.8,95.8s-95.8-43-95.8-95.8S117.7,87.4,170.5,87.4                  M170.5,84.4c-54.5,0-98.8,44.3-98.8,98.8c0,54.5,44.3,98.8,98.8,98.8s98.8-44.3,98.8-98.8C269.3,128.7,225,84.4,170.5,84.4                 L170.5,84.4z"/>         </g>         <g>             <path class="st3" d="M170.5,93.5c52.9,0,96.3,41.9,98.7,94.2c0.1-1.5,0.1-3,0.1-4.6c0-54.5-44.3-98.8-98.8-98.8                 s-98.8,44.3-98.8,98.8c0,1.5,0,3,0.1,4.6C74.2,135.4,117.6,93.5,170.5,93.5z"/>         </g>         <text id="coin-num1" transform="matrix(1 0 0 1 106.8852 198.6873)" class="st3 st7 st8 st9">${cardNumbers[2]}</text>     </g>     </svg>`;
}

let prizeCard;

const ScratchableCard = (props) => {
    let scContainer = document.getElementById('js--sc--container')
    let scInfos = document.querySelector('.sc__infos');
    let sc;
    useEffect(() => {
        document.getElementById('js--sc--container').innerHTML = '';
        prizeCard = createPrizeCard(prizes, props.setResults);
        scContainer = document.getElementById('js--sc--container')
        scInfos = document.querySelector('.sc__infos');
        sc = new ScratchCard('#js--sc--container', {
            scratchType: SCRATCH_TYPE.BRUSH,
            containerWidth: scContainer.offsetWidth,
            containerHeight: scContainer.offsetWidth/2.53,
            brushSrc: brush,
            imageForwardSrc: couponCover,
            htmlBackground: `<div id="the_card">${prizeCard}</div>`,
            clearZoneRadius: 0,
            nPoints: 30,
            pointSize: 4,
        callback: function () {
            alert('Now the window will reload !')
            window.location.reload()
            }
        });

        function handleResize() {
            console.log('Triggering changeSize')
            document.getElementById('js--sc--container').innerHTML = '';
            sc = new ScratchCard('#js--sc--container', {
                scratchType: SCRATCH_TYPE.BRUSH,
                containerWidth: scContainer.offsetWidth,
                containerHeight: scContainer.offsetWidth/2.53,
                brushSrc: brush,
                imageForwardSrc: couponCover,
                htmlBackground: `<div id="the_card">${prizeCard}</div>`,
                clearZoneRadius: 0,
                nPoints: 30,
                pointSize: 4,
                callback: function () {
                  alert('Now the window will reload !')
                  window.location.reload()
                }
              });
              initScratchCard();
        }
        initScratchCard();
        window.addEventListener('resize', handleResize);

    function initScratchCard(){
        // Init
        sc.init().then(() => {
            sc.canvas.addEventListener('scratch.move', () => {
                let percent = sc.getPercent().toFixed(0);
                scInfos.innerHTML = percent + '%';
                console.log(percent)
            })

            //Clears the extra cards that get added on resizing after navigating to a different page........
            let extraCards= document.getElementsByClassName('sc__inner'); 
            console.log(extraCards);
            while(extraCards.length>1){
                extraCards[0].remove();
                extraCards= document.getElementsByClassName('sc__inner');
                    }


            })
                .catch((error) => {
                    alert(error.message);
                });
            }
    });
    
    return (
         <article className='the-scratch-card'>
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