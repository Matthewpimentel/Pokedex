import React, { useState, useEffect } from "react";
import { getAllItem, getItem } from "../services/pokemon"
import ItemCard from "./ItemCard";
import Pokeball from "../images/pokeball.gif"

function Items() {
  const [itemData, setItemData] = useState([])
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const itemsUrl = "https://pokeapi.co/api/v2/item"

  useEffect(() => {
    async function fetchData() {
      let response = await getAllItem(itemsUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingItem(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllItem(nextUrl);
    await loadingItem(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) {
      return
    }
    setLoading(true);
    let data = await getAllItem(prevUrl);
    await loadingItem(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingItem = async (data) => {
    let _itemData = await Promise.all(data.map(async item => {
      let itemRecord = await getItem(item.url);
      return itemRecord
    }))

    setItemData(_itemData)
  }

  return (
    <div id="all-items">
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
              {itemData.map((item, i) => {
                return <ItemCard key={i} item={item} />
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
export default Items;