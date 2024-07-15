import React, {useContext, useEffect, useState} from "react";
import {ProductList} from "../ProductList";
import {CartItem} from "./CartItem";
import {ShopContext} from "../../Shop-context/Shop-Context";
import './Cart.css';
import {Link} from "react-router-dom";
import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    PinterestLogo,
    ShoppingCart,
    TwitterLogo,
    YoutubeLogo
} from "phosphor-react";
export default function Cart(){
    const {cartItem,RemoveCart,getTotalAmount}=useContext(ShopContext);
    const total=getTotalAmount();
    const [isLoading, setLoading] = useState(false);
    const [rowCount, setRowCount] = useState(0);
    useEffect(() => {
        const fetchRowCounts= async ()=>{
            try {
                const response = await fetch('http://localhost:5000/orders/counts');
                const data = await response.json();
                setRowCount(parseInt(data.rowCount,10));
            }catch (err){
                console.error('Error fetching row count:', err);
            }

        };
        fetchRowCounts();
        console.log(rowCount);
    }, [rowCount]);

    const HandleSubmit=async (event)=>{

        event.preventDefault();
        setLoading(true);

            let productId=[];
            ProductList.forEach((product)=>{
                if(cartItem[product.id]!==0){
                    productId.push(product.id);
                }
            });
            const OrderDataArray=[];
            let j=1;
            for (let i = 0; i <ProductList.length; i++) {
                if(cartItem[productId[j-1]]>0){
                    const OrderData={
                        id:rowCount+j,
                        user_id:localStorage.getItem("userId"),
                        product_id:productId[j-1],
                        quantity:cartItem[productId[j-1]]
                    }
                    OrderDataArray.push(OrderData);
                    j++;
                }
            }
        try{
            const response= await fetch('http://localhost:5000/orders',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(OrderDataArray),
            });
            if(response.ok){
                alert("The order is successfully sent");
                RemoveCart();
                setLoading(false);
            }
            else{
                alert("Error processing the order. Please try again.");
                console.error(response);
                setLoading(false);
            }
        }catch (err){
            alert("An error occurred while processing the order. Please try again later.");
            console.error(err);
            setLoading(false);
        }

    }
    return(
        <div className='Cart'>
            <div className='Menu'>
                <Link to="/">Home</Link>
                <Link to='/Products/Cosmograph'>Cosmograph Daytona</Link>
                <Link to='/Products/1908'>1908</Link>
                <Link to='/Products/Yacht'>Yacht-Master</Link>
                <Link to='/Products/Sky-dweller'>Sky-Dweller</Link>
                <Link to='/Products/GMT'>GMT-Master-II</Link>
                <Link to='/Products/Explorer'>Explorer</Link>
                <Link to='/Products/Oyster'>Oyster Perpetual</Link>
                <Link to='/Products/daydate'>Day-Date</Link>
                <Link to='/Products/airking'>Air-King</Link>
                <Link to='/Products/deepsea'>Deepsea</Link>
                <Link to='/Products/datejust'>Datejust 41</Link>
                <Link to='/Products/sea-dweller'>Sea-Dweller</Link>
                <Link to='/Products/Submariner'>Submariner</Link>
                <Link to='/Cart'><ShoppingCart size={22} id='shopping'/></Link>
            </div>
            <div>{
              isLoading? <div id='Loading'>Loading...</div>:  <div>
                <h1>Your Cart Items</h1>
               <div className='CartItem'>
                {ProductList.map((product)=>{
                    if(cartItem[product.id]!==0){
                        return <CartItem data={product}/>;
                    }
                })}
            </div>
             <div>
            {total>0?
            <div className='Checkout'>
                <p>Total amount: $ {total.toFixed(2)}</p>
                <button onClick={HandleSubmit}>Checkout</button>
            </div>:
                <h3>Your Cart Item is empty!</h3>
            }
             </div>
            </div>
            }</div>
            <footer>
                <p>Copyright The Rolex E-Commerce Shop 2023</p>
                <div id='icons'>
                    <a href='https://www.facebook.com/rolex' target='_blank'><FacebookLogo size={25}></FacebookLogo></a>
                    <a href='https://www.instagram.com/rolex' target='_blank'><InstagramLogo size={25}></InstagramLogo></a>
                    <a href='https://twitter.com/rolex' target='_blank'><TwitterLogo size={25}></TwitterLogo></a>
                    <a href='https://www.youtube.com/rolex' target='_blank'><YoutubeLogo size={25}></YoutubeLogo></a>
                    <a href='https://www.linkedin.com/company/rolex' target='_blank'><LinkedinLogo size={25}></LinkedinLogo></a>
                    <a href='https://www.pinterest.com/rolex' target='_blank'><PinterestLogo size={25}></PinterestLogo></a>
                </div>
            </footer>
        </div>
    );
}