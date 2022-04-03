import '../styles.css';
import Sponsors from '../components/sponsors';
import PlayToWinBtn from '../components/playToWinBtn';
import ContestFooter from '../components/contestFooter';

import { ReactComponent as NeonSqiggle } from '../images/svg/neon-sqiggle.svg'
import { ReactComponent as NeonCoin } from '../images/svg/neon-coin.svg'
import { ReactComponent as NeonCube } from '../images/svg/neon-cube.svg'
import { ReactComponent as NeonHfcircle } from '../images/svg/neon-hfcircle.svg'
import { ReactComponent as NeonMoney } from '../images/svg/neon-money.svg'
const LegalPage = () => {
    return (
        <main>
            <section className="grid-x grid-padding-x">

                <article className='cell large-2 medium-2 small-2'><NeonSqiggle /></article>
                <article className='cell large-1 medium-1 small-1'><NeonCoin /></article>
                <article className='cell large-2 medium-2 small-2'><NeonCube /></article>
                <article className='cell large-1 medium-1 small-1'><NeonHfcircle /></article>
                <article className='cell large-2 medium-2 small-2'><NeonMoney /></article>
                <article className='cell large-2 medium-2 small-2'><NeonCube /></article>
                <article className='cell large-1 medium-1 small-1'><NeonHfcircle /></article>
                
                <article className='cell large-1 medium-1 small-1'></article>
                <article className='cell large-9 medium-9 small-12'>
                <h2>Terms and Conditions</h2>
                <h3>Sample giveaway terms:</h3>
                <cite>
                        <a href='https://mamanloupsden.com/sample-contest-terms-for-giveaways-open-to-canada-andor-us/'>Legal sample source</a>
                    </cite><br/>
                    <p>
                        CONTEST (“CONTEST”) SPONSORED BY BuyMore Dollars (“SPONSOR”) AND
                        ADMINISTERED BY BuyMore Dollars. (“ADMINISTRATOR”). CONTEST BEGINS ON
                        Feb. 1st, 2022 AT 12:01 am AND ENDS ON Feb 22, 2022 AT 11:59 pm. (“CONTEST
                        PERIOD”). **specify time zone**<br/>
                        NO PURCHASE NECESSARY TO ENTER OR WIN. ONLY AN EMAIL ADDRESS is
                        required. By participating, entrants agree to be bound by these Official Rules
                        and the decisions of the Sponsor and Administrator. Void where prohibited by
                        law.<br/>
                        Contest is open to legal residents of Ontario who have reached 16 yeas of age,
                        but not older then 20 at the time of entry. Employees or contractors of the
                        Sponsor(s) and immediate family members of, and any persons domiciled with
                        any such employees or contractors, are not eligible to enter.<br/>
                        Administrators are not responsible for prize fulfillment nor for any technical failures.
                        Winning entry will be verified. A list of winners will be displayed on the giveaway
                        widget on the original contest post.<br/>
                        Residents of Canada will be required to enter a skill-testing question to claim their
                        prize.<br/>
                        Contact information for sponsor(s), if applicable, can be found in the contest text
                        via website links. Retail value of prizes is listed in the contest text.
                        Images included in the giveaway post may not depict the exact prize, and are
                        for illustrative purposes only.<br/>
                        Please contact contest@buymoredollars.ca for any questions.
                    </p>
                    <h3>Gameplay</h3>
                    <ul>
                        <li>Press the "Play to Win" button and fill out the sign up information.</li>
                        <li>Once registered, click or press if on mobile and drag over the scratch card surface to reveal your prize.</li>
                        <li>After scratching, your BuyMore Dolaars will be added to your account. You can play once ever 72 hours. <i>* subject to terms and conditions.</i></li>
                    </ul>
                    <h3>Prizes</h3>
                    <ul>
                        <li>1 prize of 10,000 BuyMore Dollars.</li>
                        <li>5 prizes of 750 BuyMore Dollars.</li>
                        <li>10 prizes of 100 BuyMore Dollars.</li>
                        <li>100 prizes of 20 BuyMore Dollars.</li>
                    </ul>
                <Sponsors />
                <article className='playBtn-legal'> 
                    <PlayToWinBtn/>
                </article>
                </article>
                <article className='cell large-1 medium-1 small-1'></article>
            </section>
            <ContestFooter />
        </main>
    );
}

export default LegalPage;
