import React, {useContext} from "react";
import './Cart.css';
import {ShopContext} from "../../Shop-context/Shop-Context";
export const CartItem=(props)=>{
    const {id,name,description,src,price,quantity} = props.data;
    const {cartItem,addToCart,removeToCart,updateCartItemAmount}=useContext(ShopContext);
    const cartItemAmount = cartItem[id];
    return(
        <div className='cartBlock'>
                <img src={src} alt='watch'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Quantity:</p>
                <div className='CountHandler'>
                    <button onClick={()=>removeToCart(id)}>-</button>
                    <input value={cartItem[id]} onChange={(e)=>{ if(e.target.value<=quantity){updateCartItemAmount(Number(e.target.value),id)}}}/>
                    <button onClick={()=>{if(cartItemAmount<quantity){addToCart(id)}}}>+</button>
                </div>
        </div>
    );
}