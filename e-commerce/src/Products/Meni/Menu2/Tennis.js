import React from "react";
import './Menu2.css';
import Meni from "../Meni";
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
const Tennis=()=>{
    return (
        <div id='Tennis'>
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
            <h1>Rolex and Tennis</h1>
            <div id='Tennis1'>
            <div className='TennisBlock'>
                <h2>A shared movement</h2>
                <p>For more than 40 years, Rolex has enjoyed a special relationship with tennis, a sport with global appeal, whose history continues to be written with new challenges, new stories and new champions. Rolex and tennis share a set of strong founding values: the perpetual quest for excellence, the desire for technical precision, unwavering effort, a respect for tradition and pushing beyond personal limits.</p>
            </div>
            <div className='TennisBlock'>
                <h2>A major partner in tennis</h2>
                <p>Rolex and tennis first came together when the brand partnered with The Championships, Wimbledon, in 1978 as tennis was experiencing a powerful transformation.<br/>
                    The brand gradually forged links with all of the sport’s elite competitions. Rolex now partners the four Grand Slam® tournaments, all the major events in the men’s and women’s game and the leading international team contests.</p>
            </div>
            <div className='TennisBlock'>
                <h2>Rolex supports past and present talent</h2>
                <p>Rolex helps to foster the development of tennis by strengthening its commitment to young talent and the most iconic athletes whose exceptional feats have brought glamour and greatness to the sport.</p>
            </div>
            <Meni/>
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
export default Tennis;