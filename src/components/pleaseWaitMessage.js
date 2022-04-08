import '../styles.css';
import React, { useCallback, useState, useEffect, useRef } from 'react';

const PleaseWaitMessage = (props) => {
    let [remainingHours, setRemainingHours] = useState('2 days 23:59:59');

    let dateIsValid = function(date) {
        return !Number.isNaN(new Date(date).getTime());
    }

    useEffect(() => {
        let tick =setInterval(()=>{
            let hours = Math.abs(new Date(props.lastPlayed) - new Date()) / 36e5;
            let remaining = 72 - hours;
            let days = Math.floor(remaining/24);
            let timeToWait = remaining * 3600 * 1000;
            let hms = '23:59:59';
            if (dateIsValid(timeToWait)) {
                hms = new Date(timeToWait).toISOString().substr(11, 8)
            }
            setRemainingHours(`${days} days ${hms}`);
        },1000);
        return () => {
            clearTimeout(tick);
          }
    });



    return (
        <article className='user-lost cell large-6'>
            <h2 id='timerText'>Ooops, please wait {remainingHours} before playing again</h2>
        </article>
    )
};

export default PleaseWaitMessage;