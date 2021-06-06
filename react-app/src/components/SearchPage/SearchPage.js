import React from "react";
import "./SearchPage.css";
import GoogleMapAPI from "./GoogleMapAPI";

function SearchPage() {

    let listings = [];

    return (
        <div className="search-container">
            <div className="search_listing-container">
                Listing
            </div>
            <div className="google__maps-container">
                <GoogleMapAPI listings={Array.from(listings)}/>
            </div>
        </div>
    )
}

export default SearchPage;