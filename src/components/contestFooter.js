import { Link } from "react-router-dom";

import "../styles.css";

const ContestFooter = () => {
  return (
    <footer id="nav-buttons-footer" className="grid-container full">
      <div className="grid-x grid-padding-x footer">
        <div className="cell large-2 medium-4 small-12">
          <Link to="/legal">
            <input type="button" value="Terms and Conditions"></input>
          </Link>
        </div>

        <div className="cell large-2 medium-4 small-12">
          <Link to="/form">
            <input type="button" value="Sign Up" id=""></input>
          </Link>
        </div>

        <div className="cell large-offset-5 medium-2 small-12">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default ContestFooter;
