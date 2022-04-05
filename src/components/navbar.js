import { Outlet, Link } from "react-router-dom";
const navbar = () => {
  const contestPageLink = { 
    pathname: "/contest", 
    stringTest: "Hello from parent" 
  };
  return (
    <>

      <div className="title-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
  <button className="menu-icon" type="button" data-toggle=""></button>
  <div className="title-bar-title">
    <Link to="/">
      <img
        className="bmd-logo"
        src={require("../images/png/logo.png")}
      />
    </Link>
  </div>
</div>

<div className="top-bar" id="example-animated-menu" data-animate="hinge-in-from-top spin-out">
  <div className="top-bar-left">
  <Link to="/">
      <img
        className="bmd-logo hide-for-medium-only hide-for-small-only"
        src={require("../images/png/logo.png")}
      />
    </Link>
  <nav id="nav-buttons">
    <Link to="/form">
      <input type="button" value="Sign Up" id=""></input>
    </Link>
    <Link to="/legal">
      <input type="button" value="Terms and Conditions" id=""></input>
    </Link>
    <Link to="/results">
      <input type="button" value="Results" id=""></input>
    </Link>
    <Link to={contestPageLink}>
      <input
        type="button"
        value="Play To Win"
        id="play"
        className="button"
      ></input>
    </Link>
  </nav>
  </div>
</div>

      <Outlet />
    </>
  );
};

export default navbar;

      {/* <header className="grid-container">
        <div className="grid-x grid-padding-x header-bar">
          <div className="large-3 medium-3 small-3 cell">
            
          </div>
          <div className="large-9 medium-9 small-9">
            <nav id="nav-buttons">
              


              
            </nav>
          </div>
        </div>
      </header> */}
