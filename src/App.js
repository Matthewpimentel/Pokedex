import './App.css';
import React, {useState, useEffect} from "react";
import { getAllPokemon, getPokemon, getHabitats, getHabitat } from "./services/pokemon"
import Card from "./components/Card"
function App() {
  const [pokemonData, setPokemonData] = useState( [] )
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon"
  const habitatUrl = "https://pokeapi.co/api/v2/pokemon-habitat"

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
  
  const loadHabitats = async () => {
    let response = await getHabitats(habitatUrl);
    loadingHabitats(response.results);
    setLoading(false);
    console.log(response);
  }
  const loadingHabitats = async(data) => {
    let _HabitatData = await Promise.all(data.map(async habitat => {
      let habitatRecord = await getHabitat(habitat.url);
      return habitatRecord
    }))
  }

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : (
        <>
        <button onClick={loadHabitats}>load</button>
        <div className="btn">
          <button onClick={prev}>Previous</button>
          <button onClick={next}>Next</button>
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

export default App;
