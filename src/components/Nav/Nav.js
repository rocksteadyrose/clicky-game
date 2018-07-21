import React from "react";
import "./Nav.css";


const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">


    <div className="header" id="navbartitle">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item centernavitem">
        {props.update} <span className="sr-only">(current)</span>
        </li>
        <li className="nav-item">
          Score: <span className="countScore">{props.score}</span> | Top Score: <span className="countTopScore"> {props.highScore}</span>
          </li>
          <li className="nav-item">
         <span className="scoreMessage">{props.scoreMessage}</span>
          </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
