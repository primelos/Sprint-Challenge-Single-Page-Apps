import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState ([])

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      const charData = response.data.results
      console.log(charData)
    })
    .catch(error =>{
      console.log(`ERROR`, error)
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(`char`, char)

  return (
    <section className="character-list">
      {char.map(item => {
        return (
          <CharacterCard 
          key={item.id}
          name={item.name}
          gender={item.gender}
          image={item.image}
          species={item.species}
          />
        )
      })}
      
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}
