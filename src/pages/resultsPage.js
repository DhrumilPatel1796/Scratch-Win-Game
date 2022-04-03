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
            <main className="grid-x grid-padding-x">
                <section className='cell large-10 medium-10 small-12'>   
                    <ContestHeader />
                    <ScratchCard />
                    <article className="grid-x grid-padding-x">
                        {didUserWin
                            ? <UserWon />
                            : <UserLost />
                        }
                    </article>
                    <Sponsors />
                </section>
            </main>
        );
    }
}

export default ResultsPage;
