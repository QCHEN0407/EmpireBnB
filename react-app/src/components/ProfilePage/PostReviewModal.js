import React, {useState} from 'react';
import useConsumeContext from "../../context/LoginSignupModalContext";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import "./PostReviewModal.css"
import { addSingleReview } from "../../store/review"

const PostReviewModal = ({listing_id}) => {
    const { handleReviewModal, showReview} = useConsumeContext();
    const sessionUser = useSelector(state => state.session.user);
    const [reviewText, setReviewText] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const submitReview = () => {
        dispatch(addSingleReview(sessionUser?.id, listing_id, reviewText));
        history.push(`/listings/${listing_id}`);
    }

    return (
        <>
            {showReview && (
                <Modal onClose={() => handleReviewModal()}>
                    <form onSubmit={submitReview}>
                        <div className="review_container">
                            <div className="review_title">
                                How was your stay?
                            </div>
                            <textarea id="text_area" rows="10" cols="50" onChange={(e)=>{setReviewText(e.target.value)}}></textarea>
                            <button type="submit"> Submit your Review </button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
};

export default PostReviewModal;