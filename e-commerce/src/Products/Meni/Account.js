import React, { useEffect, useState } from "react";
import './Account.css';
import Menu from "./Meni";
import {ProductList} from "../ProductList";
import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    PinterestLogo,
    ShoppingCart,
    TwitterLogo,
    YoutubeLogo
} from "phosphor-react";
import {Link} from "react-router-dom";

export function Account() {
    const [database, setDatabase] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const userId = localStorage.getItem('userId');
    const user = database[parseInt(userId, 10) - 1];

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((response) => response.json())
            .then((data) => setDatabase(data))
            .catch((err) => console.error(err.message));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then((res) => res.json())
            .then((order) => setOrderData(order))
            .catch((err) => console.error(err.message));
    }, []);
    if (!user) {
        // Handle loading state or user not found
        return (
            <div id='account'>
                <h1>Your Account</h1>
                <div id='accountForum'>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    const getUserPurchasedProducts = () => {
        const userOrders = orderData.filter((order) => Number(order.user_id) === Number(userId));
        const userPurchasedProducts = [];

        for (const order of userOrders) {
            const product = ProductList.find((item) => item.id === order.product_id);
            if (product) {
                const productId = product.id;

                if (userPurchasedProducts[productId]) {
                    // If the product is already in the list, update the quantity
                    userPurchasedProducts[productId].quantity += order.quantity;
                } else {
                    // If the product is not in the list, add it with the current quantity
                    userPurchasedProducts[productId] = {
                        product,
                        quantity: order.quantity,
                    };
                }
            }
        }

        return userPurchasedProducts;
    };

    const PurchasedProducts = getUserPurchasedProducts();
    console.log(PurchasedProducts)
    function Logout(){
        window.location.reload();
    }
    return (
        <div id='account'>
            <div className='Menu'>
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
            <h1>Your Account</h1>
            <div>
                <div id='accountForum'>
                    <div id='profile'>
                        <h2>Profile</h2>
                        <img src='https://cdn2.iconfinder.com/data/icons/e-commerce-and-shopping-glyph/64/36_buyer_profile_user_ECommerce_Shopping-512.png' width='80px' height='80px' alt='icon'/>
                        <h3>{user.name} {user.lastname}</h3>
                        <p>User ID: {userId}</p>
                        <button id='logout' type='button' onClick={()=>{Logout()}}>Log out</button>
                    </div>
                    <div id='info'>
                        <h2>Billing address</h2>
                        <label htmlFor="name">First name:</label>
                        <input id="name" type="text" value={user.name}/>
                        <br/>
                        <br/>
                        <label htmlFor="lastname">Last name:</label>
                        <input id="lastname" type="text" value={user.lastname}/>
                        <br/>
                        <br/>
                        <label htmlFor="country">Country: </label>
                        <input type="text" id="country" value={user.country}/>
                        <br/>
                        <br/>
                        <label htmlFor="city zipcode">Zipcode,City:</label>
                        <input
                            type="text"
                            id="zipcode"
                            value={user.zipcode}/>
                        <input
                        type="text"
                        id="city"
                        value={user.city}/>
                        <br/>
                        <br/>
                        <label htmlFor="address">Home address: </label>
                        <input
                            type="text"
                            id="address"
                            value={user.address}
                        />
                        <br/>
                        <br/>
                        <label htmlFor="telephone">Telephone number: </label>
                        <input type="text" id="telephone" value={user.telephone}/>
                    </div>
                    <div id='Login'>
                        <h2>Login information</h2>
                        <label htmlFor="email">Your email:</label>
                        <input
                            type="text"
                            value={user.email}
                            id="email"/>
                        <br/>
                        <br/>
                        <label htmlFor="password">Your password: </label>
                        <input
                            type="password"
                            id="password"
                            value={user.password}/>
                    </div>
                </div>
                <Menu/>
            </div>
            <br/>
            <div id='orderList'>
                <h1>Your previous orders</h1>
                <div id="OrderContainer">
                    {PurchasedProducts.map((product)=>{
                       return (
                           <div className='OrderProduct'>
                               <img src={product.product.src} width='400px' height='400px' alt='watch'/>
                               <h3>{product.product.name}</h3>
                               <p>Quantity: {product.quantity}</p>
                               <p>Price: ${(product.product.price * product.quantity).toFixed(2)}</p>
                           </div>
                       );
                    })}
                </div>
            </div>
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