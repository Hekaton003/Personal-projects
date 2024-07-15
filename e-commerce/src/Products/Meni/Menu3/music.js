import React from 'react';
import './Menu3.css';
import Menu from "../Meni";
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
function Music(){
    return(
        <div id='music'>
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
            <h1>Rolex and Music</h1>
            <div id='MusicBlock1'>
                <div className='CinemaBlock'>
                   <h2>In tune with the times</h2>
                    <p>As our universal heritage, music must be perpetuated and nurtured in our daily lives. It is in this spirit that Rolex partners prestigious institutions, including four of the world’s leading opera houses – London, Milan, New York and Paris – as well as two jewels in classical music, the Salzburg Festival and the Vienna Philharmonic.<br/>
                    By supporting singers, conductors and virtuoso musicians who continually reinterpret the classics to resonate with our time, Rolex contributes to keep music alive around the world.</p>
                </div>
                <div className='CinemaBlock'>
                    <h2>Lasting contribution to culture</h2>
                    <p>Over the years, Rolex has embraced partnerships with many of the world’s leading artists and prestigious institutions, including musicians, festivals, concerts and orchestras. These include the great operatic stages: Milan’s Teatro alla Scala, the Royal Opera House in London, New York’s Metropolitan Opera and the Opéra national de Paris.</p>
                </div>
                <div className='CinemaBlock'>
                    <h2>Beacons of classical music</h2>
                    <p>Rolex has been Exclusive Partner of the renowned Vienna Philharmonic since 2008 and Exclusive Sponsor of the famous New Year’s Concert since 2009, demonstrating the brand’s dedication to the arts and culture and promoting the highest level of achievement in music.</p>
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
export default Music;
