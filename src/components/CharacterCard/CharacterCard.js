import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card"
    value={props.id} 
    onClick={() => props.click(props.id)} className="moveCard">
        <img alt={props.name} src={props.image} />
      </div>
);

export default CharacterCard;
