import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdHome as Home } from "react-icons/md";
import { AiFillMessage as Speaks } from "react-icons/ai";
import { RiShieldCheckLine as Verified } from "react-icons/ri";
import { FaRegStar as StarOutline } from "react-icons/fa";
import { FaCheck as Check } from "react-icons/fa";
import { parseISO, format, differenceInCalendarDays } from "date-fns";
import useConsumeContext from "../../context/LoginSignupModalContext";

import { getUpComingTripsByUserId } from "../../store/booking";
import { getPastTripsByUserId } from "../../store/booking";
import { cancelBooking } from "../../store/booking";
import PostReviewModal from "./PostReviewModal";

import "./ProfilePage.css";


function ProfilePage({}) {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const upcoming_trips = useSelector(state => state.booking.upcoming_trips);
    const past_trips = useSelector(state => state.booking.past_trips);

    const { handleReviewModal, showReview} = useConsumeContext();

    const [listingToReview, setListingToReview] = useState("");

    useEffect(() => {
        // setShowMenu(false);
        //console.log(sessionUser?.id);
        //dispatch(getListingById(Number(id)));
        dispatch(getUpComingTripsByUserId(sessionUser?.id));
        dispatch(getPastTripsByUserId(sessionUser?.id));

    }, [dispatch])

    const parseDateString = (str) => {
        return format(Date.parse(str), "MMM dd, yyyy")
    }

    const cancelTrip = (booking_id) => {
        dispatch(cancelBooking(sessionUser?.id, booking_id));
        //dispatch(getUpComingTripsByUserId(sessionUser?.id));
        console.log("trip cancelled")
    }

    const handleReviewClick = (listing_id) => {
        setListingToReview(listing_id)
        handleReviewModal();
    }

    return (
        <div className="profile__container">
            <div className="profile__info-container">
                <div className="profile__details">
                    <div className="profile__avatar">
                        <img src={sessionUser?.avatar} alt="" />
                    </div>
                    <div className="profile__identity-icons">
                        <StarOutline id="star-outline-icon" />
                        <p>Outstanding reviews</p>
                    </div>
                    <div className="profile__identity-icons">
                        <Verified id="verified-icon" />
                        <p>Identity verified</p>
                    </div>
                </div>
                <div className="profile__verification">
                    <h1>{sessionUser?.firstName} confirmed</h1>
                    <div className="verification__checks">
                        <Check id="check-icon" />
                        <p>Identity</p>
                    </div>
                    <div className="verification__checks">
                        <Check id="check-icon" />
                        <p>Email address</p>
                    </div>
                    <div className="verification__checks">
                        <Check id="check-icon" />
                        <p>Awesomeness</p>
                    </div>
                </div>
            </div>
            <div className="booking__info-container">
                <div className="user__profile-info-container">
                    <h1>Hi, I'm {sessionUser?.firstName}</h1>
                    <div className="profile__edit-container"><span>Edit Profile</span></div>
                    <h3>About</h3>
                    <p>{sessionUser?.bio}</p>
                    <div>
                        <Home id="home-icon" />
                        <p>Lives anywhere in the world</p>
                    </div>
                    <div>
                        <Speaks id="speaks-icon" />
                        <p>Speaks English</p>
                    </div>
                </div>
                <div className="all__bookings-container">
                    {upcoming_trips?.bookings.length > 0 ? <h2>Upcoming trips</h2> : <h2>No upcoming trips</h2>}
                    <div className="trip_container">
                            {upcoming_trips?.bookings.map(booking =>
                                <div className="trip_card">
                                    <img src={booking.listing.images[0].url} alt="Avatar"></img>
                                    <div className="tripInfo_container">
                                        <h4><b>{`${parseDateString(booking.check_in)} - ${parseDateString(booking.check_out)}`}</b></h4>
                                        <p>{`$${booking.total_cost}`}</p>
                                    </div>
                                    <div className="button_area" onClick={()=>cancelTrip(booking.id)}>
                                        <h4>Cancel Trip</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    {past_trips?.bookings.length > 0 ? <h2>Past trips</h2> : <h2>No upcoming trips</h2>}
                        <div className="trip_container">
                            {past_trips?.bookings.map(booking =>
                                <div className="trip_card">
                                    <img src={booking.listing.images[0].url} alt="Avatar"></img>
                                    <div className="tripInfo_container">
                                        <h4><b>{`${parseDateString(booking.check_in)} - ${parseDateString(booking.check_out)}`}</b></h4>
                                        <p>{`$${booking.total_cost}`}</p>
                                    </div>
                                    <div className="button_area" onClick={()=>{handleReviewClick(booking.listing.id)}}>
                                        <h4>Add Review</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                </div>
            </div>
            <div>
                <PostReviewModal listing_id={listingToReview}/>
            </div>
        </div>
    )
}

export default ProfilePage;
