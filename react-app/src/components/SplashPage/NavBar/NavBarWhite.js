import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GoSearch as SearchIcon } from "react-icons/go";
import { MdLanguage as LanguageIcon } from "react-icons/md";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { FaUserCircle as AvatarIcon } from "react-icons/fa";
import Logo from '../../../images/empirebnbLOGO/blackTLogo.png';
import LogoBNW from '../../../images/empirebnbLOGO/whiteTLogo.png';
import DropdownMenu from "./DropdownMenu";
import useConsumeContext from "../../../context/LoginSignupModalContext";
import MainSearchBar from "./MainSearchBar"
import "./NavBar.css";

const NavBar = ({ isLoaded }) => {
    const [dark, setDark] = useState('');
    const [logo, setLogo] = useState(Logo);
    const { showMenu, setShowMenu, setShowLogin, setShowSignUp } = useConsumeContext();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const openMenu = () => {
        setShowMenu(!showMenu);
        setShowLogin(false);
        setShowSignUp(false);
    };

    const handleClick = () => {
        history.push("/search");
    }

    return (
        <nav className={`navbar__container`}>
            <NavLink to="/" exact={true} activeClassName="active">
            <img
                className="navbar__logo"
                src={logo}
                alt="AirBnB Logo" />
            </NavLink>

            <div className={`navbar__search`} onClick={handleClick}>
                <div className="navbar__search-title">
                    Start your search
                </div>
                <SearchIcon onClick={handleClick} className="search-icon" />
            </div>

            <div className={`navbar__buttons ${dark}`}>
            <div className={`become-a-host ${dark}`}><p>Become a host</p></div>
            <LanguageIcon className={`language-icon ${dark}`} />
            <div id={`menu-avatar`} className={`${dark}`} onClick={openMenu}>
            <MenuIcon id="menu-icon" />
            {sessionUser ? <img id="avatar" src={sessionUser.avatar} alt="" /> : <AvatarIcon id="avatar" />}
            </div>
            {showMenu &&
                <DropdownMenu dark={dark} isLoaded={isLoaded} />
            }
            </div>

        </nav >
    );
}

export default NavBar;
