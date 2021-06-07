//ACTION TYPE///
const ADD_BOOKING = "booking/ADD_BOOKING";
const STORE_BOOKING = "booking/STORE_BOOKING";
const GET_BOOKING = "booking/GET_BOOKING";
const DELETE_BOOKING = "booking/DELETE_BOOKING";

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

///Thunk Action Creators///

export const createBooking = booking => async (dispatch) => {
    const res = await fetch(`/api/bookings/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({booking})
    })
    try {
        if (!res.ok) throw res
        const booking = await res.json();
        if (booking.errors) {
            return ;
        }
        dispatch(addBooking(booking))
        return booking;
    } catch (error) {
        console.log(error)
    }
}

export const storeNewBooking = booking => async(dispatch) => {
    dispatch(storeBooking(booking))
    return booking;
}

export const getBookings = (userId) => async (dispatch) => {
    const res = await fetch("/api/users/userId")
}
