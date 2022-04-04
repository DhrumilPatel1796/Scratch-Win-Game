import '../styles.css';
import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect, useRef } from 'react';
// import ScratchCard from "../components/scratchCard";
import ContestHeader from '../components/contestHeader';
import ScratchableCard from "../components/scratchableCard";
import PleaseWaitMessage from "../components/pleaseWaitMessage";
import Sponsors from '../components/sponsors';

const ContestPage = (props) => {
    let [canPlay, setCanPlay] = useState(false);
    let [hasWaited, setHasWaited] = useState(true);

    let navigate = useNavigate();
    useEffect(() => {
        console.log(props.user);
        if(props.user===0){
            setCanPlay(false);
            navigate("/form", { replace: true });
        }
        else{
                setCanPlay(true);
                let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
                if (hours<72){
                    setHasWaited(false);
                }
                else{
                    setHasWaited(true);
                }
            // let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
            // let remaining = 72 - hours;
            // let days = Math.floor(remaining/24);
            // let hms = new Date(remaining * 3600 * 1000).toISOString().substr(11, 8)
            // setRemainingHours(`${days} days ${hms}`);
            // if (hours<72){
            //     setCanPlay(false);
            // }
        }
       
        // let tick =setInterval(()=>{
        //     let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
        //     let remaining = 72 - hours;
        //     let days = Math.floor(remaining/24);
        //     let hms = new Date(remaining * 3600 * 1000).toISOString().substr(11, 8)
        //     setRemainingHours(`${days} days ${hms}`);
        //     if (hours<72){
        //         setCanPlay(false);
        //     }
        // },1000);
        //Calculate hours elapsed since last time....
        
    });

    return (
        <main>
            {canPlay? 
                <div>
                    <ContestHeader />
                    <section id="scratchCardContainer">
                            <ScratchableCard setResults={props.setResults} setWin={props.setWin} setPrize={props.setPrize}></ScratchableCard>
                            {/* :<PleaseWaitMessage lastPlayed={props.user['lastParticipated']}></PleaseWaitMessage> */}
                    </section>
                    <Sponsors />
                </div>
                :  hasWaited?
                    <div id="placeholderTallDiv"></div>
                    :<PleaseWaitMessage lastPlayed={props.user['lastParticipated']}></PleaseWaitMessage>
                }


                
        </main>
    );
}

export default ContestPage;
