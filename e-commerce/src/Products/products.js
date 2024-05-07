
import {Link, BrowserRouter as Router, useRoutes} from "react-router-dom";
import React from "react";
import './products.css';
import CosmographPage from "./Cosmograph";
import Watch1908 from "./1908";
import Yacht from "./Yacht";
import SkyDweller from "./Sky-dweller";
import GMT from "./GMT";
import Explorer from "./Explorer";
import Oyster from "./Oyster";
import Daydate from "./daydate";
import Airking from "./airking";
import Deepsea from "./deepsea";
import Datejust from "./datejust";
import SeaDweller from "./sea-dweller";
import Submariner from "./Submariner";
import Menu from './Meni/Meni';
import AboutUs from "./Meni/About-us";
import Location from './Meni/Location';
import Contact from "./Meni/Contact";
import Tennis from "./Meni/Menu2/Tennis";
import Golf from "./Meni/Menu2/Golf";
import Yachting from './Meni/Menu2/Yachting';
import MotorSport from "./Meni/Menu2/Motor-sport";
import Cinema from "./Meni/Menu3/cinema";
import Music from "./Meni/Menu3/music";
import Architecture from "./Meni/Menu3/architecture";
import Daytona from "./Meni/Menu4/daytona";
import NewWatch1908 from "./Meni/Menu4/watch1908";
import Ymaster42 from "./Meni/Menu4/ymaster42";
import NewSkyDweller from "./Meni/Menu4/Sky-Dweller";
import NewGMT from "./Meni/Menu4/GMT-MASTER";
import NewExplorer from "./Meni/Menu4/Explorer40";
import NewOysterPerpetual from "./Meni/Menu4/Oyster-Perpetual";
import NewDayDate from "./Meni/Menu4/Day-Date36";
import {Account} from "./Meni/Account";
import {ShoppingCart,FacebookLogo,InstagramLogo,TwitterLogo,PinterestLogo,YoutubeLogo,LinkedinLogo} from 'phosphor-react';

import Cart from './Cart/Cart';
import {ProductList} from "./ProductList";
import {Product} from "./ProductBlock";
import {ShopContextProvider} from "../Shop-context/Shop-Context";
    const ProductsPage=()=>{
        return (
            <div className='Product'>
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
                <div id='main'>
                    <h1>Rolex's watches</h1>
                    <div id='container'>
                        {ProductList.map((product)=>(<Product data={product}/>))}
                    </div>
                    <Menu/>
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
    const Store=()=>{
        let routes=useRoutes([
            {path:'/', element:<ProductsPage/>},
            {path:'/Cart',element:<Cart/>},
            {path:'/Products/Cosmograph',element:<CosmographPage/>},
            {path:'/Products/1908', element: <Watch1908/>},
            {path:'/Products/Yacht', element: <Yacht/>},
            {path:'/Products/Sky-dweller', element: <SkyDweller/>},
            {path:'/Products/GMT', element: <GMT/>},
            {path:'/Products/Explorer', element: <Explorer/>},
            {path:'/Products/Oyster', element: <Oyster/>},
            {path:'/Products/daydate', element: <Daydate/>},
            {path:'/Products/airking', element: <Airking/>},
            {path:'/Products/deepsea', element: <Deepsea/>},
            {path:'/Products/datejust', element: <Datejust/>},
            {path:'/Products/sea-dweller', element: <SeaDweller/>},
            {path:'/Products/Submariner', element: <Submariner/>},
            {path:'/Meni/About-us', element:<AboutUs/>},
            {path:'/Meni/Location',element:<Location/>},
            {path:'/Meni/Contact', element:<Contact/>},
            {path:'/Meni/Account',element:<Account/>},
            {path:'/Meni/Menu2/Tennis',element:<Tennis/>},
            {path:'/Meni/Menu2/Golf',element:<Golf/>},
            {path:'/Meni/Menu2/Yachting',element:<Yachting/>},
            {path:'/Meni/Menu2/Motor-sport',element: <MotorSport/>},
            {path:'/Meni/Menu3/cinema',element: <Cinema/>},
            {path:'/Meni/Menu3/music',element: <Music/>},
            {path:'/Meni/Menu3/architecture',element: <Architecture/>},
            {path:'/Meni/Menu4/daytona',element:<Daytona/>},
            {path:'/Meni/Menu4/watch1908',element:<NewWatch1908/>},
            {path:'/Meni/Menu4/ymaster42',element:<Ymaster42/>},
            {path:'/Meni/Menu4/Sky-Dweller',element:<NewSkyDweller/>},
            {path:'/Meni/Menu4/GMT-MASTER',element:<NewGMT/>},
            {path:'/Meni/Menu4/Explorer40',element:<NewExplorer/>},
            {path:'/Meni/Menu4/Oyster-Perpetual',element:<NewOysterPerpetual/>},
            {path:'/Meni/Menu4/Day-Date36',element:<NewDayDate/>}
        ]);
        return routes;
    };
function Products(){
    return(
        <ShopContextProvider>
        <Router>
           <Store/>
        </Router>
        </ShopContextProvider>
    );
}
export default Products;