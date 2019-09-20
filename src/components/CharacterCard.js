import React from "react";
import styled from 'styled-components';
import axios from 'axios';


export default function CharacterCard (props) {
  console.log(`Clist`,props)

  // const location = props.location.name;
  // const origin = props.origin.name;

  return (

    <div>
    
      <h2>{props.name}</h2>
      {/* <img src={props.image}/> */}
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
    </div>
    
  );
};


