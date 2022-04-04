import '../styles.css';
import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from 'react';
// import ScratchCard from "../components/scratchCard";
import ContestHeader from '../components/contestHeader';
import ScratchableCard from "../components/scratchableCard";
import Sponsors from '../components/sponsors';

const ContestPage = (props) => {
    let [canPlay, setCanPlay] = useState(true);
    let [remainingHours, setRemainingHours] = useState(100);
    let navigate = useNavigate();
    useEffect(() => {
        console.log(props.user);
        if(props.user===0){
            navigate("/form", { replace: true });
        }
        //Calculate hours elapsed since last time....
        let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
        let remaining = 72 - hours;
        let days = Math.floor(remaining/24);
        let hms = new Date(remaining * 3600 * 1000).toISOString().substr(11, 8)
        setRemainingHours(`${days} days ${hms}`);
        if (hours<72){
            setCanPlay(false);
        }
    });

    return (
        <main>
            <ContestHeader />
            <section id="scratchCardContainer">
            {canPlay
                ? <ScratchableCard setResults={props.setResults} setWin={props.setWin} setPrize={props.setPrize}></ScratchableCard>
                :<h2>Ooops, please wait {remainingHours} before playing again</h2>
            }
            </section>
            <Sponsors />
        </main>
    );
}

export default ContestPage;
