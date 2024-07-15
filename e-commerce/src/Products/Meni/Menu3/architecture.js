import React from "react";
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
function Architecture(){
    return(
        <div id='architecture'>
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
            <h1>Rolex and Architecture</h1>
            <div id='ArchitectureBlock'>
                <div className='CinemaBlock'>
                    <h2>An art and a science</h2>
                    <p>Architecture is where a wide range of disciplines converge, combining artistic vision and technical excellence. As in watchmaking, the strength of the design reflects a passion for precision, performance and aesthetics.</p>
                </div>
                <Menu/>
                <div className='CinemaBlock'>
                    <h2>Architecture and the Perpetual Arts Initiative </h2>
                    <p>Rolex supports architecture through its Perpetual Arts Initiative, which embraces many partnerships with leading cultural institutions and artists as part of its a long-term commitment to global culture.</p>
                </div>
                <div className='CinemaBlock'>
                    <h2>International Architecture Exhibition</h2>
                    <p>Since 2014, Rolex has served as Exclusive Partner and Official Timepiece of the International Architecture Exhibition – La Biennale di Venezia. The company’s support highlights its dedication to excellence in design and sustainability. The Biennale is open until 26 November, 2023.</p>
                </div>
            </div>
            <hr style={{height:3+"px", backgroundColor: "black",}}/>
            <h2 style={{fontSize:'35px',fontFamily:'italic'}}>Rolex buildings</h2>
            <div id='ArchitectureContainer'>
                <div className='buildings'>
                    <img src='https://static1.straitstimes.com.sg/s3fs-public/articles/2023/07/13/Centenary%20Hall%20Rolex%20Australia%20HQ.jpg?VersionId=k8xXnNr.5WByZH4WZ1Opg4YrIdDwTrAb' width='500px' height='400px' alt='building'/>
                    <h4>Melbourne, Australia</h4>
                    <h3><blockquote><cite>The Rolex Building by <abbr title='A global architecture studio'>Woods Bagot</abbr></cite></blockquote></h3>
                </div>
                <div className='buildings'>
                    <img src='https://distribution-point.webstorage-4sigma.it/redesco2022/media/progetto/2023/IMG_20200525_120906-1920x1440.jpg' width='500px' height='400px' alt='building'/>
                    <h4>Milan, Italy</h4>
                    <h3><blockquote><cite>The Rolex Building by <abbr title='An architectural practice based in Milano, Italia.'>Onsitestudio</abbr></cite></blockquote></h3>
                </div>
                <div className='buildings'>
                    <img src='https://images.rolex.org/data/media/img/arts/a-dynamic-tower-for-dallas/desktop_0002.jpg' width='500px' height='400px' alt='building'/>
                    <h4>Texas, USA</h4>
                    <h3><blockquote><cite>The Rolex Building Dallas by <abbr title='Japanese architect and emeritus professor in the Department of Architecture (Graduate School of Engineering) at the University of Tokyo'>Kengo Kuma</abbr></cite></blockquote></h3>
                </div>
                <div className='buildings'>
                    <img src='https://epfl-pavilions.ch/media/pages/home/0c23fe7754-1607610035/epfl-pavilions-view-4-1600x900.jpg' width='500px' height='400px' alt='building'/>
                    <h4>Lausanne, Switzerland</h4>
                    <h3><blockquote><cite>ArtLab at EPFL by <abbr title='Japanese architect and emeritus professor in the Department of Architecture (Graduate School of Engineering) at the University of Tokyo'>Kengo Kuma</abbr></cite></blockquote></h3>
                </div>
                <div className='buildings'>
                    <img src='https://sdg-migration-id.s3.amazonaws.com/145808-rolex4.jpg' width='500px' height='400px' alt='building'/>
                    <h4>Lausanne, Switzerland</h4>
                    <h3><blockquote><cite>EPFL Rolex Learning Center by <abbr title='An architectural firm based in Tokyo'>SANAA</abbr></cite></blockquote></h3>
                </div>
                <div className='buildings'>
                    <img src='https://images.rolex.org/data/media/img/science/an-education-in-precision/desktop_0002.jpg' width='500px' height='400px' alt='building'/>
                    <h4>Pennsylvania, USA</h4>
                    <h3><blockquote><cite>Lititz Watch Technicum by <abbr title='An American architect, designer, and educator'>Michael Graves</abbr></cite></blockquote></h3>
                </div>
                <div className='buildings'>
                    <img src='https://www.watchesandculture.org/forum/wp-content/uploads/2016/04/fhhmag_slideshow_002579-002.jpg' width='500px' height='400px' alt='building'/>
                    <h4>Tokyo, Japan</h4>
                    <h3><blockquote><cite>The Rolex Toyocho Building by <abbr title='A Japanese architect known for fusing modernism with Japanese architectural traditions.'>Fumihiko Maki</abbr></cite></blockquote></h3>
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
export default Architecture;