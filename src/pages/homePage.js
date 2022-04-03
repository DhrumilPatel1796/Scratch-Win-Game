import "../styles.css";
import moneybag from "../images/svg/money-bag.svg";
import coingroup from "../images/svg/coin-group.svg";
import formicon from "../images/svg/icon-form.svg";
import ticketicon from "../images/svg/icon-ticket.svg";
import trophyicon from "../images/svg/icon-trophy.svg";
import freshkicks from "../images/png/logo-fresh-kicks.png";
import glorbotronic from "../images/png/logo-glorbotronic-burgers.png";
import rcoas from "../images/png/logo-raw-cabbage-on-a-stick-hut.png";
import tacosuperstore from "../images/png/logo-taco-superstore.png";

const HomePage = () => {
  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="large-6 cell align-self-middle margin-top-2">
          <h1>We've Got Your Lunch Covered</h1>
          <p>
            Back again for another year, BuyMore Dollars has got your back with
            our scratch and win contest!
          </p>
          <a href="#" className="button">
            Play to Win
          </a>
        </div>
        <div className="large-6 cell">
          <img src={moneybag} alt="bag of money" />
        </div>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="large-6 medium-6 small-12 cell">
          <div className="scratch-win-box-card">
            <h2>Scratch and Win</h2>
            <p>
              For this years contest, we hace teamed up with some of your
              favourite restaurants! With BuyMore Dollars you win your wat to
              free meals on us
            </p>
            <a href="#" className="button">
              Play to Win
            </a>
            <p id="fine-print">*Terms and Conditions Apply</p>
            <h3>Come back every 72 hours to play</h3>
          </div>
        </div>

        <div className="large-6 medium-6 small-12 cell ">
          <div className="prizes-box-card">
            <div className="grid-x grid-padding-x">
              <div className="large-6 medium-6 small-12 cell">
                <h2>BMD Prizes</h2>
                <img src={coingroup} alt="group of coins" />
              </div>
              <div className="large-6 medium-6 small-12 cell ">
                <div className="prizes-list align-right">
                  <h3>10,000 BMDs</h3>
                  <p>1 prize</p>
                  <h3>750 BMDs</h3>
                  <p>5 prizes</p>
                  <h3>100 BMDs</h3>
                  <p>10 prizes</p>
                  <h3>20 BMDs</h3>
                  <p>100 prizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="large-4 medium-4 small-12 cell">
          <div className="rules-box-card">
            <img src={formicon} alt="icon from" />
            <h3>Register</h3>
            <p>Hit play to win and fill out the sign up info</p>
          </div>
        </div>

        <div className="large-4 medium-4 small-12 cell">
          <div className="rules-box-card">
            <img src={ticketicon} alt="icon ticket" />
            <h3>Scratch and Play</h3>
            <p>
              Once registered, click and drag the scratch area to reveal your
              prize
            </p>
          </div>
        </div>

        <div className="large-4 medium-4 small-12 cell">
          <div className="rules-box-card">
            <img src={trophyicon} alt="icon trophy" />
            <h3>Claim Your Prize</h3>
            <p>
              After scratching, your BuyMore Dollars will be added to your
              account. You can play once every 72 hours
            </p>
          </div>
        </div>
      </div>

      <div className="grid-x grid-padding-x align-center">
        <div className="large-12 medium-12 small-12 cell">
          <a href="#" className="button">
            Play to Win
          </a>
        </div>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="large-12 medium-12 small-12 cell">
          <div className="sponsors-box-card">
            <h3>Check Out Our Sponsors</h3>
            <img src={tacosuperstore} alt="Taco Superstore logo" />
            <img src={glorbotronic} alt="Glorbotronic logo" />
            <img src={rcoas} alt="Raw Cabbage on a Stick logo" />
            <img src={freshkicks} alt="Fresh Kicks logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
