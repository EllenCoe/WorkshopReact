import React from "react";

import './CardTeam.css';

const CardTeam = (props) => {


const image = require("../../assets/images/" + props.image);
  
  return (
    <li key={props} className="article-container-team-image">
        <img src = {image} alt="nome"/>
        <br></br>
        <span>{props.nome}</span>
        <br></br>
        <span>{props.github}</span>
        <br></br>
        <span>{props.linkedin}</span>
    </li>
  );
}

export default CardTeam;

