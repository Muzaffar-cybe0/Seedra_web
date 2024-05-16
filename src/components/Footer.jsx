import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
export default function Footer() {
  return (
    <div className="footer">
      <div >
        <span >
        <Link>All products</Link>
        <Link>About seedra</Link>
        <Link>our blog</Link>
        </span>
        <img src={Logo} alt="logg" className="footer_logo"/>
        <span>
        <Link>Terms&condidtions</Link>
        <Link>Privacy policy</Link>
        </span>
      </div>
     <div></div>
      <div>
        <span>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        </span>
        <p>All rights Reserved</p>
      </div>
    </div>
  );
}
