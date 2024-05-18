import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import instagram from '../assets/instagram_icon.png'
import facebook from '../assets/facebook_icon.png'
import heart from '../assets/heart.png'
import cart from '../assets/cart.png'
import search from '../assets/icon_search.png'
export default function Header() {
  const Bar = useRef();
  const Icon = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
    if (Bar.current && Icon.current) {
      Bar.current.style.opacity = isOpen ? 1 : 0;
      Bar.current.style.cursor = isOpen ? 'pointer' : 'default';
      Bar.current.style.transform = "translateY(5px)";
      Bar.current.style.height = "150px";
      Bar.current.style.boxShadow = "0 0 10px 1px rgb(234, 234, 234)"
    }
  };
  return (
    <div className="navbar">
      <div className="header">

      <div className="navbar_child-1">
       <Link to="/"> <img src={Logo} alt="logo" /></Link>
      </div>

      <div className="navbar_child-2">
      <i onClick={()=>toggleBar()} ref={Icon} className="fa-solid fa-bars menu"></i>
       <div ref={Bar} className="bar ">
       <Link to="/all_products">All products</Link>
       <Link to="/about_seedra">About seedra</Link>
       <Link to="/our_blog">our blog</Link>
       <Link to="/contact">contacts</Link>
       </div>
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
