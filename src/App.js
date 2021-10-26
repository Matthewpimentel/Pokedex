import './App.css';
import React, {useState, useEffect} from "react";
import AllPokemon from "./components/AllPokemon"
import Items from './components/Items';
import Nav from './components/Nav';
const App = () => {

  return (
    <div>
      <Nav />
      <AllPokemon />
      <Items />
      </div>
  );
}

export default App;
