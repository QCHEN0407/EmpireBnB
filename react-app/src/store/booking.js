//ACTION TYPE///
const ADD_BOOKING = "booking/ADD_BOOKING";
const STORE_BOOKING = "booking/STORE_BOOKING";
const GET_BOOKING = "booking/GET_BOOKING";
const DELETE_BOOKING = "booking/DELETE_BOOKING";
const GET_UPCOMING_TRIPS = "booking/GET_UPCOMING_TRIPS";
const GET_PAST_TRIPS = "booking/GET_PAST_TRIPS";

////ACTION CREATORS////

const addBooking = (booking) => ({
    type: ADD_BOOKING,
    booking
});

const storeBooking = (booking) => ({
    type: STORE_BOOKING,
    booking
});

const getBooking = (booking) => ({
    type: GET_BOOKING,
    booking
});

const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    bookingId
});

const getUpcomingTrips = (bookings) => ({
    type: GET_UPCOMING_TRIPS,
    bookings
})

const getPastTrips = (bookings) => ({
    type: GET_PAST_TRIPS,
    bookings
})

///Thunk Action Creators///

export const createBooking = booking => async (dispatch) => {
    const res = await fetch(`/api/bookings/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ booking })
    })
    try {
        if (!res.ok) throw res
        const booking = await res.json();
        if (booking.errors) {
            return;
        }
        // dispatch(addBooking(booking))
        return booking;
    } catch (error) {
        console.log(error)
    }
}

export const storeNewBooking = booking => async (dispatch) => {
    dispatch(storeBooking(booking))
    return booking;
}

export const getBookings = (userId) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${userId}/bookings`)

    try {
        if (!res.ok) throw res
        const bookings = await res.json()
        dispatch(getBooking(bookings))
    } catch (error) {
        console.log(error)
    }
}

export const cancelBooking = (bookingId) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
    });
    try {
        if (!res.ok) throw res
        const bookingId = await res.json();
        dispatch(deleteBooking(bookingId))

    } catch (error) {
        console.log(error)
    }
}

export const getUpComingTripsByUserId = (userId) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${userId}/upcoming`)
    try {
        if (!res.ok) throw res
        const bookings = await res.json()
        dispatch(getUpcomingTrips(bookings))
    } catch (error) {
        console.log(error)
    }
}

export const getPastTripsByUserId = (userId) => async (dispatch) => {
    const res = await fetch(`/api/bookings/${userId}/past`)

    try {
        if (!res.ok) throw res
        const bookings = await res.json()
        dispatch(getPastTrips(bookings))
    } catch (error) {
        console.log(error)
    }
}


////Reducer////
const initialState = {};

const booking = (state = initialState, action) => {
    switch (action.type){
        case ADD_BOOKING:
            return action.booking.booking;
        case STORE_BOOKING:
            return action.booking;
        case GET_BOOKING:
            return action.bookings;
        case DELETE_BOOKING:
            const newState = {...state}
            delete newState[action.bookingId]
            return newState;
        case GET_UPCOMING_TRIPS:
            return {...state, upcoming_trips:action.bookings}
        case GET_PAST_TRIPS:
            return {...state, past_trips:action.bookings}
        default:
            return state;
    }
};

export default booking;
