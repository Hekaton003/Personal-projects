import React from "react";
import './Location.css';
import Menu from './Meni';
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
function Location(){
    return (
        <div id='location'>
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
            <h1>Rolex shops</h1>
            <Menu/>
            <div id='storeContainer'>
                <div className='stores'>
                    <img src='https://content.rolex.com/v7/dam/rolex-retailers/store-locator/store-pages/store-details/store-details-generic-02.jpg' width='400px' height='300' alt='store'/>
                    <h3>Schroll Kitzbühel</h3>
                    <p>Vorderstadt 23
                        6370 Kitzbühel
                        Tirol
                        Austria</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_1444/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>Schullin GmbH</h3>
                    <p>Herrengasse 3
                        8010 Graz
                        Styria
                        Austria</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_1834/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>ROLEX BOUTIQUE BUDAPEST
                        PETITE GENEVE PETROVIC KFT</h3>
                    <p>Andrassy ut. 10
                        1061 Budapest
                        Hungary</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_2383/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>Malalan D.O.O.</h3>
                    <p>Mestni trg 21
                        1000 Ljubljana
                        Ljubljana
                        Slovenia</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/v7/dam/rolex-retailers/store-locator/store-pages/store-details/store-details-generic-01.jpg' width='400px' height='300' alt='store'/>
                    <h3>Petite Geneve Petrovic</h3>
                    <p>Uskocka 7
                        11000 Belgrade
                        Serbia</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_17865/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>PETITE GENEVE PETROVIC (MONTENEGRO DOO)</h3>
                    <p>Blaža Jovanovića br. 1 (Hotel Regent)
                        85320 Tivat
                        Montenegro</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/v7/dam/rolex-retailers/store-locator/store-pages/store-details/store-details-generic-01.jpg' width='400px' height='300' alt='store'/>
                    <h3>Besha Rolex Boutique‬</h3>
                    <p>Boulevard Vitosha 34
                        1000 Sofia
                        Bulgaria</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_1735/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>ALEXANDRIDIS</h3>
                    <p>140 Dimitriados
                        38221 Volos
                        Magnesia
                        Greece</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_1467/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>IOANNIDIS JEWELLERY</h3>
                    <p>41 Nikiforou Theotoki
                        49100 Corfu
                        Heptanese
                        Greece</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/v7/dam/rolex-retailers/store-locator/store-pages/store-details/store-details-generic-01.jpg' width='400px' height='300' alt='store'/>
                    <h3>Passo A.S. / Sheron</h3>
                    <p>Panska 2
                        811 01 Bratislava
                        Bratislava
                        Slovakia</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_1884/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>Curnis</h3>
                    <p>Via Monte Grappa 7
                        24121 Bergamo
                        Bergamo
                        Italy</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/v7/dam/rolex-retailers/store-locator/store-pages/store-details/store-details-generic-03.jpg' width='400px' height='300' alt='store'/>
                    <h3>Tomasi</h3>
                    <p>Via S. Pietro 1
                        38100 Trento
                        Trento
                        Italy</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_16475/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>Michaud Verbier</h3>
                    <p>5 Rue de Médran
                        1936 Verbier
                        Switzerland</p>
                </div>
                <div className='stores'>
                    <img src='https://content.rolex.com/rocc/assets/RSWI_9515/portrait-v6.jpg?imwidth=800' width='400px' height='300' alt='store'/>
                    <h3>Frojo</h3>
                    <p>Valstore
                        73150 Val d'Isère
                        France</p>
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
export default Location;