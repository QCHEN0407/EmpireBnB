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

const NavBar = ({isLoaded}) => {




  return (
    <nav className={`navbar__container ${dark}`}>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>

          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>

          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>

          <LogoutButton />

    </nav>
  );
}

export default NavBar;
