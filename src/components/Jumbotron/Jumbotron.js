import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron">      
    <div className="title">{props.title}</div>
    <div className="header">{props.header}</div>
</div>
);

export default Jumbotron;
