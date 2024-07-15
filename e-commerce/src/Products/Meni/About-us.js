import React from "react";
import Menu from './Meni';
import './About-us.css';
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
function AboutUs(){
    return(
        <div id='AboutUs'>
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
            <h1>The History of Rolex</h1>
            <div id='header1'>
                <h2>Introduction</h2>
                <p>
                    Rolex is a Swiss <a href='https://en.wikipedia.org/wiki/Watch' target='_blank'>watch</a> designer and manufacturer based in <abbr title=' The second-most populated  city in Switzerland '>Geneva</abbr>,Switzerland. Founded in 1905 as Wilsdorf and Davis by <abbr title='Hans Wilsdorf (22 March 1881 – 6 July 1960) was a German-British businessman, best known as the founder of Rolex and Tudor.'>Hans Wilsdorf</abbr> and <abbr title='The co-founder of Rolex'>Alfred Davis</abbr> in London, the company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co. Ltd. in 1915.After World War I, the company moved its base of operations to Geneva because of the unfavorable economy in the United Kingdom. In 1920, Hans Wilsdorf registered Montres Rolex SA in Geneva as the new company name (montre is French for clock or watch); it later became Rolex SA. Since 1960, the company has been owned by the Hans Wilsdorf Foundation, a private family trust.
                    Rolex SA and its subsidiary <a href='https://en.wikipedia.org/wiki/Tudor_Watches' target='_blank'>Montres Tudor SA design</a> , make, distribute, and service wristwatches sold under the Rolex and Tudor brands. In 2023 Rolex agreed to acquire its longtime retail partner <a href='https://en.wikipedia.org/wiki/Bucherer' target='_blank'>Bucherer</a>.
                </p>
                <img src='https://wp-aws-media.s3-accelerate.amazonaws.com/2016/11/rolex-shop-sign.jpg' width='500px' height='300px' alt='shop'/>
            </div>
            <br/>
            <br/>
            <Menu/>
            <div id='header2'>
                <h2>Notable inventions</h2>
                <ul>
                    <li>In 1926, Rolex produced the Oyster case. While they claim this was the first reliable waterproof wristwatch case based on a screw-down crown it was not. So Wilsdorf even had a specially made Rolex watch (the watch was called the "DeepSea") attached to the side of <abbr title='Trieste is a Swiss-designed, Italian-built deep-diving research bathyscaphe. In 1960, it became the first crewed vessel to reach the bottom of Challenger Deep in the Mariana Trench,'>Trieste</abbr> , which went to the bottom of the <abbr title="the deepest point in Earth's seabed">Mariana Trench</abbr>. The watch survived and tested as having kept perfect time during its descent and ascent. </li>
                    <li>In 1910, the first watchmaker to earn <abbr title=" an extraordinarily accurate mechanical timepiece, with an original focus on the needs of maritime navigation">chronometer</abbr> certification for a small lady wristwatch.</li>
                    <li>In 1931, released a wristwatch winding mechanism featuring a rotor, a full 360 degrees rotating weight to power the watch by the movement of the wearer's arm.As well as making watch winding unnecessary, it also kept the power from the mainspring more consistent, resulting in more reliable timekeeping. Fully rotating weights later became part of the standard winding mechanism of <a href='https://en.wikipedia.org/wiki/Automatic_watch' target='_blank'> self-winding</a> wristwatches. A preceding self-winding mechanism by Harwood instead used a weight that moved in a 270 degrees arc hitting buffer springs on both sides</li>
                    <li>In 1945, introduced the first chronometer wristwatch with an automatically changing date on the dial (Rolex Datejust Ref. 4467). An earlier wristwatch with a date changing mechanism by Mimo was not chronometer certified.</li>
                    <li>In 1953, released a case waterproof to 100 m (330 ft) in the <a href='https://en.wikipedia.org/wiki/Rolex_Submariner' target='_blank'>Rolex Oyster Perpetual Submariner</a>  Ref. 6204. Although this has been commonly publicized as the first diving watch, in 1932 Omega had released the Marine, which could stand 135mts, 35mts more than the 1953 Rolex Submariner. Blancpain produced their Fifty Fathoms watch in 1953, 10 months before the Rolex Submariner.</li>
                    <li>In 1954, produced a wristwatch which showed two time zones at once in the <a href='https://en.wikipedia.org/wiki/Rolex_GMT_Master_II' target='_blank'>Rolex GMT Master</a>  ref. 6542. Yet again, it was not the first company to do so, as the Longines DualTime preceded the GMT by a full quarter of a century.</li>
                    <li>In 1956, Rolex made a wristwatch with an automatically changing day and date on the dial in the <a href='https://en.wikipedia.org/wiki/Rolex_Day-Date' target='_blank'>Rolex Day-Date</a> .</li>
                </ul>
                <figure id='fig1'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Rolex_GMTIIC.jpg' width='300' height='200' alt='watch'/>
                    <figcaption>Rolex GMT Master II gold and stainless steel </figcaption>

                </figure>
                <br/>
                <figure id='fig2'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Rolex_Datejust_36_-_Presentation_Ready_%2850826141683%29.jpg/1280px-Rolex_Datejust_36_-_Presentation_Ready_%2850826141683%29.jpg' width='300' height='200' alt='watch'/>
                    <figcaption>Rolex Datejust</figcaption>
                </figure>
            </div>
            <p id='footer'>For more information about the rolex company, you can find in <a href='https://www.rolex.com/about-rolex-watches/history/1905-1919' target='_blank'>Learn more</a></p>
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
export default AboutUs;