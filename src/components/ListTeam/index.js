import React from "react";

import './ListTeam.css';
import CardsTeam from '../CardsTeam'

const ListTeam = (props) => {

  return (
    <div>
        <h3 className = "article-container-team-header">{props.title}</h3>
        <br></br>
        <ul className="article-container-team-lista">
            <CardsTeam data = {props.data}></CardsTeam>
        </ul>
    </div>

  );
}

export default ListTeam;

