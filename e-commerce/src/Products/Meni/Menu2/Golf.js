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
const Golf=()=>{
    return (
        <div id='Golf'>
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
            <h1>Rolex and Golf</h1>
            <div id='GolfBlock1'>
                <div className='MSBlock1'>
                <h2>History of the partnership between Rolex and Golf</h2>
                <p>The connection that has existed between Rolex and golf for more than half a century is rooted in the very essence of the game.
                Since its initial association in 1967 with Arnold Palmer, joined by Jack Nicklaus and Gary Player – known together as The Big Three –, Rolex has helped to perpetuate excellence in the discipline, forging partnerships with institutions and their greatest events, while also supporting both seasoned champions and promising talent.
                Since this landmark partnership with three of golf’s greats, the relationship between Rolex and golf has flourished, attaining global reach.</p>
                </div>
                    <Meni/>
            </div>
            <div id='GolfBlock2'>
                <div className='MSBlock1'>
                <h2>At the heart of the game</h2>
                <p>The brand supports men’s and women’s golf at all levels; from legendary players such as Tiger Woods and Annika Sörenstam, to junior and amateur golfers. Today, Rolex sponsors many of the most prestigious tournaments and is part of the very fabric of the game. The association between the brand and the sport stands for quality, elegance, reliability and a pioneering spirit.</p>
            </div>
            </div>
            <div id='GolfBlock3'>
                <div className='MSBlock1'>
                <h2>Today’s champions</h2>
                <p>There can be little doubt about what makes a Rolex Testimonee. These players and the Swiss watchmaker share a perpetual ambition for excellence and superior performance. They include today’s established champions, athletes whose skill and application have earned them a place at the pinnacle of the professional game.
                </p>
            </div>
            </div>
            <div id='GolfBlock4'>
                <div className='MSBlock1'>
                <h2>Women’s golf</h2>
                <p>Since 1980, Rolex has been a partner of the Ladies Professional Golf Association (LPGA), serving as its Official Timekeeper, including at the five women’s Majors. The brand also supports the Ladies European Tour (LET), the Rolex Women’s World Rankings and the Rolex LPGA Awards that recognize the tour’s top players. Its commitment also extends to women’s team golf as a Global Partner of the Solheim Cup, the premier intercontinental challenge between the United States and Europe.</p>
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
export default Golf;