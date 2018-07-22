import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="header" id="navbartitle">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item name">
          <span className="name">Zootopia Clicky Game!</span>
        </li>
        <li className="nav-item centernavitem updateMessage">
          <div className="message">
            {/* <span className="sr-only">(current)</span> */}
          </div>
        </li>
        <li className="nav-item">
          <div className="Messages">
            <span className="update">{props.update}</span>
            <span className="correctMessage">{props.correctMessage}</span>
            <span className="incorrectMessage">{props.incorrectMessage}</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="scores">
            Score: <span className="countScore">{props.score}</span> | Top Score: <span className="countTopScore"> {props.highScore}</span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
