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
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Contatos</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
           </nav>
        </header>
    )
}

export default Header;