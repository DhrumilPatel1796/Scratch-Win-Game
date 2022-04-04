import '../styles.css';
import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from 'react';
// import ScratchCard from "../components/scratchCard";
import ContestHeader from '../components/contestHeader';
import ScratchableCard from "../components/scratchableCard";
import Sponsors from '../components/sponsors';

const ContestPage = (props) => {
    const [canPlay, setCanPlay] = useState(true);
    let remainingHours = 100;
    let navigate = useNavigate();
    useEffect(() => {
        console.log(props.user);
        if(props.user===0){
            navigate("/form", { replace: true });
        }
        //Calculate hours elapsed since last time....
        let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
        remainingHours = 72 - hours;
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
