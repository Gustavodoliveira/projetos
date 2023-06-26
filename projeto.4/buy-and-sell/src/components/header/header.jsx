import "./header.css";
import React, { useState } from "react";
import Logo from "./logo.png"
import {BiMenu} from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai"

const logo = Logo;
const menu = BiMenu




function Header () {

    const [className, setClassName] = useState("")


    function menu () {
        if ( className === 'active'){
            return setClassName('')
        } else {
            return setClassName("active")
        }
            
     
    }


    return (
        <header>
           <nav className={className}>
           <img src= {logo} alt="" />
           <button  onClick= {menu}><AiOutlineMenu /></button>
            <ul>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
           </nav>
        </header>
    )
}

export default Header;