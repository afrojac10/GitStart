import React from "react";
import logo from "../logo.png";
import { Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
export default function Header() {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    // var instances = M.Sidenav.init(elems, {});
  });
  return (
    <div>
      <nav className="logo" role="navigation">
        <div className="nav-wrapper container">
          <Fragment>
            <a id="logo-container" href="l.com" className="brand-logo">
              <img src={logo} alt="GitStart-Logo" className="logoImg mLogo" />
            </a>
          </Fragment>
          <Fragment>
            <div className="flex">
              <ul className="right hide-on-med-and-down">
                <li>
                  <div className="back search">
                    <i className="fas fa-search"></i>
                    <br />
                    <form action="">
                      <input
                        type="text"
                        placeholder="Search people & places"
                        className="searchHeader
                      "
                      ></input>
                    </form>
                  </div>
                </li>
                <li>
                  <div className="back">
                    <i className="fas fa-lock"></i>
                    <p className="trailText">TRAIL EXPIRED</p>
                  </div>
                </li>
                <li>
                  <div className="matIcon">
                    <i className="material-icons">group</i>
                  </div>
                </li>
                <li>
                  <div className="matIcon">
                    <i className="material-icons">notifications_none</i>
                  </div>
                </li>
                <li>
                  <div className="back1">
                    <i className="material-icons">exit_to_app</i>
                    <p className="trailText signOut">SIGN OUT</p>
                  </div>
                </li>
              </ul>

              <ul id="nav-mobile" className="sidenav">
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
            </div>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons burgerMenu">menu</i>
          </a>
          </Fragment>
        </div>
      </nav>
    </div>
  );
}
