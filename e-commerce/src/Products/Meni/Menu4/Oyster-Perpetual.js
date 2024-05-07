import React from "react";
import './Menu4.css';
import Menu from "../Meni";
import Video from "../../../video/The new Rolex Oyster Perpetual.mp4";
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
function NewOysterPerpetual(){
    return(
        <div id='oysterperpetual'>
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
            <h1>Oyster Perpetual latest watches</h1>
            <div id='main'>
                <div id='containerNew'>
                    <div className='NewBlock'>
                        <img src='https://content.rolex.com/v7/dam/2023-06/upright-c/m124300-0008.png?impolicy=v7&imwidth=1920' alt='watch'/>
                        <h3>Oyster Perpetual 41</h3>
                        <p>Oyster, 41mm, Oystersteel</p>
                        <button><a href='https://www.rolex.com/watches/oyster-perpetual/m124300-0008' target='_blank' style={{textDecoration:'none', color:'black',fontSize:'15px',fontStyle:'oblique'}}>More Detail</a></button>
                    </div>
                </div>
                <Menu/>
                <video id='watch1' src={Video} width='100%' height='720px' autoPlay loop muted></video>
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
export default NewOysterPerpetual;