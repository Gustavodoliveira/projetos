import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png"
import {BiMenu} from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai"

const logo = Logo;
const menu = BiMenu




function Header (props) {

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
           <Link to={"/"}><img src= {logo} alt="" /></Link>
           
           <button  onClick= {menu}><AiOutlineMenu /></button>
            <ul>
                <li><Link to={"/produtos"}>Produtos</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/register"}>Register</Link></li>
                <li><Link to={"/sobre"}>Sobre</Link></li>
            </ul>
           </nav>
           <div className="header__text-block">
            <span className="header__text-title">{props.title} </span>
            <span className="header__text-content"> {props.content}</span>
           </div>
        </header>
    )
}

export default Header;