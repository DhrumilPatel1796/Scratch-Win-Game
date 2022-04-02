import '../styles.css';
import ScratchCard from "../components/scratchCard";
import React from 'react';
import ContestHeader from '../components/contestHeader';
import Sponsors from '../components/sponsors';

const ContestPage = () => {
    return (
        <main>
            <ContestHeader />
            <h1>I am the contest page 😎</h1>
            <ScratchCard />
            <Sponsors />
        </main>
    );
}

export default ContestPage;
