import React from "react";
import "./Nav.css";


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Clicky Game
      </a>


    <div className="header" id="navbartitle">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item centernavitem">
            Click an image to begin! <span className="sr-only">(current)</span>
        </li>
        <li className="nav-item">
          Score: <span class="countScore">0</span> | Top Score: <span class="countTopScore">0</span>
          </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
