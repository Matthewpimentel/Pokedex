import React, { useState, useEffect } from "react";
import { fetchPokemon } from '../services/pokemon';
const Search = () => {
    const [search, setSearch] = React.useState("");
    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getPokemon = async (query) => {
        setLoading(true);
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(response);
        setLoading(false);
        console.log(results);
    }

    return (
        <div>
             <h1>{search}</h1>
            <form>
                <input onChange={(e) => setSearch(e.target.value)} type="text" />
                <button type="button" onClick={(e) => getPokemon(search)}>Search</button>
            </form>
            
            </div>
            
               
    )
}

            export default Search



