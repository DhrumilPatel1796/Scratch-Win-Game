import "../styles.css";

const ScratchDetailsCard = () => {
  return (
    <div className="scratch-win-box-card">
      <h2>Scratch and Win</h2>
      <p>
        For this year's contest, we have teamed up with some of your favourite
        restaurants. With BuyMore Dollars you win your way to free meals on us!
      </p>
      <Link to="/contest">
        <input
          type="button"
          value="Play To Win"
          id="play"
          className="button"
        ></input>
      </Link>
      <p id="fine-print">*Terms and Conditions Apply</p>
      <h3>Come back every 72 hours to play</h3>
    </div>
  );
};

export default ScratchDetailsCard;
