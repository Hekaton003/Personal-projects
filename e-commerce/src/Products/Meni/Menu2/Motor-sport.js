import React from "react";
import './Menu2.css';
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
function MotorSport(){
    return(
        <div id='MotorSport'>
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
            <h1>Rolex and Motor Sports</h1>
            <div id='MotorSport1'>
                <div className='MSBlock1'>
                <h2>A shared trajectory</h2>
                <p>Mastering the power of mechanics. Developing the precision of manual techniques. Controlling risk to determine the ideal trajectory. Rolex and motor sport have been interlinked since the 1930s, at the height of the pursuit of speed records. These ties have been continuously strengthened as the sport has evolved, in a shared quest for technical advancement. Today, Rolex partners Formula 1® as well as major endurance races, working alongside legendary figures and modern-day motor sport icons.</p>
                </div>
                <Menu/>
            </div>
            <div id='MotorSport2'>
                <div className='MSBlock1'>
                <h2>The mechanics of progress</h2>
                <p>The shared history between Rolex and motor sport has always been about progress. It began in the 1930s when racing driver Sir Malcolm Campbell set his greatest land speed records. On his wrist he wore an Oyster, which he exposed to the extreme conditions of motor racing.</p>
                <p>Today, the partnerships between motor sport and Rolex have developed with a new challenge in mind, one of an energy efficiency that stretches the limits of performance even further. Doing better with less: this is the two-fold sporting and environmental challenge that racing teams and manufacturers are taking on. They all face stringent competition rules and timetables to achieve these new goals.</p>
                <p>Since its founding, Rolex has been committed to the dynamics of progress and supports motor sport in this transformation.</p>
                </div>
            </div>
            <div id='MotorSport3'>
                <div className='MSBlock1'>
                <h2>Rolex, at the heart of motor sport</h2>
                <p>Rolex is a Global Partner and the Official Timepiece of Formula 1®, the premier category of single-seater racing cars, whose championship gathers the greatest teams and most talented drivers to compete in some 20 Grand Prix races around the world.</p>
                <p>The brand is the Official Timepiece of legendary endurance races such as the Rolex 24 At DAYTONA, the 24 Hours of Le Mans and the 12 Hours of Sebring, as well as the FIA World Endurance Championship. Rolex is also a partner of the Daytona International Speedway.</p>
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
export default MotorSport;