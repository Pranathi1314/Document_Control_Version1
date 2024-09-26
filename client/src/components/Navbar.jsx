import React, { useState } from "react";
import "../styles/Navbar.css";
import menu_icon from '../assets/menu.jpg'
import logo from '../assets/logo.png'
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-router-dom";


export const Navbar = ({setSidebar}) => {
  const [isClicked, setClicked] = useState(false);
  console.log(MenuItems);
  return (
    <div>
    <nav className="NavbarItems">
    
        <div className="nav-left flex-div">
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
        <Link to='/'><img className="navbar-logo" src={logo} alt=""  /></Link>
        </div>

      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={isClicked ? "nav-menu active" : "nav-menu"}
            >
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </div>
  );
};


