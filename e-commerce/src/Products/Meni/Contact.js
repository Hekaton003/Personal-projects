import React from "react";
import Menu from './Meni';
import './Contact.css';
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
const Contact =()=>{
    return(
        <div id='Contact'>
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
            <h1>How to contact Rolex?</h1>
            <div id='Contact-form'>
                <h2>Rolex mailing address</h2>
                <p>You can send letters to Rolex’s address:</p>
                <p>ROLEX SA
                    3-5-7 rue François-Dussaud
                    1211 Geneva 26
                    Switzerland</p>
                <br/>
                <h2>Email Rolex - How do I send an email to Rolex?</h2>
                <ul>
                    <li>For privacy-related inquiries: privacy@rolex.com</li>
                    <li>Marketing Manager: kyle.younghans@rolex.com</li>
                    <li>Marketing Manager: alexandra.gasser@rolex.com </li>
                    <li>Rolex UK head office: london.service@rolex.co.uk</li>
                    <li>General manager Rolex Brasil: eduardo.machado@rolex.com </li>
                    <li>Chief information officer: gerard.orourke@rolex.com </li>
                </ul>
                <br/>
                <h2>Call Rolex</h2>
                <ul>
                    <li>For privacy-related inquiries, call: +4122 302 22 00</li>
                    <li>Australia: +61 3 9654 3988</li>
                    <li>Canada: 1 416 968 1100</li>
                    <li>France: +33 1 44 29 01 50</li>
                    <li>Germany: +49 221/ 1650 0</li>
                    <li>Hong Kong: +852 2249 8888</li>
                    <li>India: +91 22 6625 3600</li>
                    <li>Switzerland: +41 22 302 22 00</li>
                    <li>Spain: +34 91 426 49 00</li>
                    <li>UK: +44 20 7024 7300</li>
                    <li>Rolex costumer service USA: +1 212 758 7700</li>
                    <li>Rolex customer service Switzerland: +41223022200</li>
                </ul>
            </div>
            <Menu/>
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
export default Contact