const GET_LISTINGS = "listing/GET_LISTINGS";
const GET_CURRENT_LISTING = "listing/GET_CURRENT_LISTING"


const setListings = (listings) => ({
    type: GET_LISTINGS,
    listings
});

const setCurrentListing = (currentListing) => ({
    type: GET_CURRENT_LISTING,
    currentListing
})

export const getListings = () => async(dispatch) => {
    const res = await fetch("/api/listings/")

    try {
        if (!res.ok) throw res
        const listings = await res.json()
        dispatch(setListings(listings))
    }catch (error){
        console.log(error)
    }
}
export const getListingById = (id) => async(dispatch) => {
    const res = await fetch(`/api/listings/${id}`)

    try {
        if (!res.ok) throw res
        const currentListing = await res.json()
        dispatch(setCurrentListing(currentListing))
    }catch (error){
        console.log(error)
    }
}

export default function listings(state = {}, action) {
    switch(action.type){
        case GET_LISTINGS:
            return{...state, ...action.listings}
        case GET_CURRENT_LISTING:
            return{...state, currentListing:action.currentListing}
        default:
            return state;

    }
}
