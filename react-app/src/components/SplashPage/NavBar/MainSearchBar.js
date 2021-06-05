import React from "react";
import "./MainSearchBar.css";
import { GoSearch as SearchIcon } from "react-icons/go";

function MainSearchBar({dark}) {

    return (
        <div className={`navbar__search__main ${dark}`} >
                <input className="navbar__search__input" placeholder="check-in date"/>
                <input className="navbar__search__input" placeholder="check-out date"/>
                <input className="navbar__search__input" placeholder="number of guests"/>
                <SearchIcon className="search-icon-main navbar__search__input" />
        </div>
    )
}

export default MainSearchBar;
