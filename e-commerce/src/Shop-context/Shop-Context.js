import React,{createContext,useState} from 'react';
import {ProductList} from "../Products/ProductList";

export const ShopContext=createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<ProductList.length+2;i++){
        cart[i]=0;
    }
    return cart;
}
export const ShopContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState(getDefaultCart);

    const RemoveCart=()=>{
        setCartItem(getDefaultCart);
    }
    const getTotalAmount=()=>{
        let total=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
            let itemInfo=ProductList.find((p)=>p.id===Number(item));
            total+=cartItem[item] * itemInfo.price;}
        }
        return total;
    };
    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]+1}));
    };
    const removeToCart=(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]: prev[itemId]-1}));
    };
    const updateCartItemAmount = (newAmount,itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:newAmount}));
    };
    const ContextValue={cartItem,addToCart,removeToCart,updateCartItemAmount,getTotalAmount,RemoveCart};
    return (<ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>);
};