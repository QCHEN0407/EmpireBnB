import React, {useRef, useCallback} from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import CustomMarker from "../../images/map_marker/house_2.png";
import { NavLink, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const libraries = ["places"];
const mapContainerStyle = {
    height: "89.2vh"
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: true,
    streetViewControl: true,
};

const center = { // New York City
    lat:  40.71427,
    lng: -74.00597,
};

const GoogleMapAPI = ({ listings }) =>  {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCs8UCbtHYbl_NDL842oH0jEiV_k3ATOCo',
        libraries
    });

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/listings/${id}`)
    };

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>  
            <GoogleMap 
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
            {listings?.map(listing => (
                <Marker 
                    key={listing.id}
                    position={{ lat: listing.latitude, lng: listing.longitude}}
                    //label={{color: 'white', fontWeight: '600', fontSize: '12px', text: `$${listing.price}` }}
                    icon={{
                        url: CustomMarker,
                        //scaledSize: new window.google.maps.Size(42, 35),
                        scaledSize: new window.google.maps.Size(42, 35),
                        labelOrigin: new window.google.maps.Point(21, 13),
                        anchor: new window.google.maps.Point(15, 15)
                    }}
                    animation={window.google.maps.Animation.DROP}
                    clickable={true}
                    onClick={() => handleClick(listing.id)}
                />
            ))}
            </GoogleMap>
        </div>
    )
}

export default GoogleMapAPI;