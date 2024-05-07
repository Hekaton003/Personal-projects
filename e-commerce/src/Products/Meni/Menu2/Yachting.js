import React from "react";
import Menu from "../Meni";
import './Menu2.css';
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
function Yachting(){
    return(
        <div id='Yacht1'>
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
            <h1>Rolex and Yachting</h1>
            <div id='Yachting'>
            <div className='YachtingBlock'>
                <h2>A partnership going the distance</h2>
                <p>Yacht clubs, renowned sailors, iconic offshore races and some of the most celebrated regattas. For almost 70 years Rolex has forged strong relationships with the world of yachting. A prominent yacht racing partner, the brand shares the common pursuit of excellence and a passion for premium performance with major custodians of the sport’s enduring spirit.</p>
            </div>
            <Menu/>
            <div className='YachtingBlock'>
                <h2>Premier crewed yacht races</h2>
                <p>Rolex partners some of the top crewed coastal regattas and offshore races. The brand is associated with numerous annual and biannual coastal regattas all over the world. It is Official Timepiece for two such championships that are at the cutting edge of nautical technology: SailGP, featuring the planet’s fastest catamarans, and the 52 SUPER SERIES for high-performance TP52 monohulls. Rolex also partners prestigious offshore races, such as the Rolex Fastnet Race, the Rolex Sydney Hobart Yacht Race and the Rolex Middle Sea Race.</p>
            </div>
            <div className='YachtingBlock'>
                <h2>Yacht clubs Vital to the future of sailing</h2>
                <p>Rolex is committed to continuously supporting the most dynamic yacht clubs, institutions essential to the evolution of sailing that help perpetuate and develop the discipline in equal measure. These clubs are a harmonious blend of tradition and progress, organizing regattas and offshore races of global importance.</p>
            </div>
            <div className='YachtingBlock'>
                <h2>Precision as a requisite</h2>
                <p>Chronometric precision is a vital part of navigation, essential for determining exact location. Sailors have, therefore, always sought to equip themselves with the most accurate instruments available, a quest that has extended to competitive yachting. Starting strongly, coordinating crews, optimizing boat trajectories; precision is crucial at every stage of the race.
                   <br/> As a result, Rolex created a tool watch dedicated to competitive sailing. The launch of the Yacht-Master II in 2007, 15 years after the Yacht-Master (1992), underpinned the natural convergence between yachting and precision watchmaking.</p>
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
export default Yachting;