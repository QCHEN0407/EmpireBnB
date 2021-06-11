const LOAD_REVIEWS = 'review/LOAD';
const ADD_REVIEW = 'review/ADD';

const loadReviews = reviews => ({
    type: LOAD_REVIEWS,
    reviews
});

const addReview = review => ({
    type: ADD_REVIEW,
    review
})

export const getReviews = (listingId) => async(dispatch) => {
    const res = await fetch(`/api/users/${listingId}/reviews`)

    try {
        if (!res.ok) throw res
        const reviews = await res.json()
        dispatch(loadReviews(reviews))
    } catch (error) {
        console.log(error)
    }
}

export const addSingleReview = (user_id, listing_id, review) => async(dispatch) => {
    const res = await fetch(`/api/reviews/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user_id, listing_id, review })
    })
    try {
        if (!res.ok) throw res
        const review = await res.json();
        if (review.errors) {
            return;
        }
        return review;
    } catch (error) {
        console.log(error)
    }
}

const initialState = {};

const reviews = (state=initialState, action) => {
    switch(action.type){
        case LOAD_REVIEWS:
            return action.reviews;
        default:
            return state;
    }
}

export default reviews;
