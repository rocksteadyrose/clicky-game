import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
      <div className="img-container" onClick={() => props.clickCharacter(props.id)} className="move">
        <img alt={props.name} src={props.image} />
      </div>
  </div>
);

export default CharacterCard;
