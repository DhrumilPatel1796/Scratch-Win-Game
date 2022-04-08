import { Outlet, Link,  useNavigate } from "react-router-dom";
import React, { useCallback, useState, useEffect, useRef } from "react";

const Navbar = (props) => {
  let logoutBttn;
  const contestPageLink = {
    pathname: "/contest",
    stringTest: "Hello from parent",
  };
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const navigate = useNavigate();
  let logout = function(){
    //Reset user.
    props.setUser(0);
    //Redirect home.
    navigate("/", { replace: true });
  }
  let initNav = function () {
    if(document.querySelector("#logout-bttn")){
      logoutBttn = document.querySelector("#logout-bttn");
      logoutBttn.addEventListener("click", logout);
    }
  }
  useEffect(() => {
    initNav();
  });
  return (
    <>
      <main className="grid-container navbar">
        <div className="cell large-11 medium-11 small-12">
          <div
            className="title-bar"
            data-responsive-toggle="example-animated-menu"
          >
            <button
              className="menu-icon"
              type="button"
              onClick={toggleNav}
              data-toggle=""
              data-hide-for="medium"
            ></button>
            <div className="title-bar-title">
              <Link to="/">
                <img
                  className="bmd-logo"
                  src={require("../images/png/logo.png")}
                />
              </Link>
            </div>
          </div>
          <div
            className="top-bar"
            id="example-animated-menu"
            data-animate="hinge-in-from-top spin-out"
          >
            <div className="top-bar-left">
              <Link to="/">
                <img
                  className="bmd-logo hide-for-small-only"
                  src={require("../images/png/logo.png")}
                />
              </Link>
              {toggleMenu && (
                <nav id="nav-buttons">
                  <Link to="/login">
                    {props.user === 0 ? <input type="button" value="Login" id=""></input>:""}
                  </Link>
                  <Link to="/form">
                    {props.user === 0 ?  <input type="button" value="Sign Up" id=""></input>:""}
                  </Link>
                  <Link to="/legal">
                    <input
                      type="button"
                      value="Terms and Conditions"
                      id=""
                    ></input>
                  </Link>
                  {/* <Link to="/results">
                    <input type="button" value="Results" id=""></input>
                  </Link> */}
                  {props.user !== 0 ?  <input type="button" value="Logout" id="logout-bttn"></input>:""}
                  <Link to={contestPageLink}>
                    <input
                      type="button"
                      value="Play To Win"
                      id="play"
                      className="button"
                    ></input>
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default Navbar;
