import '../App.css';
import React, {useState, useEffect} from "react";
import { getAllPokemon, getPokemon } from "../services/pokemon"
import Card from './Card';
import Pokeball from "../images/pokeball.gif"

function AllPokemon () {

const [pokemonData, setPokemonData] = useState( [] )
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon"


  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(pokemonUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);
  

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if(!prevUrl){
      return
    }
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async(data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData)
  }
  
 

  return (
    <div id="all-pokemon">
      {loading ? 
      <div className="loading">
        <h1>Loading...</h1> 
        <img src={Pokeball} width="250"></img>
      </div>
      
      : (
        <>
        <div className="btn">
        </div>
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}/>
            })}
          </div>
          <div className="btn">
          <button onClick={prev}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
        </>
      )}
    </div>
  );
}


export default AllPokemon;