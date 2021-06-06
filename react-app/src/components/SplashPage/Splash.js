import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EntireHomes from "../../images/homepage/entire-homes.webp";
import UniqueStays from "../../images/homepage/unique-stays.webp";
import Outdoor from "../../images/homepage/farms-and-nature.webp";
import PetsAllowed from "../../images/homepage/pets-allowed.webp";
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
  const listings = useSelector(state => state.listings);
  const { setShowMenu } = useConsumeContext();
  const dispatch = useDispatch();

  useEffect(() => {
    setShowMenu(false);
    dispatch(getListings());
  }, [dispatch, setShowMenu]);

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
            title="Unique stays"
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
      <h1 className="tile__title">Featured Homes</h1>
      <div className='tile__container'>
        <div id="featured_homes"></div>
        <NavLink to={`/listings/`} style={{ textDecoration: "none" }}>
          <Tile
            src={Newport}
            title={`title 2`}
            description="Indulge in a genuine Finnish sauna and shower outdoors surrounded by bamboo in this luxurious spa retreat just 15 minutes from downtown Seattle."
            price={`$100 / night`}
          />
        </NavLink>
        <NavLink to={`/listings/`} style={{ textDecoration: "none" }}>
          <Tile
            src={Hudson}
            title={`title 1`}
            description="A stunning, serene, and cozy apartment in the heart of Seattle, with vaulted ceilings, wood paneling, mid-century decor, and a heated bathroom tile floor."
            price={`$100 / night`}
          />
        </NavLink>
        <NavLink to={`/listings/`} style={{ textDecoration: "none" }}>
          <Tile
            src={CapeMay}
            title={`title 4`}
            description="Wake up feeling recharged in this open-plan and cozy apartment ideal for lounging. Experience a private retreat just minutes from the city."
            price={`$100 / night`}
          />
        </NavLink>
        <NavLink to={`/listings/`} style={{ textDecoration: "none" }}>
          <Tile
            src={AtlanticCity}
            title={`title 3`}
            description="This home boasts eclectic furnishings and decor, splashes of bright color throughout, contrasting rustic modern finishes, and an exclusive guest patio."
            price={`$100 / night`}
          />
        </NavLink>
      </div>
    </>
  )
}

export default SplashPage;
