import './App.css';
import React, {useState, useEffect} from "react";
import AllPokemon from "./components/AllPokemon"
import Items from './components/Items';
import Nav from './components/Nav';
import Search from './components/Search';
const App = () => {

  return (
    <div>
      <Nav />
      <AllPokemon />
      <Items />
      <Search />
      </div>
  );
}

export default App;
