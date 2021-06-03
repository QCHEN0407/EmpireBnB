import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { FaUserCircle as AvatarIcon } from "react-icons/fa";
import Logo from '../../images/homepage/airbnb-logo.png';
import LogoBNW from '../../images/homepage/airbnb-logo-bnw.png';
import DropdownMenu from "./DropdownMenu";
import useConsumeContext from "../../context/LoginSignupModalContext";
import "./Navbar.css";

const NavBar = ({ isLoaded }) => {
  const [black, setBlack] = useState('black');
  const [logo, setLogo] = useState(LogoBNW);
  const { showMenu, setShowMenu, setShowLogin, setShowSigUp } = useConsumeContext();
  const history = useHistory();


  //trigger the navbar style change
  useEffect(() => {
    const scrollFunction = function () {
      if (window.pageYOffset > 0) {
        setLogo(Logo);
        setDark("");
      } else if (window.pageYOffset === 0) {
        setLogo(LogoBNW);
        setDark("black");
      }
    };
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);


return (
  <nav className={`navbar__container ${dark}`}>
    <NavLink to="/" exact={true} activeClassName="active">
      <img
        className="navbar__logo"
        src={logo}
        alt="AirBnB Logo" />
    </NavLink>
    {dark === "dark" && <div className={`navbar__info ${dark}`}>
      <span><a href="#explore_nearby">Explore Nearby</a></span>
      <span><a href="#live_anywhere">Live Anywhere</a></span>
      <span><a href="#featured_homes">Featured Homes</a></span>
    </div>}
    <div className={`navbar__buttons ${dark}`}>
      <div className={`become-a-host ${dark}`}><p>Become a host</p></div>
      <LanguageIcon className={`language-icon ${dark}`} />
      <div id={`menu-avatar`} className={`${dark}`} onClick={openMenu}>
        <MenuIcon id="menu-icon" />
        {sessionUser ? <img id="avatar" src={sessionUser.avatar} alt="" /> : <AvatarIcon id="avatar" />}
      </div>
      {showMenu && <DropdownMenu dark={dark} isLoaded={isLoaded} />}
    </div>

    {/* <NavLink to="/login" exact={true} activeClassName="active">
    Login
          </NavLink>

      <NavLink to="/sign-up" exact={true} activeClassName="active">
      Sign Up
          </NavLink>

      <NavLink to="/users" exact={true} activeClassName="active">
      Users
          </NavLink>

      <LogoutButton /> */}

  </nav >
);
}

export default NavBar;
