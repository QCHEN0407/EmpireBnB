import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EntireHomes from "../../images/homepage/entireHome.jpeg";
import UniqueStays from "../../images/homepage/cityViewStays.jpeg";
import Outdoor from "../../images/homepage/outdoorGetaway2.jpeg";
import PetsAllowed from "../../images/homepage/petAllowed.jpeg";
import Montauk from "../../images/homepage/explore_Montauk.jpeg";
import Woodstock from "../../images/homepage/explore_Woodstock.jpeg";
import AtlanticCity from "../../images/homepage/explore_AtlanticCity.jpeg";
import LakeGeorgevillage from "../../images/homepage/explore_LakeGeorgeVillage.jpeg";
import Newport from "../../images/homepage/explore_Newport.jpeg";
import Hudson from "../../images/homepage/explore_Hudson.jpeg";
import OceanCity from "../../images/homepage/explore_OceanCity.jpeg";
import CapeMay from "../../images/homepage/explore_CapeMay.jpeg";
import { getListings } from "../../store/listing";
import useConsumeContext from "../../context/LoginSignupModalContext";
import Banner from './Banner';
import Tile from "./Tile";
import City from "./City";
import "./Splash.css";

const SplashPage = () => {
  const listings = useSelector(state => state.listings.listings);
  const { setShowMenu } = useConsumeContext();
  const dispatch = useDispatch();

  useEffect(() => {
    setShowMenu(false);
    dispatch(getListings());
  }, [dispatch, setShowMenu]);

  const image1 = listings?.[5].images[0].url;
  const image2 = listings?.[1].images[0].url;
  const image3 = listings?.[2].images[0].url;
  const image4 = listings?.[3].images[0].url;

  return (
    <>
      <Banner />
      <h1 className="tile__title">Explore Nearby</h1>
      <div className='city__container'>
        <NavLink to={`/search/mercer_island`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Montauk}
            title="Montauk"
            description="3 hour drive"
            />
        </NavLink>
        <NavLink to={`/search/north_seattle`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Woodstock}
            title="Woodstock"
            description="2.5 hour drive"
          />
        </NavLink>
        <NavLink to={`/search/downtown`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={AtlanticCity}
            title="Atlantic City"
            description="2.5 hour drive"
            />
        </NavLink>
        <NavLink to={`/search/bellevue`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={LakeGeorgevillage}
            title="Lake George Village"
            description="4.5 hour drive"
            />
        </NavLink>
        <NavLink to={`/search/uptown`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Newport}
            title="Newport"
            description="4.5 hour drive"
            />
        </NavLink>
        <NavLink to={`/search/greenlake`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={Hudson}
            title="Hudson"
            description="3 hour drive"
            />
        </NavLink>
        <NavLink to={`/search/slu`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={OceanCity}
            title="Ocean City"
            description="3 hour drive"
            />
        </NavLink>
        <NavLink to={`/search/belltown`} style={{ textDecoration: "none", color: "inherit" }}>
          <City
            src={CapeMay}
            title="Cape May"
            description="3.5 hour drive"
          />
        </NavLink>
      </div>
      <h1 className="tile__title">Live Anywhere</h1>
      <div className='tile__container'>
        <div id="live_anywhere"></div>
        <NavLink to={`/search`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={EntireHomes}
            title="Entire homes"
            />
        </NavLink>
        <NavLink to={`/search/unique_stays`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={UniqueStays}
            title="CityView Stays"
            />
        </NavLink>
        <NavLink to={`/search/outdoor_getaways`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={Outdoor}
            title="Outdoor getaways"
            />
        </NavLink>
        <NavLink to={`/search`} style={{ textDecoration: "none", color: "inherit" }}>
          <Tile
            src={PetsAllowed}
            title="Pets allowed"
            />
        </NavLink>
      </div>
      <div className="getAway_poster">
        <img src="https://empirebnb.s3.us-east-2.amazonaws.com/ny__images/getaway_banner.jpeg"></img>
        <div className="outdoorBanner_text">
          <h1>The<br/>Greatest Outdoors</h1>
          <p>Wishlists curated by Empirebnb.</p>
          <button>Get inspired</button>
        </div>

      </div>
      <h1 className="tile__title">Become a NewYorker</h1>
      <div className='tile__container'>
        <NavLink to={`/listings/${listings?.[5].id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image1}
            title={listings?.[5].title}
            description={listings?.[5].description.substring(0,150) + "..."}
            price={`$${listings?.[5].price} / night`}
          />
        </NavLink>
        <NavLink to={`/listings/${listings?.[1].id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image2}
            title={listings?.[1].title}
            description={listings?.[1].description.substring(0,150) + "..."}
            price={`$${listings?.[1].price} / night`}
          />
        </NavLink>
        <NavLink to={`/listings/${listings?.[2].id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image3}
            title={listings?.[2].title}
            description={listings?.[2].description.substring(0,150) + "..."}
            price={`$${listings?.[2].price} / night`}
          />
        </NavLink>
        <NavLink to={`/listings/${listings?.[3].id}`} style={{ textDecoration: "none" }}>
          <Tile
            src={image4}
            title={listings?.[3].title}
            description={listings?.[3].description.substring(0,150) + "..."}
            price={`$${listings?.[3].price} / night`}
          />
        </NavLink>
      </div>
    </>
  )
}

export default SplashPage;
