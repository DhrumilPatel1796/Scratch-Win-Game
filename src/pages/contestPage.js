import '../styles.css';
// import ScratchCard from "../components/scratchCard";
import React from 'react';
import ContestHeader from '../components/contestHeader';
import scratchableCard from "../components/scratchableCard";
import Sponsors from '../components/sponsors';

const ContestPage = () => {
    return (
        <main>
            <ContestHeader />
            <h1>I am the contest page 😎</h1>
            <section id="scratchCardContainer">
                <scratchableCard></scratchableCard>
            </section>
    )
            <Sponsors />
        </main>
    );
}

export default ContestPage;
