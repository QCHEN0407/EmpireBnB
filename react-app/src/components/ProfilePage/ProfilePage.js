import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { MdHome as Home } from "react-icons/md";
import { AiFillMessage as Speaks } from "react-icons/ai";
import { RiShieldCheckLine as Verified } from "react-icons/ri";
import { FaRegStar as StarOutline } from "react-icons/fa";
import { FaCheck as Check } from "react-icons/fa";

import "./ProfilePage.css";


function ProfilePage({dark}) {


    const sessionUser = useSelector(state => state.session.user);

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
                {/* <div className="all__bookings-container">
                    {bookings?.length > 0 ? <h2>Upcoming trips</h2> : <h2>No upcoming trips</h2>}
                    {Array.from(bookings)?.map(booking => <BookingResult booking={booking} key={booking.id}/>)}
                </div> */}
            </div>
        </div>
    )
}

export default ProfilePage;