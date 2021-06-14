import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "./SearchPage.css";
import GoogleMapAPI from "./GoogleMapAPI";
import { getListings } from "../../store/listing";
import SearchListingCard from "./SearchListingCard";

function SearchPage() {
    const {category} = useParams();
    const listings = useSelector(state => state.listings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListings());
        // console.log(category);
    }, [dispatch]);

    return (
        <div className="search-container">
            <div className="search_listing-container">
                <div className="search__listings-info">
                    <p>
                        <span>{listings?.listings?.filter(listing => listing.type === category || category === "all").length}+ stays</span>
                        {/* <span>・MMMM dd to MMMM dd</span>
                        <span>・Num guests</span> */}
                    </p>
                    <h1>Stays in New York</h1>
                    <button><p>Cancellation flexibility</p></button>
                    <button><p>Type of place</p></button>
                    <button><p>Price</p></button>
                    <button><p>More filters</p></button>
                </div>
                { listings?.listings?.length !== 0 ? listings?.listings?.filter(listing => listing.type === category || category === "all").map(listing => (

                    <NavLink to={`/listings/${listing?.id}`} style={{ textDecoration: "none" }} key={listing?.id}>
                        <SearchListingCard listing={listing} />
                    </NavLink>
                )) : <div className="no__stays">
                        <h4>No results</h4>
                        <p>To get more results, try adjusting your search by area.</p>
                    </div>
                }
            </div>
            <div className="google__maps-container">
                <GoogleMapAPI listings={listings?.listings?.filter(listing => listing.type === category || category === "all")} zoomValue={category==="Getaway"?8:12}/>
            </div>
        </div>
    )
}

export default SearchPage;
