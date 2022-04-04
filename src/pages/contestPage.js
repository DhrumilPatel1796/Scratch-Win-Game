import '../styles.css';
// import ScratchCard from "../components/scratchCard";
import React from 'react';
import ContestHeader from '../components/contestHeader';
import ScratchableCard from "../components/scratchableCard";
import Sponsors from '../components/sponsors';

const ContestPage = (props) => {
    // this.setWin(true);
    //     this.setPrize(34)
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
