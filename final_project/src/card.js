import './card.css';
import React from "react";


const Cards=({item,handleClick})=>{
    const {img ,name,price}=item;
    
    return(
   <div className="cards">
    <div className="image_box">
        <img src={img} alt=""/>
    </div>
    <div className="details">
    <p id="1">{name}</p>
    <p id="1">{price} $</p>
    <button id="1" onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
    </div>
    );
}


export default Cards;