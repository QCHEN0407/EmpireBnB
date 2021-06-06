import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SearchPage.css";
import GoogleMapAPI from "./GoogleMapAPI";
import { getListings } from "../../store/listing";

function SearchPage() {

    const listings = useSelector(state => state.listings);
    console.log(listings.listings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListings());
    }, [dispatch]);

    return (
        <div className="search-container">
            <div className="search_listing-container">
                Listing
            </div>
            <div className="google__maps-container">
                <GoogleMapAPI listings={listings.listings}/>
            </div>
        </div>
    )
}

export default SearchPage;