import React from "react";
import BannerImage from "../../images/homepage/main__bkg.jpeg";
import "./Banner.css";

function Banner() {

    return (
        <div className="banner__container">
            <div className="banner__image">
                <img src={BannerImage} alt="Cabin in the woods" />
            </div>
            <div id="explore_nearby" className="banner__message">
                <p>Made possible by Hosts</p>
            </div>
        </div>
    )
}

export default Banner;
