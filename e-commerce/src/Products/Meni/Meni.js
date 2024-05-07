import React from "react";
import {Link} from "react-router-dom";
function Menu(){
    return(
        <aside>

            <ul id='Menu1'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Meni/About-us'>About us</Link></li>
                <li><Link to='/Meni/Location'>Location</Link></li>
                <li><Link to='/Meni/Contact'>Contact</Link></li>
                <li><Link to='/Meni/Account'>Account</Link></li>

            </ul>
            <ul id='Menu2'>
                <li>
                    <details>
                        <summary><a>Rolex and Sport</a></summary>
                        <Link to='/Meni/Menu2/Tennis'>Tennis</Link>
                        <Link to='/Meni/Menu2/Golf'>Golf</Link>
                        <Link to='/Meni/Menu2/Yachting'>Yachting</Link>
                        <Link to='/Meni/Menu2/Motor-sport'>Motor sport</Link>
                    </details>
                </li>
                <li>
                    <details>
                        <summary><a>Rolex and Perpetual Arts</a></summary>
                        <Link to='/Meni/Menu3/cinema'>Cinema</Link>
                        <Link to='/Meni/Menu3/music'>Music</Link>
                        <Link to='/Meni/Menu3/architecture'>Architecture</Link>
                    </details>

                </li>
                <li>
                    <details>
                        <summary><a>Rolex latest watches </a></summary>
                        <Link to='/Meni/Menu4/daytona'>Cosmograph Daytona</Link>
                        <Link to='/Meni/Menu4/watch1908'>1908</Link>
                        <Link to='/Meni/Menu4/ymaster42'>Yacht Master 42</Link>
                        <Link to='/Meni/Menu4/Sky-Dweller'>Sky Dweller</Link>
                        <Link to='/Meni/Menu4/GMT-MASTER'>GMT-MASTER II</Link>
                        <Link to='/Meni/Menu4/Explorer40'>Explorer 40</Link>
                        <Link to='/Meni/Menu4/Oyster-Perpetual'>Oyster Perpetual</Link>
                        <Link to='/Meni/Menu4/Day-Date36'>Day Date 36</Link>
                    </details>
                </li>
            </ul>
        </aside>
    );
}
export default Menu;