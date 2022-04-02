import '../styles.css';
import ScratchCard from "../components/scratchCard";
import React from 'react';
import UserWon from "../components/userWon";
import UserLost from "../components/userLost";
import ContestHeader from '../components/contestHeader';
import Sponsors from '../components/sponsors';

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            win: false
        };
    }

    render() {
        const didUserWin = this.state.win;
        return (
            <main>
                <ContestHeader />
                <h1>I am the results page 🥳</h1>
                <ScratchCard />
                {didUserWin
                    ? <UserWon />
                    : <UserLost />
                }
                <Sponsors />
            </main>
        );
    }
}

export default ResultsPage;
