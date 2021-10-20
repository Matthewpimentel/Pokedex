import React from 'react'
import '../App.css';
const ItemCard = ( {item} ) => {
    return (
        <div className="all-items">
            <div className="Card">
            <div className="Card__img">
                <img src={item.sprites.default} alt="" />
            </div>
            <div className="Card__name">
                {item.name}
            </div>
            <div className="Card__data Card__data--cost">
                    <p className="title">Cost</p>
                    <p>{item.cost}</p>
                </div>
            <div className="Card__info">
                <div className="Card__data Card__data--description">
                    <p className="title">Effect</p>
                    <p>{item.effect_entries[0].effect}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemCard
