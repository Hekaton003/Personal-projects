import React from "react";
import './Menu3.css';
import Menu from '../Meni';
import Video from '../../../video/Cinema.mp4';
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
function Cinema(){
    return(
        <div id='cinema'>
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
            <h1>Rolex and Cinema</h1>
            <div id='cinema1'>
                <div className='CinemaBlock'>
                <h2>A continually reinvented movement</h2>
                <p>Cinematic art comes to life when the creator’s initial vision meets the savoir-faire needed to bring it to the screen. Behind the greatest masterpieces, this alchemy influences our behaviour and lives and shapes global culture. With the Academy of Motion Picture Arts and Sciences, Rolex celebrates technical and artistic excellence and helps perpetuate knowledge. The brand partners the Oscars® ceremonies and the Governors Awards and supports the Academy Museum of Motion Pictures in Los Angeles. Through its Testimonees and the Mentor and Protégé Arts Initiative, Rolex accompanies living legends and budding talent in filmmaking, encouraging the transmission of all cinematic arts.</p>
                </div>

                <div className='CinemaBlock'>
                    <h2>Celebrating cinema</h2>
                    <p>Rolex is the Proud Sponsor of the Oscars® ceremony held at the Dolby® Theatre, Hollywood. In 2017, Rolex became a partner to the film industry’s highest authority, the Academy of Motion Picture Arts and Sciences. They were brought together by a shared belief in excellence, in fostering talent, in encouraging progress, and in the importance of transmitting of knowledge to future generations.</p>
                </div>
                <div className='CinemaBlock'>
                    <h2>Rolex and cinema: a movement perpetually reinvented</h2>
                     <p>Cinema is a perpetual movement. It has the power to bring history to life and to explore every possible future, both collective and individual. Like a Rolex watch, cinema is ingrained with our memories and aspirations. It is witness to our ambitions and to our determination to overcome any obstacle we may find along our way. More than simply 24 frames per second, or 24 hours within a day, it embodies the very essence of our emotions.</p>
                </div>
                <div className='CinemaBlock'>
                    <h2>Rolex and cinema, writing History side by side</h2>
                    <p>In 1926, the founder of Rolex, Hans Wilsdorf, invented a revolutionary waterproof wristwatch that made headlines, the Oyster. Just months later, audiences marvelled at The Jazz Singer, the first ever talkie. These two moments in time signaled the arrival of both modern filmmaking and modern watchmaking.
                        In 1931, Rolex introduced another visionary breakthrough in the Oyster Perpetual. The first waterproof, automatic-winding wristwatch, equipped with a Perpetual rotor. Meanwhile, cinema saw colour make its big-screen debut.
                        From then on, Rolex and cinema would always resonate with the times. To this day, they continue to share a quest for excellence, innovation and progress, which encourages the greatest aspirations.</p>
                </div>
                <video id='background' src={Video} autoPlay loop muted>
                </video>
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
export default Cinema;