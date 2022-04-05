import { Outlet, Link } from "react-router-dom";
import React, { useCallback, useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const contestPageLink = { 
    pathname: "/contest", 
    stringTest: "Hello from parent" 
  };
  const [toggleMenu, setToggleMenu] = useState(true);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        }
  return (
    <>
    <main className="grid-x grid-padding-x">
      <div className="cell large-10 medium-10 small-12">
        <div className="title-bar" data-responsive-toggle="example-animated-menu">
              <button className="menu-icon" type="button" onClick={toggleNav} data-toggle="" data-hide-for="medium"></button>
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
        {(toggleMenu) && (
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