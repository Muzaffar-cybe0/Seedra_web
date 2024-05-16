import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import instagram from '../assets/instagram_icon.png'
import facebook from '../assets/facebook_icon.png'
import heart from '../assets/heart.png'
import cart from '../assets/cart.png'
import search from '../assets/icon_search.png'
export default function Header() {
  return (
    <div className="navbar">
      <div className="header">
      <div className="navbar_child-1">
       <Link to="/"> <img src={Logo} alt="logo" /></Link>
      </div>
      <div className="navbar_child-2  divide-x">
       <Link to="/all_products">All products</Link>
       <Link to="/about_seedra">About seedra</Link>
       <Link to="/our_blog">our blog</Link>
       <Link to="/contact">contacts</Link>
      </div>
      <div className="navbar_child-3">
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <div className="search">
         <img src={search} alt="" /> 
        <input type="text" placeholder="Search"/>
        </div>
        <img src={heart} alt="heart" />
        <img src={cart} alt="cart" />
      </div>
    </div>
    </div>
  );
}
