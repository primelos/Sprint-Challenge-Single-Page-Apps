import React from "react";


const CharacterCard = (props) => {
  return (

    <div>
      <h2>{props.name}</h2>
      <img src={props.image}/>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
    </div>
    
  );
};

export default CharacterCard;
