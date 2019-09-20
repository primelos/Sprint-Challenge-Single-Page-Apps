import React from "react";
import CharacterList from "./CharacterList";
import { Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="ui centered">
        
        <div>
          <Link to="/">Welcome</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/search">Search</Link>
        </div>
        <Link to={"/"}>
          <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        </Link>
      </header>
      <CharacterList />
    </div>
  );
}
