import "../styles.css";
import coingroup from "../images/svg/coin-group.svg";

const PrizesWinCard = () => {
  return (
    <div className="prizes-box-card">
      <div className="grid-x grid-padding-x">
        <div className="large-12 medium-12 small-12 cell">
          <h2>BMD Prizes</h2>
        </div>
        <div className="large-7 medium-6 small-6 cell prizes-coin">
          <img src={coingroup} alt="group of coins" className="coingroup" />
        </div>
        <div className="large-5 medium-6 small-6 cell ">
          <div className="prizes-list align-right">
            <div className="prize-info">
              <h3>10,000 BMDs</h3>
              <p>1 prize</p>
            </div>
            <div className="prize-info">
              <h3>750 BMDs</h3>
              <p>5 prizes</p>
            </div>
            <div className="prize-info">
              {" "}
              <h3>100 BMDs</h3>
              <p>10 prizes</p>
            </div>
            <div className="prize-info">
              {" "}
              <h3>20 BMDs</h3>
              <p>100 prizes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesWinCard;
