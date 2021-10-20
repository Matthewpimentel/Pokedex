import './App.css';
import React, {useState, useEffect} from "react";
import AllPokemon from "./components/AllPokemon"
import Items from './components/Items';

const App = () => {

  

  const showallPokemon = () => {
    document.getElementById("all-items").style.display = "none";
    document.getElementById("all-pokemon").style.display = "block";
  }

  const toggleShowItems = () => {
    document.getElementById("all-pokemon").style.display = "none";
    document.getElementById("all-items").style.display = "block";
  }


  return (
    <div>
      <button className="all-pokemon" onClick={() => {showallPokemon()}}>All Pokemon</button>
      <button className="all-items" onClick={toggleShowItems}>All Items</button>   
      <AllPokemon />
      <Items />
      </div>
  );
}

export default App;
