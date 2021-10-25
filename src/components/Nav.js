import React from 'react'
const Nav = () => {


    const showallPokemon = () => {
        document.getElementById("all-items").style.display = "none";
        document.getElementById("all-pokemon").style.display = "block";
      }
    
      const toggleShowItems = () => {
        document.getElementById("all-pokemon").style.display = "none";
        document.getElementById("all-items").style.display = "block";
      }

    return (
        <div className="nav">
            <ul>
                <li><a className="all-pokemon" onClick={() => {showallPokemon()}}>All Pokemon</a></li>
                <li><a className="all-items" onClick={toggleShowItems}>All Items</a></li>
            </ul>
        </div>
    )
}

export default Nav
