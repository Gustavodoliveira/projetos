import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png"
import {AiOutlineMenu} from "react-icons/ai"

const logo = Logo;




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
            <div className="text__container">
                <span className="header__text-title">{props.title} </span>
                <span className="header__text-content"> {props.content}</span>
                <a href="#" className="header__btn btn">{props.text_btn}</a>
            </div>
        </header>
    )
}

export default Header;