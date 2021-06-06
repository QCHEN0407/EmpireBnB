const GET_LISTINGS = "listing/GET_LISTINGS"


const setListings = (listings) => ({
    type: GET_LISTINGS,
    listings
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

export default function listings(state = {}, action) {
    switch(action.type){
        case GET_LISTINGS:
            return{...state, ...action.listings}
        default:
            return state;
    }
}
