import React from "react";

import './CardsTeam.css';
import CardTeam from "../CardTeam";

const CardsTeam = (props) => {

 const {data} = props
 const cards = [];

 data.map(item=>{
   const {id, image,nome,github,linkedin} = item;

   return cards.push( <CardTeam key={id} image = {image} nome = {nome} github = {github} linkedin = {linkedin}></CardTeam>)
 })



  return (
    <div>
      {cards}
    </div>

  );
}

export default CardsTeam;

