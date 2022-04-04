import '../styles.css';
import React, { useCallback, useState, useEffect, useRef } from 'react';

const PleaseWaitMessage = (props) => {
    let [remainingHours, setRemainingHours] = useState(100);
    useEffect(() => {
        let tick =setInterval(()=>{
            let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
            let remaining = 72 - hours;
            let days = Math.floor(remaining/24);
            let hms = new Date(remaining * 3600 * 1000).toISOString().substr(11, 8)
            setRemainingHours(`${days} days ${hms}`);
        },1000);
    });



    return (
        <article className='user-lost cell large-6'>
            <h2>Ooops, please wait {remainingHours} before playing again</h2>
        </article>
    )
};

export default PleaseWaitMessage;