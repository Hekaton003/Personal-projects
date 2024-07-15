import React, {useContext} from "react";
import './products.css';
import {ShopContext} from "../Shop-context/Shop-Context";
export const Product =(props)=>{
    const {id,name,description,src,price,quantity}=props.data;
    const {addToCart,cartItem}=useContext(ShopContext);
    const cartItemAmount = cartItem[id];
    return(
        <div className='ProductBlock'>
            <img src={src} alt='watch'/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <button className='AddToCart' onClick={()=>{ if(cartItemAmount<quantity){addToCart(id)}}}>Add To Cart { (cartItemAmount > 0) && <>({cartItemAmount})</>}</button>
        </div>
    );
}
