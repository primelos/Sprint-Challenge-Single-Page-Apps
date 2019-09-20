import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom"

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
  
      <Route exact path='/' component={WelcomePage}/>
      <Route  path='/characters' component={CharacterList}/>
      
    </main>
  );
}
