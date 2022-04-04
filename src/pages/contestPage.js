import '../styles.css';
import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect } from 'react';
// import ScratchCard from "../components/scratchCard";
import ContestHeader from '../components/contestHeader';
import ScratchableCard from "../components/scratchableCard";
import Sponsors from '../components/sponsors';

const ContestPage = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        console.log(props.user);
        if(props.user===0){
            navigate("/form", { replace: true });
        }
        //Calculate hours elapsed since last time....
        let hours = Math.abs(props.user['lastParticipated'] - new Date()) / 36e5;
        console.log(hours);
    });

    return (
        <main>
            <ContestHeader />
            <section id="scratchCardContainer">
                <ScratchableCard setResults={props.setResults} setWin={props.setWin} setPrize={props.setPrize}></ScratchableCard>
            </section>
            <Sponsors />
        </main>
    );
}

export default ContestPage;
