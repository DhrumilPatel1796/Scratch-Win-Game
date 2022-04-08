import '../styles.css';
import { useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect, useRef } from 'react';
import ContestHeader from '../components/contestHeader';
import ScratchableCard from "../components/scratchableCard";
import PleaseWaitMessage from "../components/pleaseWaitMessage";
import Sponsors from '../components/sponsors';

const ContestPage = (props) => {
    let [canPlay, setCanPlay] = useState(false);
    let [hasWaited, setHasWaited] = useState(true);

    let navigate = useNavigate();
    useEffect(() => {
        if(props.user===0){
            setCanPlay(false); //Change back to false when done styling
            navigate("/form", { replace: true }); //Uncoment this when done styling
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
        }
    });

    return (
        <main className="grid-x grid-padding-x">
            {canPlay && hasWaited? 
                <div className="cell large-10 medium-10 small-12">
                    <ContestHeader />
                    <section id="scratchCardContainer">
                            <h3> Congratulations {props.user["firstName"] ? props.user["firstName"]: ""}. You are one step away from something awesome.</h3>
                            <ScratchableCard user={props.user} setUser={props.setUser} setResults={props.setResults} setWin={props.setWin} setPrize={props.setPrize}></ScratchableCard>
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
