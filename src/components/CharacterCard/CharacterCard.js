import React from "react";
import "./CharacterCard.css";

  const CharacterCard = props => (
  <div className={`card hover div ${props.shakiness ? " shakiness" : ""}`}
    value={props.id}
    onClick={() => props.click(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;
