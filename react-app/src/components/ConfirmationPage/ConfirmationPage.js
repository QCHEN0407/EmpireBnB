import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { RiStarSFill as Star } from "react-icons/ri";
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { IoIosArrowBack as BackButton } from "react-icons/io";

import "./ConfirmationPage.css";

const ConfirmationPage = ({ }) => {
    const booking = useSelector(state => state.booking)
    const listing = useSelector(state => state.listings.currentListing)
    const imagesArray = listing?.images;
    const city = listing?.city;
    const type = listing?.type;
    const title = listing?.title;
    const num_guests = listing?.num_guests;
    const bed = listing?.num_beds;
    const bath = listing?.num_baths;
    const rating = listing?.rating;

    const guest = booking?.num_guests;
    const startDate = format(booking?.check_in, "MMM dd, yyyy");
    const endDate = format(booking?.check_out, "MMM dd, yyyy");

    const num_nights = differenceInCalendarDays(booking.check_out, booking.check_in);
    let price = (listing?.price * num_nights);
    const cleaning = 27;
    const service = 19.93;
    const taxes = ((price + cleaning + service) * 0.13).toLocaleString(undefined, { maximumFractionDigits: 2 });
    const total = (price + cleaning + service + parseFloat(taxes)).toLocaleString(undefined, { maximumFractionDigits: 2 });


    const handleClick = (e) => {
        e.preventDefault();

        // const createdBooking = dispatch(createBooking(booking));
        // if (createdBooking) {
        //     history.push(`/users/${sessionUser.id}`);
        // }
    }

    return (
        <>
          <div className="confirm__booking-container">
                <div className="back__button">
                    <NavLink to={`/listings/${listing?.id}`}>
                        <div id="back__button"><BackButton /></div>
                    </NavLink>
                    <h1>Confirm and pay</h1>
                </div>
                <div className="booking__details-container">
                    <div className="booking__details">
                        <div className="your__trip">
                            <h2>Your trip</h2>
                            <h3>Dates</h3>
                            <p>{startDate} - {endDate}</p>
                            <h3>Guests</h3>
                            <p>{guest > 1 ? `${guest} guests` : `${guest} guest`}</p>
                        </div>
                        <div className="cancellation">
                            <h2>Cancellation policy</h2>
                            <p>Free cancellation for 48 hours. After that, cancel before 3:00 PM on {startDate} and get a full refund, minus the service fee.</p>
                            <br></br>
                            <p><span>Make sure this host’s cancellation policy works for you. </span>Our Extenuating Circumstance policy may not cover travel disruptions caused by known events, like COVID-19, or foreseeable events, like common severe weather.</p>
                        </div>
                        <div className="agreement__policies">
                            <p>By selecting the button below, I agree to the <span>House Rules, Safety Disclosures, Cancellation Policy, Airbnb’s social-distancing and other COVID-19-related guidelines</span>, and the <span>Guest Refund Policy</span>. I also agree to pay the total amount shown, which includes Occupancy Taxes and Service Fees. Airbnb now collects and remits government-imposed <span>Occupancy Taxes</span> in this location.</p>
                        </div>
                        <div className="confirm__pay-button">
                            <button type="submit" onClick={handleClick}>Confirm and pay</button>
                        </div>
                    </div>
                    <div className="booking__total-container">
                        <div className="booking__total">
                            <div className="booking__image-container">
                                <div className="booking__image">
                                    <img src={imagesArray ? imagesArray[0].url : null} alt="" />
                                    <div className="booking__listing-details">
                                        <p>{listing?.type} in {listing?.city}</p>
                                        <h4>{listing?.title}</h4>
                                        <p>
                                            <span>{bed > 1 ? `${bed} beds` : `${bed} bed`}</span>
                                            <span>・</span>
                                            <span>{bath > 1 ? `${bath} baths` : `${bath} bath`}</span>
                                        </p>
                                        <div>
                                            <span><Star className="booking__star" /></span>
                                            <span className="booking__rating">{`${listing?.rating}`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="price__details-title">
                                    <h2>Price details</h2>
                                </div>
                                <div className="price__details">
                                    <div className="price__leftside">
                                        <div>${listing?.price} x {num_nights > 1 ? `${num_nights} nights` : `${num_nights} night`}</div>
                                        <div>Cleaning fee</div>
                                        <div>Service fee</div>
                                        <div>Occupancy taxes and fees</div>
                                        <div className="total__cost">Total <span>(USD)</span></div>
                                    </div>
                                    <div className="price__rightside">
                                        <div>${price}.00</div>
                                        <div>${cleaning}.00</div>
                                        <div>${service}</div>
                                        <div>${taxes}</div>
                                        <div className="total__cost">${total}</div>
                                    </div>
                                </div>
                                <div className="cancellation__reminder">
                                    <p><span>Free cancellation for 48 hours. </span>After that, cancel before 3:00 PM on {startDate} and get a 50% refund, minus the service fee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmationPage;
