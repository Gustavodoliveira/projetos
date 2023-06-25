import "./header.css";
import React from "react";
import Logo from "./logo.png"

const logo = Logo;




function Header () {
    return (
        <header>
           <nav>
           <img src= {logo} alt="" />
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
           </nav>
        </header>
    )
}

export default Header;