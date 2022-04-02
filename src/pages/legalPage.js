import '../styles.css';
import ContestHeader from '../components/contestHeader';
import Sponsors from '../components/sponsors';
import PlayToWinBtn from '../components/playToWinBtn';
import ContestFooter from '../components/contestFooter';

const LegalPage = () => {
    return (
        <main>
            <ContestHeader />
            <section className=''>
                <h1>I am the legal page 🤐</h1>
                <h1>Terms and Conditions</h1>
                <article>
                <h2>Sample giveaway terms:</h2>
                <cite>
                    <a href='https://mamanloupsden.com/sample-contest-terms-for-giveaways-open-to-canada-andor-us/'>Legal sample source</a>
                </cite>
                <p>CONTEST (“CONTEST”) SPONSORED BY BuyMore Dollars (“SPONSOR”) AND
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
Please contact contest@buymoredollars.ca for any questions.</p>
                </article>

                <article>
                    <h2>Gameplay</h2>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                </article>

                <article>
                    <h2>Prizes</h2>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                </article>
                    <Sponsors />
                    <PlayToWinBtn />
            </section>
            <ContestFooter />
        </main>
    );
}

export default LegalPage;
